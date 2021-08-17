<?php
namespace php_for_react\Classes;
session_start();

class LoggedUser{
    private function getAccess()
    {
        if($_SESSION['user_logged']){
            return true;
        }
    }
    
    /* function writeMessage */
    /* function editProfile */
    /* function addChat */
}