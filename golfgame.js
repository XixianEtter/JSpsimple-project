function golfScore(par,stroke) {
	if (strokes== 1) {
		return "Hole-in-one!";
	}
  
	else if (strokes<=par-2) 
		{return "Eagle";}
	else if (strokes == par-1) {
		return "Birdie";
	}
	else if (strokes == par) {
		return "Par";
	}	
	else if (strokes == par+1) {
			return "Bogey";
	}		
	else if (strokes == par+2) {
		return "Double Bogey";
		}
  
	else {
		return"Go Home!";
	}
}		

golfScore(3,2);
