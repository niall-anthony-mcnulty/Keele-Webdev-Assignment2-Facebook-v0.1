<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //


$session_user = $_SESSION['user_name'];
$profile_user = $_REQUEST['user-profile'];

// send back bio
$sql = "SELECT userName, mobileNumber, userSex, fullName, userNationality FROM bio WHERE userName = '$profile_user'";

$result = mysqli_query($conn, $sql);

$output = array('session-user' => $session_user, 'profile-user'=> $profile_user);
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);

?>
