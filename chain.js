class Chain {
    constructor(body1,body2,offsetX,offsetY) {
    
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=constraint.create(options)
    World.add(this.rope,world);
    }
    display(){
    
    var PointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    
    strokeweight(2);

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x+this.dffsetX
    var Anchor2Y=pointB.y+this.dffsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
