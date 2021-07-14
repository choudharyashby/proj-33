class Snow {
     constructor(x,y,r) {
         var options = {
              'friction': 0.5,
              'density' : 0.8,
         }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);


        

     }
     display () {
       var snowpos =this.body.position;
       push () 
       translate(snowpos.x, snowpos.y);
       imageMode(CENTER);
       ellipseMode(RADIUS)
       image(this.image, 0, 0, this.r*2, this.r*2);
       pop();

     }

     
     }
