<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //
    
$content = $_REQUEST['content'];
$dates = date("Y-m-d");
$user = $_SESSION['user_name'];

// paramterise 
$stmt = $conn->prepare("INSERT INTO feed (userName, posts, postDate) VALUES (?,?,?)");
$stmt->bind_param('sss', $user, $content, $dates);


if ($stmt->execute()){
    
    echo "confirmed";
}
    
else { 
    echo "unconfirmed";
    }

?>