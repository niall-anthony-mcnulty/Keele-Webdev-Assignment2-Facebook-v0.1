<?php

session_start();
// if session ip ,id ,login not valid or session is over 60 minutes ---->  end session.

// get client ip from heroku as they pass through proxies
function getIpAddress() {
      if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
          $ipAddresses = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
          return trim(end($ipAddresses));
      }
      else {
          return $_SERVER['REMOTE_ADDR'];
      }
  };


if ($_SESSION['id'] != session_id() || !isset($_SESSION['loggedin']) || !$_SESSION['loggedin'] || ($_SESSION['ip'] != getIpAddress()) || ((time() - $_SESSION['loggin_time']) > 3600)) {     
      session_destroy();
      header("Location: index.php");
      exit;
};



?>