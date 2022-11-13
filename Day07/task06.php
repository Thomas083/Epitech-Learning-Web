<?php
function sequence($length)
{
    if ($length < 0) {
        echo "";
    } else {
        $conway = "1\n";
        echo $conway;
        for ($i = 0; $i < $length; $i++) {
            $conway = preg_replace_callback('/(.)\1*/', function ($matches) {
                return strlen($matches[0]) . $matches[1];
            }, $conway);
            echo $conway;
        }
    }
}
?>
