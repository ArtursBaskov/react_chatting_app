<?php
namespace php_for_react\Classes;
session_start();
class Authentication
{
    private $username;
    private $password;

    function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    function logIn()
    {
        if($this->checkIndentity()){

            $_SESSION['user_logged'] = true;
            $_SESSION['username_session'] = $this->username;

            $loggedInSessions = [];
            $loggedInSessions += ["login_status" => $_SESSION['user_logged']];
            $loggedInSessions += ["logged_user" => $_SESSION['username_session']];

            return $loggedInSessions;
            
        } else {
            echo 'User failed to log in';
        }
    }
    function logout()
    {
        if($_SESSION['user_logged'] && !empty($_SESSION['username_session'])){
            $_SESSION['user_logged'] = false;
            $_SESSION['username_session'] = '';
            echo 'User logged out';
        }
    }

    private function checkIndentity()
    {
        $getDataObj = new GetData();
        //check if username and password belongs to user
        $row = $getDataObj->getOneDataRowExt(
            ['username', 'password'],
            'users', 
            'username = ?', 
            [$this->username]
        );
        $passwordMatches = password_verify($this->password, $row['password']);
        $correctData = false;
        $row && $passwordMatches ? $correctData = true : 0;
        return $correctData;
    }
    

}