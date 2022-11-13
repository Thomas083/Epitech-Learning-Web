<?php
    function dynamic_body() {
        $page = $_GET["page"];
        switch ($page) {
            case "home":
                include "home.html";
                break;
            case "php":
                include "php.html";
                break;
            case "sql":
                include "sql.html";
                break;
            default:
                echo "Unknown page";
                break;
        }
        if ($page =="null") {
            echo "Unknown page";
        }
    }
?>