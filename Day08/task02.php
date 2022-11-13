<?php
function render_body(string $string)
    {
        switch ($string) {
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
    }
?>
