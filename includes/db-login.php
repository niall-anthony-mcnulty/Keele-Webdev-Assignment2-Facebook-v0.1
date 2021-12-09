<?php // login.php

//Get Heroku ClearDB connection information


$cleardb_server   = 'eu-cdbr-west-01.cleardb.com (b260447ff86cf8)';
$cleardb_username = 'b260447ff86cf8';
$cleardb_password = 'a61f5c66';
$cleardb_db       = 'heroku_702d464ce46caa4';

$active_group = 'default';
$query_builder = TRUE;

// $hn = '127.0.0.1';
// $un = 'staff';
// $pw = 'admin123';
// $db = 'WEATHER';
// $conn = new mysqli($hn, $un, $pw, $db);

$conn = new mysqli($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>