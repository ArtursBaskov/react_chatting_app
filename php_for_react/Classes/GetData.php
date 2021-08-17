<?php
namespace php_for_react\Classes;
use \PDO;

class GetData extends DbConn {
    //get all records from chosen table and its columns
    public function justGetData($columns = [], $fromTable)
    {
        $sql = 'SELECT '.implode(",", $columns).'
        FROM '.$fromTable.'';
        $do = $this->connect()->prepare($sql);
        $do->execute();

        $arrayOfData = $do->fetchAll();
        return $arrayOfData;
    }
    //get single record
    private function getOneDataRow($columns = [], $fromTable, $whereCol, $whereVar)
    {
        $sql = 'SELECT '.implode(",", $columns).'
        FROM '.$fromTable.'
        WHERE '.$whereCol.' = ?';
        $do = $this->connect()->prepare($sql);
        $do->execute([$whereVar]);

        $row = $do->fetch();
        return $row;
    }

    public function getOneDataRowExt($columns = [], $fromTable, $where, $whereVar)
    {
        $sql = 'SELECT '.implode(",", $columns).'
        FROM '.$fromTable.'
        WHERE '.$where.'';
        $do = $this->connect()->prepare($sql);
        $do->execute($whereVar);

        $row = $do->fetch();
        return $row;
    }


    public function getUserData($columns = [])
    {
        $sql = 'SELECT '.implode(",", $columns).'
        FROM users';
        $do = $this->connect()->prepare($sql);
        $do->execute();

        $arrayOfUsers = $do->fetchAll();
        return $arrayOfUsers;
    }
    //get messages for chosen chat
    public function getMessages($chosenChatID)
    {
        //get group chat id //maybe?
        //$this->getOneDataRow(['id_chat_group'], 'chat_group', 'id_chat_group', $chosenChatID);

        $sql = "SELECT users.username, chat_msgs.msg_text
        FROM users
        INNER JOIN chat_msgs ON users.idusers = chat_msgs.msg_author_id
        WHERE chat_msgs.msg_group_id = ?";
        $do = $this->connect()->prepare($sql);
        $do->execute([$chosenChatID]);

        $arrayOfMsgs = $do->fetchAll();
        return $arrayOfMsgs;
    }
}