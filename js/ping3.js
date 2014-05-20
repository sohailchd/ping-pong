 var KEY =  {
                 UP : 38,
				 DOWN : 40,
				 W : 87,
				 S : 83
              }
 
 
 
 //Create the object called ping
 var ping = { scoreA:0 , scoreB:0};
 ping.pressedkey = [] ;
 
 ping.ball = {
                  speed: 5,
                  x: 100,
				  y: 150,
				  dirX: 1,
				  dirY: 1
              }

 
 $(function()
 {
            ping.timer = setInterval(gameloop,30);
		   
		   //Mark the down keys as TRUE esle FALSE
		   
		   $(document).keydown(function(e)
		   {
		       ping.pressedkey[e.which]=true;
		   });
		   
		   $(document).keyup(function(e)
		   {
		       ping.pressedkey[e.which]=false;
		   });
		 
  
 });
 
 
 
 
 
 
 
 
 function gameloop()
 {  
       movepaddle();
	   moveball();

 }   



function moveball()
{
      var pH= parseInt($("#playground").height());
	  var pW= parseInt($("#playground").width());
	  var ball = ping.ball;
	  
	  
	  
	  ball.x +=ball.speed*ball.dirX;
	  ball.y +=ball.speed*ball.dirY;
	  
	  
	  //Check the boundary condition
	  //top 
	  if(ball.y+ball.speed*ball.dirY < 0)
	  {
	     ball.dirY = 1;
	  }
	  //bottom
	  if(ball.y+ball.speed*ball.dirY > pH)
	  {
	     ball.dirY = -1;
	  
	  }
	  //left
	  if(ball.x+ball.speed*ball.dirX < 0)
	  {
	  
	     //player B wins
		// ball.x= 300;
		// ball.y=200;
		// $("#ball").css({
		////    "left":ball.x,
		//	"top": ball.y
		// });
	     
		ping.scoreB++;
		 $("#sb").html(ping.scoreB);
	     ball.dirX = 1;
	  }
	  //right
	  if(ball.x+ball.speed*ball.dirX >= pW)
	  {
	    // ball.x= 300;
		// ball.y=200;
		// $("#ball").css({
		  //  "left":ball.x,
		//	"top": ball.y
		// });
          
		  ping.scoreA++;
		  $("#sa").html(ping.scoreA);
	     ball.dirX = -1;
	  
	  }
	  
	  //ACtually move the ball
	  
	  
	  
	  
	  //Collision detection
	  
	  var paddleAX = parseInt($("#paddleA").css("left"))+ parseInt($("#paddleA").css("width"));
	  var paddleAYbottom= parseInt($("#paddleA").css("height"))+ parseInt($("#paddleA").css("top"));
	  var paddleAYtop = parseInt($("#paddleA").css("top"));
	  
	  //check the collision
	  if(ball.x+ball.speed*ball.dirX <= paddleAX)
	  {
	      if(ball.y+ball.speed*ball.dirY >= paddleAYtop-10 && ball.y+ball.speed*ball.dirY <= paddleAYbottom)
		  {
		     ball.dirX= 1;
			// ball.speed = ball.speed* 1.05;
		  }
	  }
	  
	  
	  //check for the right paddle
	  var paddleBX= parseInt($("#paddleB").css("left")) //+ parseInt($("#paddleB").css("width"));
	  var paddleBYbottom= parseInt($("#paddleB").css("height"))+ parseInt($("#paddleB").css("top"));
	  var paddleBYtop = parseInt($("#paddleB").css("top"));
	  
	  //check the collision
	  if(ball.x+ball.speed*ball.dirX >= paddleBX-15)
	  {
	      if(ball.y + ball.speed*ball.dirY >= paddleBYtop-15 && ball.y+ball.speed*ball.dirY <= paddleBYbottom)
		  {
		     ball.dirX= -1;
			// ball.speed = ball.speed* 1.05;
			 
		  }
	  }
	  
	  ball.x += ball.speed*ball.dirX;
	  ball.y += ball.speed*ball.dirY;
	  
	  
	  $("#ball").css(
	  {
	     "top": ball.y,
		 "left": ball.x
	  }
	  );
}




 
 function movepaddle()
 {
 
 
 
            var pH= parseInt($("#playground").height());
	           var pW= parseInt($("#playground").width());
              var cpA= parseInt($("#paddleA").css("top"));
             var cpB= parseInt($("#paddleB").css("top"));
 
 
           if(ping.pressedkey[KEY.UP])
             {
			     var top= parseInt($("#paddleB").css("top"));
				 $("#paddleB").css("top",top-20);
			 }		   
			if(ping.pressedkey[KEY.DOWN])
             {
			     var top= parseInt($("#paddleB").css("top"));
				 $("#paddleB").css("top",top+20);
			 }		   
			 if(ping.pressedkey[KEY.W])
             {
			     var top= parseInt($("#paddleA").css("top"));
				 $("#paddleA").css("top",top-20);
			 }		   
			 if(ping.pressedkey[KEY.S])
             {
			     var top= parseInt($("#paddleA").css("top"));
				 $("#paddleA").css("top",top+20);
			 }	


               if(cpA+120 < 0 )
               {
			       $("#paddleA").css("top",pH);
			   }	
         			   
		    if(cpA  > pH )
               {
			       $("#paddleA").css("top",0);
			   }

              if(cpB+120 < 0 )
               {
			       $("#paddleB").css("top",pH);
			   }	
         			   
		    if(cpB  > pH )
               {
			       $("#paddleB").css("top",0);
			   }	
			 
			  
 }
 
 
 
 
 
 
 