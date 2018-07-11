<?php
	$hostname = "localhost";
	$username = "root";
	$password = "Sonal@16";
	$database = "food_delivery";
	
	$conn = mysqli_connect($hostname,$username,$password,$database);
	if(!$conn){
		die("connection failed:" . mysqli_connect_error());
	}
	
	$name = $_POST["name"];
	$email = $_POST["email"];
    $number = $_POST["number"];
	$pass = $_POST["password"];
	$sql = "INSERT INTO users(name,email,number,password) VALUES('$name','$email','$number','$pass')";
	
	if(mysqli_query($conn,$sql)){
		echo "Registration successfull";
	}else{
		echo "Error:" . $sql . "</br>" . mysqli_error($conn);
	}
	mysqli_close($conn);
?>
<html>
    <head>
        <title> Grab Swipe Serve</title>
        <link rel = "stylesheet" href = "css/bootstrap.css">
        <link rel = "stylesheet" href = "css/boot.css">

    </head>    
    <body style = "background: url(img/italian.jpg)">
        <div class ="container-fluid">
            <div class = "row">
                <div class ="col-8 d-flex">
                    <span class="h1  d-flex align-items-center" >Eat Dine Visit</span>
                </div>
                <div class ="col">

                    <form method="post" action="home.php">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter email">
                                   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone 
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name="password" 
                                   placeholder="Password">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <input type="submit" class="btn btn-success btn-block" name ="submit" value="Submit">
                    </form>

                </div>
            </div>
        </div>       
    </body>
