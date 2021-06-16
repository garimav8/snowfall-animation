class Snow{
  constructor(x,y){

    var options={
        isStatic : false,
        //restitution : 0,
        friction : 0.2,
        density : 0.05

    }
    this.image = loadImage("image/snow6.png");
    this.body = Bodies.circle(x,y,15,options);
    this.r = 10
    World.add(world,this.body)



  }
  display(){

    var pos = this.body.position

    push();
    noStroke()
    fill("lightblue")
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.r,this.r)
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,40,40);
    pop();


  }


}