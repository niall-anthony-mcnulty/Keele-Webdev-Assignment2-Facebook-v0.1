<?php 
// check session and use variables
require ('../includes/secure-login.php');
require ('../includes/db-login.php');
// connect to db //


$session_user = $_SESSION['user_name'];
$full_name = $_REQUEST['full-name'];
$mobile_no = $_REQUEST['mobile-no'];
$radio_value = $_REQUEST['radio-value'];
$nationality = $_REQUEST['nationality'];



// send back to comments to feed
$sql = "SELECT userName, mobileNumber, userSex, fullName, userNationality FROM bio WHERE userName = '$session_user'";

$result = mysqli_query($conn, $sql);

$output = array();
while($data = mysqli_fetch_assoc($result)) {

    $output[] = $data;
};

if (!$output) {

        // paramterise 
    $stmt = $conn->prepare("INSERT INTO bio (userName, mobileNumber, userSex, fullName, userNationality) VALUES (?,?,?,?,?)");
    $stmt->bind_param('sssss', $session_user, $mobile_no, $radio_value, $full_name, $nationality );
    $stmt->execute();

    $sql = "SELECT userName, mobileNumber, userSex, fullName, userNationality FROM bio WHERE userName = '$session_user'";

    $result = mysqli_query($conn, $sql);

    $output = array();
    while($data = mysqli_fetch_assoc($result)) {

        $output[] = $data;
    };

    echo json_encode($output); 

}else {

    $sql = "UPDATE bio SET userName='$session_user', mobileNumber='$mobile_no', userSex='$radio_value', fullName='$full_name', userNationality='$nationality'  WHERE userName = '$session_user'";
    $result = mysqli_query($conn, $sql);

    $sql = "SELECT userName, mobileNumber, userSex, fullName, userNationality FROM bio WHERE userName = '$session_user'";

    $result = mysqli_query($conn, $sql);

    $output = array();
    while($data = mysqli_fetch_assoc($result)) {

        $output[] = $data;
    };

        echo json_encode($output);

}

?>