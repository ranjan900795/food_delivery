
var contents = ["Cooking Gone Wrong??","Hungry??","Movie Time??","Unexpected Guests??"]
var i = 0;
	
setInterval ( "changecontent()", 2000 );

function changecontent( )
{
	document.getElementsByClassName("show1")[0].innerHTML = contents[i];
	
	i = i + 1;
	if(i == 4){
		i = 0;
	}
}

document.getElementsByClassName("nex")[0].onclick =function(){
	document.getElementsByClassName("img1")[0].src= "img/rangde.jpeg";
	document.getElementsByClassName("img2")[0].src= "img/frozen.jpeg";
};

document.getElementsByClassName("nex1")[1].onclick =function(){
	document.getElementsByClassName("img1")[0].src= "img/frozen.jpeg";
	document.getElementsByClassName("img2")[0].src= "img/lakomida.jpeg";
};

document.getElementsByClassName("prev1")[1].onclick =function(){
	document.getElementsByClassName("img1")[0].src= "img/rangde.jpeg";
	document.getElementsByClassName("img2")[0].src= "img/frozen.jpeg";
};

document.getElementsByClassName("prev")[0].onclick =function(){
	document.getElementsByClassName("img1")[0].src= "img/kaleidoscope.jpeg";
	document.getElementsByClassName("img2")[0].src= "img/rangde.jpeg";
};
