class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      
      this.width = 50;
      this.height = 50;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y=mouseY;
      pos.x=mouseX;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  