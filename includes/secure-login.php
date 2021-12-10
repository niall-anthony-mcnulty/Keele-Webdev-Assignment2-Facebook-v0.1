<?php

session_start();
// if session ip ,id ,login not valid or session is over 60 minutes ---->  end session.

if ($_SESSION['id'] != session_id() || !isset($_SESSION['loggedin']) || !$_SESSION['loggedin'] || ($_SESSION['ip'] != $_SERVER['HTTP_X_FORWARDED_FOR']) || ((time() - $_SESSION['loggin_time']) > 3600)) {     
      session_destroy();
      header("Location: ../index.php");
      exit;
}

?>