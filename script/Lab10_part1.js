function changeColor(){

}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor()
{

    if(document.getElementById('red').checked)
    {
        document.getElementById('text').style.color = "red"; 

    }
    else if(document.getElementById('blue').checked)
    {
        document.getElementById('text').style.color = "blue"; 
    }
    else
    {
        document.getElementById('text').style.color = "green"; 
    }
}

function changeBgColor()
{
    var dropdown = document.getElementById('colorsel');
    // var option = select.options[select.selectedIndex];

    if(dropdown.options.selectedIndex == 1)
    {
        document.getElementById('td_text').style.background = "red";
    }
    else if(dropdown.options.selectedIndex== 2)
    {
        document.getElementById('td_text').style.background = "green";
        
    }
    else if(dropdown.options.selectedIndex == 3)
    {
        document.getElementById('td_text').style.background = "blue";
    }
    else
    {
        document.getElementById('td_text').style.background = "white";
    }
}

function changeBg(){
    

    }
