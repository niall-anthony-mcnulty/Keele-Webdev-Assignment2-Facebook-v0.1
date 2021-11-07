<?php 

require '../includes/db-login.php';



if ((isset($_POST['email'])) && (isset($_POST['password']))) {
    
    
    $userEmail = mysqli_real_escape_string($conn, $_POST['email']);
    $userPassword = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * FROM users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s',$userEmail);
    $stmt->execute();
    $result = $stmt->get_result();
    # if no match, unconfirmed.
    if (!$result) {
        echo 'unconfirmed';
    }
    else {
        
        $row = $result->fetch_array(MYSQLI_NUM);

        $result ->close();

        # password matches confirm
        if(password_verify($userPassword, $row[3])) {

            session_start();
            $_SESSION['user_name'] = $row[2];
            $_SESSION['name'] = $row[1];
            $_SESSION['type'] = $row[4]; 
            $_SESSION['loggedin'] = true;
            $_SESSION['id'] = session_id();

            echo 'confirmed';
        }

        else {

            echo 'unconfirmed';
            }
        }
   
exit();
}

?>