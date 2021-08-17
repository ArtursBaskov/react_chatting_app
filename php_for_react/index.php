<?php
require_once("config.php");
use php_for_react\Classes\{SaveData, ProcessData};
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');


$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$email = $data['email'];
$password = $data['password'];
$repeatPassword = $data['repeatPassword'];
//echo $username;

$saveData = new SaveData();
$processData = new ProcessData();
if(
$processData->validateUsername($username) && 
$processData->validateEmail($email) &&
$processData->validatePassword($password, $repeatPassword)
){
    echo empty($processData->checkUserDataAvailability($username, $email)) ?
    $saveData->saveUser($username, $email, $password) :
    json_encode($processData->checkUserDataAvailability($username, $email));

}