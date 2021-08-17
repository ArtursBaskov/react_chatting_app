<?php
namespace php_for_react\Classes;
use \PDO;

class DbConn {
  private $host = "127.0.0.5:3306";
  private $user = "root";
  private $password = "PrakseSql3008";
  private $dbname = "db_reactApp";

  protected function connect() {
    try {
      $dsn = 'mysql:host=' . $this->host .';dbname='. $this->dbname;
      $options = [
        PDO::ATTR_EMULATE_PREPARES   => false,
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      ];

      $pdo = new PDO($dsn, $this->user, $this->password, $options);
    } catch (PDOException $e) {
        die($e->getMessage());
      }
    return $pdo;
  }
}
