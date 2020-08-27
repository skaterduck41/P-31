class Particle{
    constructor(x,y,r)
	{
		var options={
			
			restitution :0.4,
           
			}
		
		this.r=r
		this.body=Bodies.circle(x,y, this.r, options);
     this.color = color(random(10,255), random(0,255), random(60,255));
		
        World.add(world, this.body);
        
	}

	display()
	{
		var plinkoPos=this.body.position;	
		push()
		translate(plinkoPos.x, plinkoPos.y);

        noStroke();
        fill(this.color)
		//imageMode(CENTER);
		ellipseMode(RADIUS);
		ellipse( 0,0,this.r, this.r)
        pop()
        
 }
}