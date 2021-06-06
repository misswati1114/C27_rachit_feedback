class Roof{

    constructor(){

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(350,300,200,10,options);

        this.width = 200;
        this.height = 10;

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0,this.width,this.height);
        pop();
      }

}