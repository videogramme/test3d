var Zoo = (function() {

	/*
	bear

	0-40 : Left-right_loop
	41-100 : hurrah!

	Bird_01

	0-24 : flying loop

	Bird_02

	0-24 : walk loop

	Bird_03

	0-34 : walk loop

	Bird_04

	0-22 : picking ground

	23-54 : looking up

	Moose

	0-19 : walk loop
	20-66 : look up
	67-145 : look down

	Rabbit

	0-19 : jumploop
	20-69 : stopsniff
	*/

	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

	var zoo = this;
	var bear  = null;
	var rabbit  = null;
	var moose  = null;
	var bird1  = null;
	var bird2  = null;
	var bird3  = null;
	var animals = [null,null,null,null,null];

	var camera, scene, renderer;
	var zooContainer;

	var mouse2d = new THREE.Vector3();

	var particles;

	var step = -1;
	var targetDummie = new THREE.Vector3();
	var cameraPositions = [
		[-600,80,100],
		[-240,-60,85],
		[-50,150,150],
		[200,300,300],
		[600,-100,100],
	]

	zoo.init = function(){

	  if( !Detector.webgl ){
	    Detector.addGetWebGLMessage();
	    return;
	  }

	  this.snowUniforms = null;
	  this.animalMaterial = null;

	  this.groundColor = 0x4d87dc;
	  //this.groundColor = 0xcae6f3;

	  zoo.init3D();
	  this.createMaterial();
	  //zoo.createGround();
	  zoo.initLights();
	  zoo.loadModels();


	}

	zoo.init3D = function() {
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1000
		camera.position.y = 400
		camera.position.x = 0

		scene = new THREE.Scene();
		camera.lookAt(new THREE.Vector3(0,0,0))

		zooContainer = new THREE.Object3D();
		scene.add(zooContainer);

		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.sortElements = false;
		renderer.setClearColorHex(this.groundColor,1)
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.physicallyBasedShading = true;
		$("#zoo").append( renderer.domElement );

		window.addEventListener( 'resize', zoo.onWindowResize, false );
		window.addEventListener( 'mousemove', zoo.onDocumentMouseMove, false );
		$(document).click( zoo.onMouseClick)
	}

	zoo.initLights = function() {

		var dirLight = new THREE.DirectionalLight( 0xFFFFff,0.9 );
		dirLight.position.set( 0, 1130, 500 );
		dirLight.lookAt(zooContainer.position);

		//zooContainer.add(dirLight);

		var pointLight = new THREE.PointLight( 0xFFFFff,0.7 );
		pointLight.position.set( 0, 100, 100 );
		//zooContainer.add(pointLight);

		var pointLight = new THREE.PointLight( 0xFFFFff,0.4 );
		pointLight.position.set( 0, 500, 0 );
		//zooContainer.add(pointLight);
	}

	zoo.createMaterial = function() {
		var texture = THREE.ImageUtils.loadTexture( "models/animals_texture_10.jpg" );
		//texture.anisotropy = renderer.getMaxAnisotropy();
		texture.minFilter = texture.magFilter = THREE.LinearMipMapLinearFilter;
		texture.flipY = false;
		texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

		var lambertShader = THREE.ShaderLib['lambert'];
		var uniforms = THREE.UniformsUtils.clone(lambertShader.uniforms);

		uniforms.map.value = texture;
		uniforms.diffuse.value = new THREE.Color(0x000000).setRGB(81/255,72/255,66/255);
		uniforms.ambient.value = new THREE.Color(this.groundColor);

		this.animalMaterial =  new THREE.ShaderMaterial({
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
					THREE.ShaderChunk[ "defaultnormal_vertex" ],
					THREE.ShaderChunk[ "morphtarget_vertex" ],
					THREE.ShaderChunk[ "default_vertex" ],
					THREE.ShaderChunk[ "worldpos_vertex" ],
					//THREE.ShaderChunk[ "lights_lambert_vertex" ],
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
				"gl_FragColor = vec4( bodyColor + vec3(step(0.9,texelColor.b))*bodyColor*8.0,1.0);",

				THREE.ShaderChunk[ "linear_to_gamma_fragment" ],
				THREE.ShaderChunk[ "fog_fragment" ],

		      "}"

		    ].join("\n")
		  });

		this.animalMaterial.map = true;
	}

	zoo.loadModels = function(){

		var loader = new THREE.JSONLoader( true );
		loader.load( "models/bear.js", function( geometry ) {
			bear = new Bear( geometry, this.animalMaterial  );
			bear.mesh.position.x = -600;
			bear.mesh.rotation.y = 0.6
			scene.add(bear.mesh);

			animals[0] = bear.mesh;
		}.bind(this) );


		loader = new THREE.JSONLoader( true );
		loader.load( "models/rabbit.js", function( geometry ) {
			rabbit = new Rabbit( geometry, this.animalMaterial  );
			rabbit.mesh.position.x = -300;
			scene.add(rabbit.mesh);
			animals[1] = rabbit.mesh;
			//scene.add(rabbit.pathSpline);
		}.bind(this) );


		loader = new THREE.JSONLoader( true );
		loader.load( "models/moose.js", function( geometry ) {
			moose = new Moose( geometry, this.animalMaterial  );
			scene.add(moose.mesh);
			animals[2] = moose.mesh;
			//scene.add(moose.pathSpline);
		}.bind(this) );

		loader = new THREE.JSONLoader( true );
		loader.load( "models/bird1.js", function( geometry ) {
			bird1 = new Bird( geometry, this.animalMaterial  );
			bird1.mesh.position.x = 300;
			animals[3] = bird1.mesh;
			scene.add(bird1.mesh);
			//scene.add(bird1.pathSpline);
		}.bind(this) );

		loader = new THREE.JSONLoader( true );
		loader.load( "models/bird4.js", function( geometry ) {
			bird2 = new PickingBird( geometry, this.animalMaterial  );
			bird2.mesh.position.x = 700;
			animals[4] = bird2.mesh;
			scene.add(bird2.mesh);


			//scene.add(bird2.pathSpline);
		}.bind(this) );


		/*loader = new THREE.JSONLoader( true );
		loader.load( "models/bird3.js", function( geometry ) {
			bird3 = new PickingBird( geometry, this.animalMaterial  );
			scene.add(bird3.mesh);
			scene.add(bird3.pathSpline);
		}.bind(this) );*/

		zoo.update();
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
		bear.triggerEvent("bear_win");
		step++;

		if( step > 4 ) step = 0;

		var pos = cameraPositions[step];
		var nextTarget = animals[step].position;
		TweenMax.to( targetDummie, 1, {x:nextTarget.x,y:nextTarget.y,z:nextTarget.z})

		TweenMax.to(camera.position,1,{x:pos[0],y:pos[1]+200,z:pos[2], onUpdate:function(){

			camera.lookAt( targetDummie )
		}.bind(this)});
	}

	var lastTime = 0;

	zoo.update = function(dt,t) {
	  	zoo.render();

	  	var delta = (Date.now()-lastTime);
	  	lastTime = Date.now();

	  	//camera.rotation.y += (((mouse2d.x-0.5)*-0.1)-camera.rotation.y)/24;
	  	//camera.rotation.x += (((mouse2d.y-0.5)*0.1 - 0.7)-camera.rotation.x)/24;


		if (isNaN(delta) || delta > 1000 || delta == 0 ) {
			delta = 1000/60;
		}

		if( this.snowUniforms )
			this.snowUniforms.globalTime.value += delta * 0.00015;

	  	if( bear ) {
	  		bear.lookAnimProgress = mouse2d.x*2.5;
	  		bear.update(delta);
	  	}

	  	if( rabbit ) {
	  		rabbit.update(delta);
	  	}

		if( moose ) {
	  		moose.update(delta);
	  	}

	  	if( bird1 ) {
	  		bird1.update(delta);
	  	}

		if( bird2 ) {
	  		bird2.update(delta);
	  	}

		if( bird3 ) {
	  		bird3.update(delta);
	  	}

		requestAnimationFrame( zoo.update );
	}


	zoo.render = function(){
		renderer.render( scene, camera );
	}

	return zoo;

})();