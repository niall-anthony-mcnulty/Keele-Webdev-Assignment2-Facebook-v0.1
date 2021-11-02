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
</head>
<body>
    <div class='wrapper'>
        <div class='content-inside'>
            <nav>
                <div class="container nav nav-registration homepage-nav">
                    <div class='row justify-content-center no-gutters title-row title-registration-row w-100'>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col-search'><img class='search-icon' src='img/search.png'></div>
                        <div class ='col-xs-2 col-sm-2 col-md-2 col-lg-2 title-col title-registration-col homepage-col-search'> Welcome Niall </div>
                        <div class ='col-xs-6 col-sm-6 col-md-6 col-lg-6 title-col title-registration-col homepage-col-logo'>
                            <a href='index.php' class='login-link registration-login-link'><img src='img/logo.png' alt='Friendzone logo' class='logo-pic' id='registration-pic'><span class='registration-title'>Friend<u>Z</u>one</span></a>
                        </div>
                        <div class ='col-xs-1 col-sm-1 col-md-1 col-lg-1 title-col title-registration-col homepage-col-links'> Profile </div>
                        <div class ='col-xs-1 col-sm-1 col-md-1 col-lg-1 title-col title-registration-col homepage-col-links'> Sign Out </div>
                    </div>
                </div>
            </nav>
            <main class='container registration'>
                <div class='row justify-content-center no-gutters registration-row'>
                    <div class ='col-xs-11 col-sm-11 col-md-11 col-lg-11 registration-col'>
                        <form id='post-article' class='registration-submit-form feed' method="post"  autocomplete="off" required="true">
                            <h1 class='signup-text article-header'> Feed</h1>
                                <input id='myThoughts' type='text' placeholder="What's on your mind...">
                                <hr class='horizontal-line horizontal-line-post'>
                            </div>
                            <div class="form-register registration-group signup post-article-button" id='post-button-div' >
                                <input class='register-button singup post-button' type="submit" name="post" value="Post">
                                <!-- send to database and insert ajax response  -->
                            </div>
                        </form>
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