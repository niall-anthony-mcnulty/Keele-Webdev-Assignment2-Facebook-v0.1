<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>FriendZone Login</title>
    <meta name="description" content="login-page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="icon" href="img/logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bellota&family=Bellota+Text&display=swap" rel="stylesheet", type='text/css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">  
    <script src='js/main.js' async></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div class='wrapper'>
        <div class='content-inside'>
            <nav>
                <div class="container nav">
                    <div class='row justify-content-center no-gutters title-row w-100'>
                        <div class ='col-xs-12 col-sm-10 col-md-8 col-lg-8 title-col'>
                            <a href='index.php' class='login-link'><img src='img/logo.png' alt='Friendzone logo' class='logo-pic registration-logo-pic'><span class='login-title'>Friend<u>Z</u>one</span></a>
                        </div>
                    </div>
                </div>
            </nav>
            <main class='container login login-width'>
                <div class='row justify-content-center no-gutters main-row'>
                    <div class ='col-xs-11 col-sm-11 col-md-11 col-lg-11 main-col'>
                        <form id='login-form' method="post" action="authenticate.php">
                            <div class="form-group">
                                <input class="form-control" type="email" name="email" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <input class="form-control" type="password" name="password" placeholder="Password">
                            </div>

                            <div class="form-submit">
                                <input class='submit-login' type="submit" name="login" value="Login">
                            </div>
                            <div class='line'>
                                <hr class='horizontal-line' >
                            </div>
                        </form>
                        <div class="form-register">
                            <form method='post' action='registration.php'> 
                                <input class='register-button' type="submit" name="register" value="Create Account">
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <footer class="container footer">
        <div class='row justify-content-center no-gutters footer-row w-100'>
            <div class ='col-xs-8 col-sm-8 col-md-8 col-lg-8 footer-col'>
                <p class='madeby'>FriendZ<u>o</u>ne - Made by Niall McNulty</p>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>   
</body>                                       
</html>