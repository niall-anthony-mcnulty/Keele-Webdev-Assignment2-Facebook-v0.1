<?php 

require 'includes/db-login.php';



if (isset($_POST['email'])) {
    
    
    $userEmail = $_POST['email'];

    $sql = "SELECT email FROM users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s',$userEmail);
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