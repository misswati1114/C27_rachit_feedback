class Slingshot {

    constructor (bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length:100,
            stiffness : 0.5,
            pointB : {x:this.offsetX,y:this.offsetY}
        }

        this.sling = Matter.Constraint.create(options);

        World.add(world,this.sling);

    }

    display(){

        var pointA = this.sling.bodyA.position;
        var PointB = this.sling.bodyB.position;

        strokeWeight(2);
        line (pointA.x,pointA.y,PointB.x+this.offsetX ,PointB.y+this.offsetY );
    }
}
