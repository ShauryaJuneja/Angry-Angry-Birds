class Slingshot{
    constructor(bodyA,pointB){
 var options = {
     bodyA:bodyA,
     pointB:pointB,
     length:10,
     stiffness:0.04
    }
    this.pointB=pointB
    this.sling = Matter.Constraint.create(options)
    World.add(world, this.sling);    
}
fly(){this.sling.bodyA=null}
display(){
    if (this.sling.bodyA){line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)}
    
}
}