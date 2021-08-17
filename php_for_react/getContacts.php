<?php
require_once("config.php");
use php_for_react\Classes\{GetData};
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$getDataObj = new GetData();
echo json_encode($getDataObj->justGetData(['id_chat_group', 'group_name', 'last_msg'], 'chat_group'));

