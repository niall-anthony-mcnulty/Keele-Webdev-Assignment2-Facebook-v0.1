<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// session-user
$session_user = $_SESSION['user_name'];
// paramterise 
// send back to comments to feed
$sql = "SELECT comment_id, post_id, comment, userName, commentDate FROM comments ORDER BY commentDate DESC";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);


?>