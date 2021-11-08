<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //


// paramterise 
$sql = "SELECT userName, posts, postDate FROM feed ORDER BY postDate DESC";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_array($result);

if ($data) {
    
    echo json_encode(array('date'=>$data));
}

else { 
    echo "unconfirmed";
    }

?>