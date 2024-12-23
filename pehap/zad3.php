<?php
    $max = 0;
    $min = 0;
    for($licznik=0;$licznik<20;$licznik++){
        $liczba = rand(-50, 50);
        if($licznik==0){
            $max=$liczba;
            $min=$liczba;
        }
        else{
            if($max<$liczba){
                $max=$liczba;
            }
            if($min>$liczba){
                $min=$liczba;
            }
        }
        echo($liczba);
        echo("<br/>");
    }
    echo("<br/>");
    echo("<br/>");
    echo("max to: $max ");
    echo("min to: $min");
?>