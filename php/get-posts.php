<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');

// paramterise 
$sql = "SELECT id, userName, posts, postDate FROM feed ORDER BY id DESC";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;

};

echo json_encode($output);

?>