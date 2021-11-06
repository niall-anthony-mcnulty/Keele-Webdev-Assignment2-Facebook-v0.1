<?php 

require 'includes/db-login.php';



if (isset($_POST['username'])) {
    
    
    $username = $_POST['username'];

    $sql = "SELECT userName FROM users WHERE userName=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s',$username);
    $stmt->execute();

    $rows = $stmt->fetch();

    if ($rows > 0) {
        echo 'taken';
        }
        else {
        echo 'not_taken';
        }
exit();
}

?>