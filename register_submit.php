<?php
    $hostname = "localhost";
    $username = "root";
    $password = "gaurav";
    $database = "food_delivery";
    
    $conn = mysqli_connect($hostname, $username, $password, $database);
    if(!$conn){
        die("connection failed : ".mysqli_connect_error());
    }
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $pass = $_POST["password"];
    $num  = $_POST["number"];
    $sql = "INSERT INTO users(name,email,password,phone_number) VALUES('$name','$email','$pass','$num')";
    
    if(mysqli_query($conn,$sql)){
        echo "Registration succesfull";
    }else{
        echo "Error: ". $sql. "</br>" .mysqli_error($conn);
    }
    
    mysqli_close($conn);
?>

<a href = "home.php">click here</a>            

