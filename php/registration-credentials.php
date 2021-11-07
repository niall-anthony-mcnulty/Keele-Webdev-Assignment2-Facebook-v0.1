<?php 

    // connect to db //

    require_once('../includes/db-login.php');

    $fullName = $_POST['name'];
    $user = $_POST['user--name'];
    $email = strtolower($_POST['user--email']);
    $password = password_hash($_POST['new-password'], PASSWORD_DEFAULT);
    $userType = $_POST['usertype'];

    
    // if not, insert date into database table //

    $stmt = $conn->prepare("INSERT INTO users (email, fullName, userName, userPassword, userType) VAlUES (?,?,?,?,?)");
    $stmt->bind_param("sssss", $email, $fullName, $user, $password, $userType);
    
    if ($stmt->execute()) {

        echo "<div class='registration-alert'><img src= '../img/reg-success.png'><p class='registration-alert-successful'> Registration was successful! </p></div>";
        header("refresh:5; url=../index.php");
        
        }
        
    else { 
        echo "<div class='registration-alert'><img src= '../img/reg-unsuccess.png'><p class='registration-alert-unsuccessful'> Registration was unsuccessful. Try again!</p></div>";
        header("refresh:5, url=../registration.php");
    
        }
            

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Registration validation</title>
    <meta name="description" content="registration-validation">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/main.css" type="text/css">
    <link rel="icon" href="img/logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bellota&family=Bellota+Text&display=swap" rel="stylesheet", type='text/css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>   
</body>                                          
</html>