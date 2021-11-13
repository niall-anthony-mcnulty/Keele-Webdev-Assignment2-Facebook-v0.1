<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //

$content = $_REQUEST['content'];
$session_user = $_SESSION['user_name'];

// paramterise 
$stmt = $conn->prepare("INSERT INTO feed (userName, posts) VALUES (?,?)");
$stmt->bind_param('ss', $session_user, $content);
$stmt->execute();

// add session-user 

// send back to update feed
$sql = "SELECT post_id, userName, posts, postDate FROM feed ORDER BY post_id DESC";

$result = mysqli_query($conn, $sql);

$output = array('session-user'=>$session_user);
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);


?>
