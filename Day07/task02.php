<?php
    function dog_bark(int $woof_nb) {
        if ($woof_nb > 0) {
            for ($i = 0; $i <=$woof_nb; $i++) {
                if($i == 0) {
                    echo "woof";
                } elseif ($i == $woof_nb ) {
                    echo "\n";
                } else {
                    echo " woof";
                }
            }
        } else {
            echo "\n";
        }
    }
?>
