
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

    var j=0;
    var k=1;
    var restrau = ["img/kaleidoscope.jpeg","img/rangde.jpeg","img/kasturi.jpeg","img/panasia.jpeg"];
    var hotel_name = ['<a href="kaleidoscope.php">Kaleidoscope Multicuisine</a>','<a href="rangde.php">Rang De Basanti</a>','<a href="kasturi.php">Kasturi</a>','<a href="palmasia.php">Palm-Asia</a>'];

    $('.nex').click(function () {
        
        if(j!=3){
            j=j+1;
        }else{
            j=0;
        }
        if(k!=3){
	        k=k+1;
	    }else{
	        k=0;
	    }    
	    $('.img1').attr('src', restrau[j]);
        $('.hotel1').html(hotel_name[j]);
        $('.hotel2').html(hotel_name[k]);
        $('.img2').attr('src', restrau[k]);
        //$('#link').attr('href', address[j]);
	    //$('#link1').attr('href', address[k]);
	    
    });
    
    
    $('.prev').click(function () {
        
        if(j==0){
            j=4;
	    }
	    
	    if(k==0){
            k=4;
	    }
	    
        j=j-1;
	    k=k-1;
	    
	    $('.img1').attr('src', restrau[j]);
        //$('#link').attr('href', address[j]);
	    $('.img2').attr('src', restrau[k]);
        //$('#link1').attr('href', address[k]);
	    $('.hotel1').html(hotel_name[j]);
        $('.hotel2').html(hotel_name[k]); 	
	    	    
    });
    
    var l=0;
    var m=1;
    var restrau_dessert = ["img/baskin.jpeg","img/cream.jpeg","img/bikers.jpeg"];
    var hotel_name1 = ['<a href="baskin.php">Baskin Robbins</a>', '<a href="cream.php">The Cream and Fudge Factory</a>' , '<a href="bikerscafe.php">Bikers cafe</a>'];
    	    
    $('.nex_').click(function () {
        if(l!=2){
            l=l+1;
        }else{
            l=0;
        }
        if(m!=2){
	        m=m+1;
	    }else{
	        m=0;
	    }    
                 
        $('.img_1').attr('src', restrau_dessert[l]);
        $('.img_2').attr('src', restrau_dessert[m]);
        $('.hotel_1').html(hotel_name1[l]);
        $('.hotel_2').html(hotel_name1[m]);
        $('.hotel_1').attr('href', link[l]);
        $('.hotel_2').attr('href', link[m]);
         
    });

    $('.prev_').click(function () {
        
        if(l==0){
            l=3;
	    }
	    
	    if(m==0){
            m=3;
	    }
	    
        l=l-1;
	    m=m-1;
	    $('.img_1').attr('src',restrau_dessert[l]);
	    $('.baskinpage').attr('href', link[l]);
	    $('.img_2').attr('src',restrau_dessert[m]);
	    $('.creampage').attr('href', link[m]);
        $('.hotel_1').html(hotel_name1[l]);
        $('.hotel_2').text(hotel_name1[m]); 
    });

});
