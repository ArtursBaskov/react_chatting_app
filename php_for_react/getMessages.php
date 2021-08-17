<?php
require_once("config.php");
use php_for_react\Classes\{GetData};


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');


$data = json_decode(file_get_contents("php://input"), true);
$group_id = $data['groupID'];

$getDataObj = new GetData();
$msgs = $getDataObj->getMessages($group_id);
echo json_encode($msgs);