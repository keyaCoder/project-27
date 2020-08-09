class Bob{
    constructor(x, y, width){


        var options = {
            "isStatic":false,
            "restitution":0.3,
            "friction":0.4,
            "density":2
        }

        this.width = width;
        this.body = Bodies.circle(x, y, width / 3, options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        fill(0);
        //imageMode(CENTER);
        ellipse(pos.x, pos.y, this.width);
        pop();
    }
}

