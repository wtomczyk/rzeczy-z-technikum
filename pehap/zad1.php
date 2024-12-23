<?php
    $licznik = 0;
    $suma = 1;
    $i = 0;
    while($i<100){
        $i = $i+$suma;
        $suma++;
        $licznik++;
    }
    //odejmowane od licznika jeden, ponieważ otrzymane i przekracza sto
    $licznik--;
    echo($licznik);
?>