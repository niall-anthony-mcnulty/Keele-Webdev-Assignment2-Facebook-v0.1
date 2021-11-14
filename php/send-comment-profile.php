<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //

$comment = $_REQUEST['comment'];
$session_user = $_SESSION['user_name'];
$session_type = $_SESSION['type'];
$post_id = $_REQUEST['post-id'];


// paramterise 
$stmt = $conn->prepare("INSERT INTO comments (post_id, comment, userName) VALUES (?,?,?)");
$stmt->bind_param('sss', $post_id, $comment, $session_user);
$stmt->execute();


// send back to comments to feed
$sql = "SELECT comment_id, post_id, comment, userName, commentDate FROM comments WHERE post_id = '$post_id' ORDER BY commentDate DESC";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);


?>
