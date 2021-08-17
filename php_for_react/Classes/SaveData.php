<?php
namespace php_for_react\Classes;
use \PDO;

class SaveData extends DbConn {
    public function saveUser($username, $email, $password)
    {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        $sql = "INSERT INTO users
        (username, email, password, reg_date) VALUES (?, ?, ?, NOW())";
        $do = $this->connect()->prepare($sql);
        $do->execute([$username, $email, $hashedPassword]);
    }
}

