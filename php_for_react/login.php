<?php
require_once("config.php");
use php_for_react\Classes\{GetData, Authentication};
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];


$authentify = new Authentication($username, $password);
echo json_encode($authentify->logIn());


