<?php
namespace php_for_react\Classes;
use \PDO;
//this class checks user input
class ProcessData{
    public function checkUserDataAvailability($usernameProp, $emailProp)
    {
        $username = htmlEntities($usernameProp);
        $email = htmlEntities($emailProp);
        $getDataObj = new GetData();
        $availableUsername = $getDataObj->getOneDataRowExt(
            ['username'],
            'users', 
            'username = ?', 
            [$username]
        );

        $availableEmail = $getDataObj->getOneDataRowExt(
            ['email'],
            'users', 
            'email = ?', 
            [$email]
        );
        $messages = [];
        $availableUsername ? $messages += ['username_taken' => 'This username is already taken ']: 0;
        $availableEmail ? $messages += ['email_taken' => 'This email is already taken']: 0;

        return $messages;
    }
    public function validateUsername($usernameProp)
    {
        $username = htmlEntities($usernameProp);
        $noError = true;
        if(empty($username)){
            $noError = false;
            //echo 'Error: Username field is empty';
        }
        if(mb_strlen($username, 'utf8') < 4){
            $noError = false;
            //echo 'Error: Username is shorter than 4 characters';
        }
        if(mb_strlen($username, 'utf8') > 20){
            $noError = false;
            //echo 'Error: Username is longer than 20 characters';
        }
        if(preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $username)){
            $noError = false;
            //echo 'Error: Username contains forbidden symbols';
        }
        return $noError;
    }
    public function validateEmail($emailProp)
    {
        $email = htmlEntities($emailProp);
        $noError = true;
        if(empty($email)){
            $noError = false;
            //echo 'Error: Eamil field is empty';
        }
        else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $noError = false;
           // echo 'Error: Wrong email format';
        }
        return $noError;
    }

    
    public function validatePassword($passwordProp, $repeatPasswordProp)
    {
        $password = htmlEntities($passwordProp);
        $repeatPassword = htmlEntities($repeatPasswordProp);
        $noError = true;
        if(empty($password)){
            $noError = false;
            //echo 'Error: Password field is empty';
        } else {
            if($password != $repeatPassword){
                $noError = false;
                //echo 'Error: Passwords do not match';
            } else {
                if($this->passwordStrengthTest($password) < 4){
                    $noError = false;
                    //echo 'Error: Password is too weak';
                    //echo $this->passwordStrengthTest($password);
                }
                if($this->passwordStrengthTest($password) >= 4){
                    //echo 'Medium password';
                }
                if($this->passwordStrengthTest($password) >= 5){
                    //echo 'Strong password';
                }
            }
            
        }
        return $noError;
    }
    //check how strong password is and use this function in password validation
    public function passwordStrengthTest($password)
    {
        $pwdMeter = 0;
        if (mb_strlen($password, 'utf8')  >= 8) {
            $pwdMeter = $pwdMeter + (mb_strlen($password, 'utf8') / 8);
        }
        if (preg_match("/[A-Z]/", $password)){
            $pwdMeter++;
        }
        if(preg_match("/[0-9]/", $password)){
            $pwdMeter++;
        }
        if(preg_match("/[\'^£$%&*()}{@#~?><>,|=_+!-]/", $password)){
            $pwdMeter++;
        }
        return $pwdMeter;
    }
    



}