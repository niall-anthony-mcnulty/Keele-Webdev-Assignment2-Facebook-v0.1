<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// session-user
$session_user = $_SESSION['user_name'];
$substring = $_REQUEST['input_chars'];

// find users
$sql = "SELECT userName FROM users WHERE userName LIKE '%$substring%' LIMIT 0,5";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);


?>