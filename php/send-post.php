<?php 
// check session and use variables
require_once('../includes/db-login.php');
// connect to db //
    
    $content = $_REQUEST['content'];
    $dates = $_REQUEST['date'];
    $horse = $_REQUEST['horse'];

    $stmt = $conn->prepare("INSERT INTO feed (posts, dates) VAlUES (?,?)");
    $stmt->bind_param("ss", $content, $dates);
    
    if ($stmt->execute()) {

        echo "confirmed";
    }
        
    else { 
        echo "unconfirmed";
        }
    
    


    

?>