// Shivansh Tiwari
// Creative Coding 1.
var up = true;
var funs = [];
var bg = 51;
var R=255;
var G=255;
var B=255;
var mycanvas;
function setup()
{
    mycanvas = createCanvas(innerWidth,innerHeight);
    mycanvas.position(0,0);
    for(i=0;i<50;i++)
    funs[i] = new fun(random(0,width),random(0,height));
}
function mousePressed()
{
    bg = random(71,250);
    R= random(0,150);
    G = random(0,150);
    B = random(0,150);
}
function draw()
{
    frameRate(20);
    background(bg);
    for(i=0;i<funs.length;i++)
    {
        funs[i].show();
        funs[i].anim();
        funs[i].move();  
        funs[i].bounce(); 
        for(var j = 0; j < funs.length; j++)
        {
            if(i != j && funs[i].intersects(funs[j]))
            {
              funs[i].link();
              funs[j].link();
            }
        }
    }  
}
