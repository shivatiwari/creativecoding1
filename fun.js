function fun(x,y)
{
    this.x = x;
    this.y = y;
    this.s = 50;
    var s = 1;
    this.xspeed =random(-s,s);
    this.yspeed =random(-s,s);

    this.show = function()
    {
//outermost circle
        push();
        noStroke();
        fill(R,G,B,this.s);
        ellipse(this.x,this.y,this.s);
        pop();
//outer circle
        push();
        noStroke();
        fill(R,G,B,this.s*2);
        ellipse(this.x,this.y,this.s-25)
        pop();
//the circle  
        push();
        noStroke();
        fill(R,G,B,this.s*4*2);
        ellipse(this.x,this.y,this.s-40);
        pop();
    }
    this.link = function(other)
    {
        stroke(255);
    }
//function for animation
    this.anim = function()
    {
        if(up == true && this.s <= 50)
            {
                this.s += 1;
                if(this.s == 50)
                   {
                    up == false;
                   }
            }
        else{
            up = false;
            this.s -= 1;
            if(this.s == 0)
               {
                 up = true;
               }
            }     
    }
//function for movement
    this.move = function()
    {
          this.x = this.x + this.xspeed;
          this.y = this.y + this.yspeed;  
    }
    this.bounce = function()
    {
         if(this.x > width || this.x < 0)
         this.xspeed = this.xspeed * -1;
    
         if(this.y > height || this.y <0)
         this.yspeed = this.yspeed * -1;
    }
//fuction to check distance and draw line
    this.intersects = function(other)
    {
      var d = dist(this.x,this.y, other.x,other.y);
        if(d <= 100)
           {
               stroke(R,G,B);
               strokeWeight(2-(d/50));
        line(this.x,this.y,other.x,other.y);
           return true;
           }
        else
          {
            return false;
          }
    } 
}
