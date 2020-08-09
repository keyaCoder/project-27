class Rope{
    constructor(body1, body2, offsetX, offsetY){
        
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
        bodyA:body1,
        bodyB:body2,
        stiffness:0.1, 
        pointB:{x:this.offsetX, y:this.offsetY}
        

    }
    this.Rope = Constraint.create(options);
    World.add(world, this.Rope);
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        line(pointA.x, pointA.y, pointB.x +  this.offsetX, pointB.y)
    }
    
    }

    