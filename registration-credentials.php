<?php 

    // connect to db //

    require_once('includes/db-login.php');

    $fullName = $_POST['name'];
    $user = $_POST['userName'];
    $email = $_POST['Email'];
    $password = password_hash($_POST['new-password'], PASSWORD_DEFAULT);
    $userType = $_POST['usertype'];

    
    // check no users have the same email or username 

    $sql1 = mysqli_query($conn, ("SELECT email FROM users WHERE email = $email"));
    $sql2 = mysqli_query($conn, ("SELECT userName FROM users WHERE userName = $user"));



    if ($sql1 == TRUE) {

        echo "<p> This email address is already in use! Please try another. </p>";
        header("Location:registration.php");


    
    } 
    elseif ($sql2 == TRUE) {

        echo "<p> This username is already in use! Please try another. </p>";
        header("Location:registration.php");
    }

    else {
            
    
    // if not, insert date into database table //

        $stmt = $conn->prepare("INSERT INTO users (email, fullName, userName, userPassword, userType) VAlUES (?,?,?,?,?)");
        $stmt->bind_param("sssss", $email, $fullName, $user, $password, $userType);
        
        if ($stmt->execute()) {
        
            echo "<p class='success-msg'> Successfully added to DB </p>";
            header("Location:index.php");
            
            }
            
            else { echo "<p class='fail-msg'> Failed </p>";
                    header("Location:registration.php");
       
             }
            
}

?>