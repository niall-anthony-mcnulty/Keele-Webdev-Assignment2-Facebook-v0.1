<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //
    
$content = $_REQUEST['content'];
$profile_user = $_REQUEST['user_name_profile'];
$session_type = $_SESSION['type'];
$session_user = $_SESSION['user_name'];

// paramterise 
$stmt = $conn->prepare("INSERT INTO feed (userName, posts) VALUES (?,?)");
$stmt->bind_param('ss', $profile_user, $content);
$stmt->execute();

// add session-user 

// send back to update feed
$sql = "SELECT post_id, userName, posts, postDate FROM feed WHERE userName = '$profile_user' ORDER BY post_id DESC";

$result = mysqli_query($conn, $sql);

$output = array('profile-user'=>$profile_user, 'session-type'=>$session_type, 'session-user'=>$session_user);
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);

?>