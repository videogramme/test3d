var RAD2DEG = 180 / Math.PI;

function Rabbit(geometry, material){
  this.target = new THREE.Vector3(0,0,0);

  this.state = "sniff";
  this.initiated = false;

  this.pathProgress = 0.1;
  this.dummie = new THREE.Vector3();
  this.dummie.rotation = 0;
/*
  var tl = new TimelineLite({paused:true});

  this.path = [{x:311, y:665}, {x:832, y:653}, {x:1102, y:350}, {x:1700, y:1000}, {x:1600, y:1400} ,{x:1000, y:1600},{x:500, y:1400},{x:311, y:665}]

  for (var i = this.path.length - 1; i >= 0; i--) {
    this.path[i].x *= 0.6
    this.path[i].y *= 0.6

    this.path[i].x -= 600
    this.path[i].y -= 500
  };

  tl.append( TweenMax.to(this.dummie, 1, {bezier:{values:this.path, autoRotate:["x","y","rotation",-Math.PI*2,true]}, ease: Linear.easeNone}) );

  var beziers = BezierPlugin.bezierThrough(this.path,1,true);
  var line = new THREE.Line(new THREE.Geometry(), new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 1, linewidth: 1 } ) );
  this.pathSpline = line;

  for (var i = beziers.x.length - 1; i >= 0; i--) {
    line.geometry.vertices.push( new THREE.Vector3(beziers.x[i].a,0,beziers.y[i].a))
  };

  this.dummyTimeline = tl;*/


  this.init(geometry, material);
}

Rabbit.prototype.init = function( geometry, material ) {

    var morphMesh = new THREE.MorphAnimMesh(geometry,material)
    morphMesh.scale.set( 4, 4, 4 );
    morphMesh.setAnimationLabel("jump",0,19);
    morphMesh.setAnimationLabel("sniff",20,70);

    //morphMesh.position = new THREE.Vector3(this.path[0].x,0,this.path[0].y);
    //morphMesh.rotation.y = Math.PI*0.5;

    this.mesh = morphMesh;

    this.initiated = true;
    this.next();

}

Rabbit.prototype.update = function( delta ){

  if( !this.initiated ) return;

  if( this.state == "jump" ) {

    this.mesh.updateAnimation(delta) ;

    if( this.mesh.currentKeyframe >= 19 ) {
      this.state = "waiting";
      this.next()
    }
  }
  else if(this.state == "sniff"){

    this.mesh.updateAnimation(delta) ;

    if( this.mesh.currentKeyframe >= 69 ) {
      this.state = "waiting";
      this.next()
    }
  }
}

Rabbit.prototype.next = function(){

  var nextState = Math.random()>0.5? "jump":"sniff";

  var scope = this;
 /* if( nextState == "jump") {

    this.pathProgress += 0.04;
    if(this.pathProgress>=1.1) this.pathProgress = 0.1;

    this.dummyTimeline.progress(this.pathProgress);

    scope.mesh.playAnimation(nextState,24);
    scope.state = nextState;
    TweenMax.to(this.mesh.position,0.7,{delay:0.1,x:this.dummie.x,z:this.dummie.y, onStart:function(){


    }, easing: Sine.EaseIn})

    var toRotation = (this.dummie.rotation+Math.PI*1.5) * -1;

    var r = toRotation,
        b = scope.mesh.rotation.y,
      dif = (r - b) % (Math.PI * 2);

        if (dif !== dif % Math.PI) {
          dif += Math.PI * ((dif < 0) ? 2 : -2);
        }
    var targetRotation = (b + dif);


    TweenMax.to(scope.mesh.rotation,0.5,{y:targetRotation})

  }
  else {*/
    this.state = nextState;
    scope.mesh.playAnimation(nextState,24);
  //}

}