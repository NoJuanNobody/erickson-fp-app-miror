<?php 
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

mysql_select_db(FURNITURE, $conn);
$sql = "SELECT *";
$result=mysql_query($sql, $conn);
while($row = mysql_fetch_assoc($result)){
	echo $row['name'];
}



$conn->close();
 ?>
 