<?php
$con=mysqli_connect("localhost","root","","hospitals");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $sql="INSERT INTO contact ( name,email,mobile,subject) VALUES ('".$_POST['name']."','".$_POST['email']."','".$_POST['mobile']."','".$_POST['sub']."')";
if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }

header('Location:contact.php');
mysqli_close($con);
?>