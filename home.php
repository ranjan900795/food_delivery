<?php
    session_start();
    $email = $_POST["email"];
    $pass = $_POST["password"];
    
    $hostname = "localhost";
    $username = "root";
    $password = "Sonal@16";
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
        ?>

    <?php
        echo "hello " . $name; 
    ?>
    <?php
        $_SESSION['name']= $name;
        //setcookie("name",$row['name']);
    }    
     
    mysqli_close($conn);   
       
?>

<html>
	<head>
		<title>Grab Swipe Serve</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<div class="top">
			<div class="first">
				<div class="pagelogo">
					<img class="mainlogo" src="img/logo.jpg"/>
				</div>
				<div class="heading">
					<h1 class="main_head"><span>G</span>rab <span>S</span>wipe <span>S</span>erve</h1>
				</div>
			</div>
			<div class="second">
				<input type="text" placeholder="Search Restaurants">
			</div>
			<div class="third">
				<div class="signin">
					<button class="sign">Sign In</button>
				</div>
				<div class="signup">
					<button class="create">Create an Account</button>
				</div>
			</div>			
		</div>
		<div class="bottom">
			<div class="center">
				<div class="zero_1">
					<p>Indian And continental Restaurants....</p>
				</div>
				<div class="first_1">
					<div class="menu">
						<div class="menu1">
							<div class="food1">
								<img class="img1" src="img/kaleidoscope.jpeg"/>
							</div>
							<div class="name1">
                                <p class="hotel1"><a class="kaleidoscopepage" href="kaleidoscope.php">Kaleidoscope Multicuisine</a></p>
							</div>
						</div>
						<div class="menu2">
							<div class="food2">
								<img class="img2" src="img/rangde.jpeg"/>
							</div>
							<div class="name2">
                                <p class="hotel2"><a class="rangdepage" href="rangde.php">Rang De Basanti Dhaba</a></p>
							</div>						
						</div>
					</div>
					<div class="switch">
						<div class="Previous">
							<button class="prev">Previous</button>
						</div>
						<div class="Next">
							<button class="nex">Next</button>
						</div>
					</div>
				</div>
				<div class="second_1">
					<div class="restrau_stats">
					</div>
					<div class="restrau_1">
						<div class="menu_">
							<div class="menu_1">
								<div class="food_1">
										<img class="img_1" src="img/baskin.jpeg"/>
								</div>
								<div class="name_1">
                                    <p class="hotel_1"><a class="baskinpage" href="baskin.php">Baskin Robbins</a></p>
								</div>							
							</div>
							<div class="menu_2">
								<div class="food_2">
									<img class="img_2" src="img/cream.jpeg"/>
								</div>
								<div class="name_2">
                                    <p class="hotel_2"><a class="creampage" href="cream.php">The Cream And Fudge Factory</a></p>
								</div>
							</div>
						</div>
						<div class="switch_">
							<div class="Previous_">
								<button class="prev_">Previous</button>
							</div>
							<div class="Next_">
								<button class="nex_">Next</button>
							</div>
						</div>
					</div>
				</div>
				<div class="third_1">
					<div class="quotes">
						<div class="first_2">
							<p class="show1">Unexpected Guests??</p>
						</div>
						<div class="second_2">
							<p>Hot And Tasty Food is Waiting for U</br><span>Order Now!!!</span></p>
						</div>
					</div>
					<div class="awards">
						<img class="award" src="img/Award.jpg"/>
					</div>
				</div>
				<div class="fourth_1">
					<div class="name">
						<h2>Grab Swipe Serve</h2>
					</div>
					<div class="logo">
						<img class="fb" src="img/fb.jpeg"/>
						<img class="tweet" src="img/twitter.jpeg"/>
					</div>
				</div>
			</div>
		</div>
		<script src="js/jquery-3.3.1.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>
		
