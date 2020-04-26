<?php

session_start();

$user='';
if(!empty($_SESSION['user'])){
  $user = $_SESSION['user'];
}

if($user == 'admin'){
  echo '{
    "message": "This is a secret message only for administrator",
    "success": true
  }';
} else {
  echo '{
    "message": "You are not Admin",
    "success": false
  }';
}

?>
