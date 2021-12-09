<?php // login.php

$hn = '127.0.0.1';
$un = 'root';
$pw = '';
$db = 'Database operationsheroku_702d464ce46caa4';
$conn = new mysqli($hn, $un, $pw, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>