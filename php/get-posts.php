<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// session-user
$session_user = $_SESSION['user_name'];
$session_type = $_SESSION['type'];
// paramterise 
$sql = "SELECT post_id, userName, posts, postDate FROM feed  ORDER BY post_id DESC";

$result = mysqli_query($conn, $sql);

$output = array('session-user'=>$session_user, 'session-type'=>$session_type);
while($data = mysqli_fetch_assoc($result)) {
    $output[] = $data;

};

echo json_encode($output);

?>