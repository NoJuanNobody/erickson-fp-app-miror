<?php 
// error handling
	error_reporting(-1);
	ini_set('display_errors', 'On');

if (isset($_POST)){
	print_r($_POST);
	$x_pos = $_POST['x'];
	$y_pos = $_POST['y'];
	$x_scale = $_POST['xScale'];
	$y_scale = $_POST['yScale'];
	$rotation = $_POST['rotation'];
	$type = $_POST['type'];
	$name = $_POST['name'];
	
};
	$servername='localhost';
	$username = 'root'; 
	$password = 'root';
	$dbname = 'FURNITURE';

	// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// if ID does not exsist, create new entry, otherwise update results
// $sql_two = "UPDATE  furniture
// SET xpos='$x_pos', ypos='$y_pos', xscale = '$x_scale', yscale='$y_scale', rotation='$rotation 'type='$type' WHERE name='$name'";
$sql = "INSERT INTO furniture (name, xpos, ypos, xScale, yScale, rotation, type) 

VALUES ('$name', '$x_pos','$y_pos','$x_scale', '$y_scale','$rotation','$type')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
 ?>