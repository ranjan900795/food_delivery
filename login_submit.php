<?php
    session_start();
    $email = $_POST["email"];
    $pass = $_POST["password"];
    
    $hostname = "localhost";
    $username = "root";
    $password = "gaurav";
    $database = "food_delivery";

    $conn = mysqli_connect($hostname, $username, $password, $database);
    if (!$conn) {
        	die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn, $sql);
    
    if (!$result) {
        	die(mysqli_error($conn));
    }
    
    $flag = 0;
    while ($row=mysqli_fetch_array($result)) { 
	    if($email == $row['email']&&$pass == $row['password']){
	        $name = $row['name'];
	        $flag=1;
	        break;
	    }
    }
     
    if($flag == 0){
        echo "authentication unsuccesfull";
    }else{
        echo "hello " . $name; 
        ?>
            <br>
            <a href = "dashboard.php">CLICK HERE</a>
        <?php
        $_SESSION['name']= $name;
        //setcookie("name",$row['name']);
    }    
     
    mysqli_close($conn);   
       
?>
