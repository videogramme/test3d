var RAD2DEG = 180 / Math.PI;

function Bird(geometry, material){
  this.target = new THREE.Vector3(0,0,0);

  this.initiated = false;

  this.pathProgress = 0;
  this.dummie = new THREE.Vector3(0,0,0);
  this.dummie.y2 = 0;
  this.dummie.y = 0;
  this.dummie.speed = 1;
  this.dummie.rotation = 0;

  this.init(geometry, material);
}

Bird.prototype.init = function( geometry, material ) {

    var morphMesh = new THREE.MorphAnimMesh(geometry,material)
    morphMesh.scale.set( 4, 4, 4 );
    /*0-19 : walk loop
    20-66 : look up
    67-145 : look down*/
    morphMesh.setAnimationLabel("fly",0,24);


    this.mesh = morphMesh;



    this.dummie.x = this.mesh.position.x = 0

    this.mesh.position.y = 100
    this.dummie.z = this.mesh.position.z = 0


    TweenMax.to( this.dummie,2,{ y:180, speed: 3.2, overwrite:"none",onStart:function(){}, ease:Sine.easeInOut, repeat:-1,yoyo:true })
    TweenMax.to( this.dummie,0.25,{ y2:15,overwrite:"none", ease:Cubic.easeInOut, repeat:-1,yoyo:true })

    this.initiated = true;
    this.mesh.playAnimation("fly",24);

}

Bird.prototype.update = function( delta ){

  if( !this.initiated ) return;

  this.mesh.updateAnimation(delta*this.dummie.speed);

  this.pathProgress += 0.0025;
  if(this.pathProgress>=1) this.pathProgress = 0;


  /*this.tween.progress(this.pathProgress);

  var r = (this.dummie.rotation+Math.PI*1.5) * -1,
      b = this.mesh.rotation.y,
    dif = (r - b) % (Math.PI * 2);

    if (dif !== dif % Math.PI) {
      dif += Math.PI * ((dif < 0) ? 2 : -2);
    }

  this.mesh.position.set(this.dummie.x,this.dummie.y+this.dummie.y2+100,this.dummie.z);
  this.mesh.rotation.y += ((b + dif)-this.mesh.rotation.y)/4;
*/
  this.mesh.rotation.x += (((this.dummie.y/180 * 30-5)/180*Math.PI )-this.mesh.rotation.x)/5;
 // this.mesh.rotation.z += (((this.dummie.y/40 * 30-15)/180*Math.PI )-this.mesh.rotation.z)/1

}
