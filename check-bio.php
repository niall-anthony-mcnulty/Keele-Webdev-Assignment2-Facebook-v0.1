<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //


$session_user = $_SESSION['user_name'];

// send back bio
$sql = "SELECT userName,mobileNumber, userSex, fullName, userNationality FROM bio WHERE userName = '$session_user'";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);

?>
