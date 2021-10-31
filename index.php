<!DOCTYPE html>
<html>
<head>
  <title>FriendZone</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="css/main.css" type="text/css">
  <link rel="stylesheet" href="css/style.css" type="text/css">
  <link rel="icon" href="img/friendzonefavicon.png">
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bellota&family=Bellota+Text&display=swap" rel="stylesheet", type='text/css'>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  
<body>
  <nav class="navbar login">
    <div class="container login-logo">
      <div class='center'>
        <div class='row justify-content-center no-gutters login-row'>
           <div class ='col-xs-12 col-sm-10 col-md-8 col-lg-8 login-div'>
              <a class="navbar-brand" href="index.php">
                <img src='img/friendzonefavicon.png' alt='FriendZone Logo' class='login-img-center'>
                <span class='title-login'> Friend<u>Z</u>one </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main class="container">
  <h1 class="text-center">Welcome to FriendZone!</h1>

    <div class="row">
      <div class="col-md-6">
        <h4>Login to start enjoying unlimited fun!</h4>

        <!-- login form -->
        <form method="post" action="home.php">
          <div class="form-group">
            <input class="form-control" type="text" name="username" placeholder="Username">
          </div>

          <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Password">
          </div>

          <div class="form-group">
            <input class="btn btn-primary" type="submit" name="login" value="Login">
          </div>
        </form>
        <!-- ./login form -->
      </div>
      <div class="col-md-6">
        <h4>Don't have an account yet? Register!</h4>

        <!-- register form -->
        <form method="post" action="home.php">
          <div class="form-group">
            <input class="form-control" type="text" name="username" placeholder="Username">
          </div>

          <div class="form-group">
            <input class="form-control" type="text" name="location" placeholder="Location">
          </div>

          <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Password">
          </div>

          <div class="form-group">
            <input class="btn btn-success" type="submit" name="register" value="Register">
          </div>
        </form>
        <!-- ./register form -->
      </div>
    </div>
  </main>
  <!-- ./main -->

  <!-- footer -->
  <footer class="container text-center">
    <ul class="nav nav-pills pull-right">
      <li>FaceClone - Made by [your name here]</li>
    </ul>
  </footer>
  <!-- ./footer -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>