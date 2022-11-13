<?php
    function calc_average(array $array) {
        return round(array_sum($array) / count($array), 1);
    }
?>