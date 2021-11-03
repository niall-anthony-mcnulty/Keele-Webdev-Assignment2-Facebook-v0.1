<?php 

    // connect to db //

    require_once('includes/db-login.php');

    $fullName = $_POST['name'];
    $userName = $_POST['userName'];
    $email = $_POST['Email'];
    $password = $_POST['new-password'];
    $userType = $_POST['usertype'];

    
    // check no users have the same email or username 

    $sql1 = mysqli_query($conn, ("SELECT email FROM users WHERE email = $email"));
    $sql2 = mysqli_query($conn, ("SELECT userName FROM users WHERE userName = $userName"));



    if ($sql1 == TRUE) {

        echo "<p> This email address is already in use! Please try another. </p>";
    
    } 
    elseif ($sql2 == TRUE) {

        echo "<p> This username is already in use! Please try another. </p>";
    }

    else {
            
    
    // if not, insert date into database table //
        $stmt = $conn->$prepare("INSERT INTO users (email, fullName, userName, userPassword, userType) VAlUES (?,?,?,?,?)");
        $stmt->bind_param("sssss", $email, $fullName, $userName, $password, $userType);
        // $stmt->execute();
        
        if ($stmt->execute()) {
        
            echo "<p class='success-msg'> Successfully added to DB </p>";
            header("Location: ", 'index.php');
            
            }
            
            else { echo "<p class='fail-msg'> Failed </p>";
                    header("Location:", 'registration.php');
       
             }
            
}

?>