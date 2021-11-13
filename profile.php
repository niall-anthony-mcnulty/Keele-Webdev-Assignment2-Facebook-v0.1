<?php
require_once('includes/secure-login.php');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>FriendZone Registration Page</title>
    <meta name="description" content="registration-page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="icon" href="img/logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bellota&family=Bellota+Text&display=swap" rel="stylesheet", type='text/css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com"> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src='js/profile.js'></script>  
</head>
<body>
    <div class='wrapper'>
        <div class='content-inside'>
            <nav>
                <div class="container nav nav-registration homepage-nav">
                    <div class='row justify-content-center no-gutters title-row title-registration-row nav-homepage-row w-100'>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col homepage-col-search'><form><img class='search-nav-icon' src='img/search.png'><input id='search-bar-nav' type='text' placeholder ='Search users' ></form><ul id='user-friends'></ul></div>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col homepage-col-welcome'><h4 class='personalised-welcome-msg'>Hello <?php echo(explode(' ', trim($_SESSION['name'])))[0]?></h4></div>
                        <div class ='col-xs-4 col-sm-4 col-md-4 col-lg-4 title-col title-registration-col homepage-col homepage-col-logo'>
                            <?php if ($_SESSION['user_name'] == 'McNugget') { ?>
                               <a href='home.php' id = 'user-avatar-nav-img' class='login-link registration-login-link'><img src='img/ric.jpeg' alt='Friendzone logo' class='logo-pic-profile-nav' ></a> <?php ;}
                               else {?> 
                               <a href='home.php' id = 'user-avatar-nav-img' class='login-link registration-login-link'><img src='img/logo.png' alt='Friendzone logo' class='logo-pic-profile-nav' ></a> <?php ;}?>
                        </div>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col homepage-col-profile-link'><h4 class='profile-link'><a href='profile.php'>Profile</a></h4></div>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col homepage-col-signout-link'><h4 class='signout-link'><a href='includes/logout.php'>Sign Out</a></h4></div>
                    </div>
                    <hr class='top-horizontal-nav'>
                </div>
            </nav>
            <main class='container homepage'>
                <div class='row justify-content-center no-gutters registration-row w-100'>
                    <div class ='col-xs-12 col-sm-12 col-md-10 col-lg-10 registration-col'>  
                        <div class='bio-grid'>  
                            <h1 class='bio-h1'> Bio</h1>
                            <h4 class='add-bio'><a href='add-bio.php'> add </a></h4>
                            <h4 class='edit-bio'><a href='edit0bio.php'> edit </a></h4>
                        </div>      
                        <div class='bio-empty-div'>
                        </div> 
                    </div>
                </div>  
                <hr class='line-seperate-feed'>
                <div class='row justify-content-center no-gutters feed-row'>
                    <div class ='col-xs-12 col-sm-12 col-md-10 col-lg-10 feed-col'>
                        <h1 class='feed-h1'> My Posts </h1>
                        <div class='table-feed'></div>
                                    <!-- insert all user feed here with ajax response-->
                    </div>
                </div>
            </main>
        </div>
    </div>
    <footer class="container footer">
        <div class='row justify-content-center no-gutters footer-row w-100'>
            <div class ='col-xs-8 col-sm-8 col-md-8 col-lg-8 footer-col'>
                <p class="registration-footer">FriendZ<u>o</u>ne - Made by Niall McNulty</p>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>   
</body>                                          
</html>