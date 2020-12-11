class Division{
    constructor(x, y, height){
      var Options = {
        isStatic:true
      }
     this.x = x;
     this.y = y;
     this.width = 10;
     this.height = height;
     this.body = Bodies.rectangle(x, y, 10, height, Options);
     World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      var pos = this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
     
    }
}