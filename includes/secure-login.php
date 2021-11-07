<?php

session_start();
if (($_SESSION['id'] != session_id()) || (!isset($_SESSION['loggedin'])) || (!$_SESSION['loggedin'])) {     session_destroy();
      header("Location: index.php");
      exit;
}

?>