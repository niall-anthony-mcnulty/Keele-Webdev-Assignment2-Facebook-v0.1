<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //

// request post_id
$postID = $_REQUEST['post-id'];

// paramterise 
$stmt =  $conn->prepare("DELETE FROM feed WHERE post_id = ? ");
$stmt->bind_param('i',$postID);
$stmt->execute();

echo (json_encode($postID));

?>
    
