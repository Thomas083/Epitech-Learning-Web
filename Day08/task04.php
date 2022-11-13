<?php
    function whoami() {
        $name = $_POST["name"];
        $age = $_POST["age"];
        if($name == null && !ctype_digit($age)) {
            echo "Hi, I have no name.";
        } elseif($name == null) {
            echo "Hi, I have no name and I'm $age years old.";
        } elseif($name != null && !ctype_digit($age)) {
            echo "Hi, my name is $name.";
        } else {
            echo "Hi, my name is $name and I'm $age years old.";
        }
    }
?>