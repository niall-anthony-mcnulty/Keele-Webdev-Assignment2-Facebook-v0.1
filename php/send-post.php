<?php 
// check session and use variables
require_once('../includes/db-login.php');
// connect to db //
    
$content = $_REQUEST['content'];
$date = '05/09/1988';

// $stmt = $conn->prepare("INSERT INTO feed (posts) VAlUES (?)");
// $stmt->bind_param("s", $content);

$sql = "INSERT INTO feed (userName, posts, date) VALUES ('johnny','$content','$date')";
// if ($stmt->execute()) {

// echo "confirmed";
// }
    
// else { 
//     echo "unconfirmed";
    // }

if (mysqli_query($conn, $sql))
{
    echo json_encode(array("sql" => $sql));
}
    
else {
        echo json_encode(array('sql_error' => mysqli_error($conn) ));
};

mysqli_close($conn);
?>