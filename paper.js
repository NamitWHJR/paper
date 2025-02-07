class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height ,options);
      this.width = width
      this.height = height
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill(255);
      push ()
      translate(pos.x,pos.y)
      rotate (angle)
      strokeWeight(4)
      stroke("white")
      
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  