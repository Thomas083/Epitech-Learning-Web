<?php
    $name = $_GET["name"];
    if(isset($name) && $name!=""){
        echo json_encode(['name' => $name]);
    } else {
        echo json_encode(array('name'=> 'error'));
    }
?>