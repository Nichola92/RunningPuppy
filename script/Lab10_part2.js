var topPosition = 50;
var leftPosition = -20;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    puppy.style.position = "absolute";
    puppy.style.left = leftPosition + "px";
	puppy.style.top = topPosition + "px";
    puppy.style.visibility = "visible"; 

if(leftPosition<=screen.availWidth-200)
{
    leftPosition += 50;
    topPosition += 20;
}
    				
}
