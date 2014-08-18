function Bear(geometry, material){
  this.target = new THREE.Vector3(0,0,0);
  this.progress = 0.5;
  this.lastProgress = 0;

  this.state = "look";
  this.initiated = false;
  this.lookInterpolation = 1 / 20;

  this.lastKeyframe = 0

  this.lookAnimProgress = 0.5;

  this.init(geometry, material);
}

Bear.prototype.init = function( geometry, material ) {
    
    var morphMesh = new THREE.MorphAnimMesh(geometry,material)
    morphMesh.scale.set( 2.5, 2.5, 2.5 );
    morphMesh.setAnimationLabel("look",10,30);
    morphMesh.setAnimationLabel("hurray",40,100);

    morphMesh.position.set(-250,0,0)
    //morphMesh.rotation.y = Math.PI*0.5;

    this.mesh = morphMesh;

    this.initiated = true;

}

Bear.prototype.triggerEvent = function( id, paramObj ) {
    if( id == "bear_win") {

      this.mesh.playAnimation("hurray",24);
      this.state = "hurray"
      this.mesh.updateAnimation(0);
    }
  },

Bear.prototype.lookAt = function( pos ){
  this.target = pos;
}

Bear.prototype.update = function( delta ){

  if( !this.initiated ) return;

  if( this.state != "look" && this.mesh.currentKeyframe >= this.mesh.geometry.animations[ "hurray" ].end) {
    this.state = "look"
    this.progress = 0.5;
  }
  else if(this.state == "look"){
    var lookAtNorm = this.lookAnimProgress;
    lookAtNorm = Math.min(Math.max(lookAtNorm,0),1);
    //  if( !world.host ) lookAtNorm = 1-lookAtNorm;
    this.progress += (lookAtNorm-this.progress)/3;

    var anim = this.mesh.geometry.animations[ "look" ];

    var keyframe = Math.floor(this.progress * (anim.end-anim.start)) + anim.start;
    if ( keyframe != this.mesh.currentKeyframe ) {

      this.mesh.morphTargetInfluences[ this.lastKeyframe ] = 0;
      this.mesh.morphTargetInfluences[ this.mesh.currentKeyframe ] = 1;
      this.mesh.morphTargetInfluences[ keyframe ] = 0;

      this.lastKeyframe = this.mesh.currentKeyframe;
      this.mesh.currentKeyframe = keyframe;

    }

    var useProgress = this.progress;
    if(useProgress<this.lastProgress) {
      useProgress = (1-useProgress)
    }

    this.mesh.morphTargetInfluences[ keyframe ] = ( useProgress % this.lookInterpolation ) / this.lookInterpolation;
    this.mesh.morphTargetInfluences[ this.lastKeyframe ] = 1 - this.mesh.morphTargetInfluences[ keyframe ];
    
    this.lastProgress = this.progress;
  } 

  if( this.state == "hurray") {
    this.mesh.updateAnimation(delta) ;
  }
}