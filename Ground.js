class Ground{
    constructor(x, y, width){
      var Options = {
        isStatic:true
      }
     this.width = width;
     this.body = Bodies.rectangle(x, y, width, 20, Options);
     this.height = 20;
     World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      var pos = this.body.position;
      push();
      fill("orange")
      translate(pos.x, pos.y);
      rect(0, 0, this.width, this.height);
      pop();
    }
}