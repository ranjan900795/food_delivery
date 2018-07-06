
var contents = ["Cooking Gone Wrong??","Hungry??","Movie Time??","Unexpected Guests??"];
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

$(document).ready(function() {

$('.name1').mouseover(function() {
    $(this).css("cursor", "pointer");
    $(this).css("transform","scale(1.5)");
    $(this).css("color","blue");
});

$('.name1').mouseout(function() {
    $(this).css("transform","scale(1)");
	$(this).css("color","black");
});

$('.name2').mouseover(function() {
    $(this).css("cursor", "pointer");
    $(this).css("transform","scale(1.5)");
    $(this).css("color","blue");
});

$('.name2').mouseout(function() {
    $(this).css("transform","scale(1)");
	$(this).css("color","black");
});

$('.name_1').mouseover(function() {
    $(this).css("cursor", "pointer");
    $(this).css("transform","scale(1.5)");
    $(this).css("color","blue");
});

$('.name_1').mouseout(function() {
    $(this).css("transform","scale(1)");
	$(this).css("color","black");
});

$('.name_2').mouseover(function() {
    $(this).css("cursor", "pointer");
    $(this).css("transform","scale(1.5)");
    $(this).css("color","blue");
});

$('.name_2').mouseout(function() {
    $(this).css("transform","scale(1)");
	$(this).css("color","black");
});

var count=0;
var restrau = ["img/kaleidoscope.jpeg","img/rangde.jpeg","img/kasturi.jpeg","img/panasia.jpeg"];


$('.nex').click(function () {
	if(count==0){
		$('.img1').attr('src', restrau[1]);
    	$('.img2').attr('src', restrau[2]);
    	$('.hotel1').text("Rang De Basanti Dhaba");
        $('.hotel2').text("Kasturi Restaurant"); 	
    	count++;
    }
    else if(count==1){
		$('.img1').attr('src', restrau[2]);
    	$('.img2').attr('src', restrau[3]);
    	$('.hotel1').text("Kasturi Restaurant");
        $('.hotel2').text("The Palm - Pan Asia"); 	
    	count++;
    }
});

$('.nex_').click(function () {
	if(count==0){
		$('.img_1').attr('src', restrau[1]);
    	$('.img_2').attr('src', restrau[2]);
    	$('.hotel_1').text("Rang De Basanti Dhaba");
        $('.hotel_2').text("Kasturi Restaurant"); 	
    	count++;
    }
    else if(count==1){
		$('.img_1').attr('src', restrau[2]);
    	$('.img2').attr('src', restrau[3]);
    	$('.hotel1').text("Kasturi Restaurant");
        $('.hotel2').text("The Palm - Pan Asia"); 	
    	count++;
    }
});







$('.nex_').click(function () {
      $('.img_1').attr('src', 'img/cream.jpeg');
      $('.baskinpage').attr('href', 'creamandfudge.php');
      $('.img_2').attr('src', 'img/bikers.jpeg'); 
      $('.creampage').attr('href', 'bikerscafe.php');
      $('.hotel_1').text("The Cream And Fudge Factory");
      $('.hotel_2').text("The Bikers Cafe"); 
});

$('.prev_').click(function () {
	$('.img_1').attr('src','img/baskin.jpeg');
	$('.baskinpage').attr('href', 'baskinrobbins.php');
	$('.img_2').attr('src','img/cream.jpeg');
	$('.creampage').attr('href', 'creamandfudge.php');
    $('.hotel_1').text("Baskin Robbins");
    $('.hotel_2').text("The Cream And Fudge Factory"); 
});






});
