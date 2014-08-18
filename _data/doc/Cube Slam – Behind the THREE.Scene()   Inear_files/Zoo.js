var Zoo = (function() {

	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	
	var zoo = this;
	var bear  = null;
	var stats;

	var camera, scene, renderer;
	var zooContainer;
	
	var progress = 0.5;
	var lastProgress = 0;

	var cheering = false;
	var lookAnimationStart = 10;
	var lookKeyframes = 20;
	var lookInterpolation = 1 / lookKeyframes;

	var cheeringStartTime = 0;
	var cheeringDuration = 3000;
	var cheeringKeyframes = 60;
	var cheeringAnimationStart = 40;
	var cheeringInterpolation = cheeringDuration/cheeringKeyframes;
	
	var lastKeyframe = 0, currentKeyframe = 0;

	var mouse2d = new THREE.Vector3();

	zoo.init = function(){

	  if( !Detector.webgl ){
	    Detector.addGetWebGLMessage();  
	    return;
	  }

	  zoo.init3D();
	  zoo.initLights();
	  zoo.loadModels()

	  stats = new Stats();
	//container.appendChild( stats.domElement );

	}

	zoo.init3D = function() {
		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 100, 4000 );
		camera.position.z = 500
		camera.position.y = 100

		scene = new THREE.Scene();

		zooContainer = new THREE.Object3D();
		scene.add(zooContainer);

		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.sortElements = false;
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		$("#zoo").append( renderer.domElement );

		window.addEventListener( 'resize', zoo.onWindowResize, false );
		window.addEventListener( 'mousemove', zoo.onDocumentMouseMove, false );

		$(document).click( zoo.onMouseClick)
	}

	zoo.initLights = function() {
		var pointLight = new THREE.PointLight( 0xFFFFFF ,0.6,200);
		pointLight.intensity = 1.0;
		pointLight.position.set( 0, 0, 200 );
		scene.add(pointLight);

		var dirLight = new THREE.DirectionalLight( 0xFFFFff );
		dirLight.position.set( 0, 1130, 500 );
		dirLight.lookAt(zooContainer.position);

		zooContainer.add(dirLight);
	}

	zoo.loadModels = function(){
		var loader = new THREE.JSONLoader( true );
		loader.load( "models/bear.js", function( geometry ) {

			var texture = THREE.ImageUtils.loadTexture( "models/animals_texture_09.jpg" );
			texture.anisotropy = renderer.getMaxAnisotropy();
  			texture.minFilter = texture.magFilter = THREE.LinearMipMapLinearFilter;
			texture.flipY = false;
			texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
			
			var lambertShader = THREE.ShaderLib['lambert'];
			var uniforms = THREE.UniformsUtils.clone(lambertShader.uniforms);

			uniforms.map.value = texture;
			uniforms.diffuse.value = new THREE.Color(0x000000).setRGB(81/255,72/255,66/255);
			uniforms.ambient.value = new THREE.Color(0x4d87dc);

			var shaderMat =  new THREE.ShaderMaterial({
			    morphNormals:false,
			    morphTargets:true,
			    lights:true,

			    uniforms: uniforms,
			    vertexShader: [

			      "#define LAMBERT",
			      "varying vec3 vLightFront;",
					THREE.ShaderChunk[ "map_pars_vertex" ],
					THREE.ShaderChunk[ "lights_lambert_pars_vertex" ],
					THREE.ShaderChunk[ "color_pars_vertex" ],
					THREE.ShaderChunk[ "morphtarget_pars_vertex" ],

					"void main() {",
						THREE.ShaderChunk[ "map_vertex" ],
						THREE.ShaderChunk[ "color_vertex" ],
						THREE.ShaderChunk[ "morphnormal_vertex" ],
						THREE.ShaderChunk[ "defaultnormal_vertex" ],
						THREE.ShaderChunk[ "morphtarget_vertex" ],
						THREE.ShaderChunk[ "default_vertex" ],
						THREE.ShaderChunk[ "worldpos_vertex" ],
						THREE.ShaderChunk[ "lights_lambert_vertex" ],
					"}"

			    ].join("\n"),
			    fragmentShader: [
			      "varying vec3 vLightFront;",			     
			      "uniform vec3 ambient;",
			      "uniform vec3 diffuse;",

				THREE.ShaderChunk[ "map_pars_fragment" ],
				THREE.ShaderChunk[ "fog_pars_fragment" ],

			      "void main() {",

			      	"gl_FragColor = vec4(1.0);",
			        
			        THREE.ShaderChunk[ "color_fragment" ],

					"vec4 texelColor = texture2D( map, vUv );",
					"vec3 bodyColor = (diffuse*texelColor.r*0.3+(texelColor.g*ambient*0.6));",
					"gl_FragColor = vec4( bodyColor + vec3(step(0.4,texelColor.b))*bodyColor*8.0,1.0);",
					
					//"gl_FragColor *= vLightFront;",

					THREE.ShaderChunk[ "linear_to_gamma_fragment" ],
					THREE.ShaderChunk[ "fog_fragment" ],

			      "}"

			    ].join("\n")
			  });
	
			shaderMat.map = true;

			/*var shaderMat = new THREE.MeshLambertMaterial( {map:null, morphTargets:true})*/
			bear = new THREE.Mesh( geometry, shaderMat ) ;
			bear.scale.set( 5.5, 5.5, 5.5 );
			scene.add( bear );

			var planeGeo = new THREE.PlaneGeometry(10000,10000,1000,2,2,2);
			var plane = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial({color:0x4d87dc}));
			plane.rotation.x = Math.PI*-.5;
			scene.add(plane);

			zoo.update();
		} );

	}

	zoo.onWindowResize = function() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	zoo.onDocumentMouseMove = function( event ) {
		event.preventDefault();
		mouse2d.x = ((event.clientX - $("#zoo").offset().left) / window.innerWidth );
		mouse2d.y = - (( (event.clientY)-$("#zoo").offset().top) / window.innerHeight );
	}

	zoo.onMouseClick = function( event ) {
		event.preventDefault();
		cheeringStartTime = Date.now()
		cheering = true;
	}


	zoo.update = function(dt,t) {
	  	zoo.render();
	  	TWEEN.update();

	  	if ( bear ) {

			if( cheering ) {
				//cheering
				var time = (Date.now()-cheeringStartTime) % cheeringDuration;
				var keyframe = cheeringAnimationStart + Math.floor( time / cheeringInterpolation );
				


				if ( keyframe != currentKeyframe ) {

					bear.morphTargetInfluences[ lastKeyframe ] = 0;
					bear.morphTargetInfluences[ currentKeyframe ] = 1;
					bear.morphTargetInfluences[ keyframe ] = 0;

					lastKeyframe = currentKeyframe;
					currentKeyframe = keyframe;
				}

				bear.morphTargetInfluences[ keyframe ] = ( time % cheeringInterpolation ) / cheeringInterpolation;
				bear.morphTargetInfluences[ lastKeyframe ] = 1 - bear.morphTargetInfluences[ keyframe ];

				if( keyframe >= cheeringAnimationStart+cheeringKeyframes-1) {
					cheering = false;
				}

				progress = 0.5;

			}
			else {
				//looking
				
				progress += (mouse2d.x-progress)/3;

				var keyframe = Math.floor(progress * lookKeyframes) +lookAnimationStart;

				if ( keyframe != currentKeyframe ) {

					bear.morphTargetInfluences[ lastKeyframe ] = 0;
					bear.morphTargetInfluences[ currentKeyframe ] = 1;
					bear.morphTargetInfluences[ keyframe ] = 0;

					lastKeyframe = currentKeyframe;
					currentKeyframe = keyframe;

				}

				var useProgress = progress;
				if(useProgress<lastProgress) {
					useProgress = (1-useProgress)
				}

				bear.morphTargetInfluences[ keyframe ] = ( useProgress % lookInterpolation ) / lookInterpolation;
				bear.morphTargetInfluences[ lastKeyframe ] = 1 - bear.morphTargetInfluences[ keyframe ];
				
				lastProgress = progress;
			}
		}

		bear.rotation.y += 0.005

		requestAnimationFrame( zoo.update );
	}

	zoo.render = function(){
		renderer.render( scene, camera );
	}

	return zoo;

})();