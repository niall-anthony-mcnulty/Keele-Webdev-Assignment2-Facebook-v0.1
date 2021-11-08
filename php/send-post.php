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
$stmt->execute();

#send back to update feed
$sql = "SELECT id, userName, posts, postDate FROM feed ORDER BY id DESC";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);


?>