<?php 
    function form_is_submitted() {
        return isset($_POST["submit"]);
    }

    function whoami() {
        $name = $_POST["name"];
        $age = $_POST["age"];
        $curriculum = $_POST["curriculum"];
        switch ($curriculum) {
            case "pge":
                $curriculum = "PGE (Programme Grande Ecole)";
                break;
            case "msc":
                $curriculum = "MSc Pro";
                break;
            case "coding":
                $curriculum = "Coding Academy";
                break;
            case "wac":
                $curriculum = "Web@cademie";
                break;
            default:
                $curriculum = null;
                break;
        }
        if($curriculum != null){
        if($name == null && !ctype_digit($age)) {
            echo "Hi, I have no name. I'm a student of $curriculum.";
        } elseif($name == null) {
            echo "Hi, I have no name and I'm $age years old. I'm a student of $curriculum.";
        } elseif($name != null && !ctype_digit($age)) {
            echo "Hi, my name is $name. I'm a student of $curriculum.";
        } else {
            echo "Hi, my name is $name and I'm $age years old. I'm a student of $curriculum.";
        }
    } else {
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
    }
?>