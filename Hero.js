class hero {
    constructor(x,y,r)
      {
          var options={
              isStatic: true
              }
          this.x=x;
          this.y=y;
          this.r=r
          this.image=loadImage("images/Superhero-01.png");
          this.body=Bodies.circle(this.x, this.y, this.r/2, options)
          
          World.add(world, this.body);
  
      }
      display()
      {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
              var herpos=this.body.position;		
              push()
              translate(herpos.x, herpos.y);
              // rectMode(CENTER)
              // rotate(this.body.angle)
              fill(255,0,255)
              imageMode(CENTER);
              ellipseMode(RADIUS)
              image(this.image, 0,0,this.r*2, this.r*2)
              pop()
              
      }
    }