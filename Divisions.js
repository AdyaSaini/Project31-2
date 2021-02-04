class Divisions{
    constructor(x, y) {
        var options= {
            'isStatic' : true,
        }
        this.body = Bodies.rectangle(x, y, 10, 300, options);
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, 10, 300);
      pop();
    }
  }