<?php 
    function get_shortest(array $array) {
        $shortest = $array[0];
        foreach ($array as $value) {
            if (strlen($value) < strlen($shortest)) {
                $shortest = $value;
            }
        }
        return $shortest;
    }
?>