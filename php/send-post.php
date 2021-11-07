<?php 
    // check session and use variables
    require_once('../includes/secure-login.php');
    // connect to db //

    require_once('../includes/db-login.php');

    $content = $_POST['content'];
    $dates = $_POST['date'];
    $username = $_SESSION['user-name'];
    $ass = $_POST['ass'];


    $stmt = $conn->prepare("INSERT INTO feed (userName, posts, dates) VAlUES (?,?,?)");
    $stmt->bind_param("sss", $username, $content, $dates);
    
    if ($stmt->execute()) {

        echo "success";
    }
           
    else { 
        echo "failed";
        }

?>