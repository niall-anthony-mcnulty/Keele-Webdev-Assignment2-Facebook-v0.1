<?php

session_start();
// if session ip ,id ,login not valid or session is over 60 minutes ---->  end session.

// ($_SESSION['ip'] != $_SERVER['REMOTE_ADDR']) || 
if ($_SESSION['id'] != session_id() || !isset($_SESSION['loggedin']) || !$_SESSION['loggedin'] || ((time() - $_SESSION['loggin_time']) > 3600)) {     
      session_destroy();
      header("Location: ../index.php");
      exit;
}

?>