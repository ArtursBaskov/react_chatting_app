<?php
session_start();
require_once("config.php");
use php_for_react\Classes\{GetData, Authentication};
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$data = json_decode(file_get_contents("php://input"), true);


echo isset($_SESSION["username_session"]) ? $_SESSION["username_session"] : 0;

