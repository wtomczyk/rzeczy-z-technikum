<?php
    If(isset($_GET['aa1'])){
        $tekst = $_GET['aa1'];
        $wynik = "";
        $tekst = str_split($tekst);
        for($a=0;$a<sizeof($tekst);$a++){
            switch($tekst[$a]){
                    case "K" :
                    $tekst[$a]="O";
                    break;
                    case "k" :
                    $tekst[$a]="o";
                    break;
                    case "O" :
                    $tekst[$a]="K";
                    break;
                    case "o" :
                    $tekst[$a]="k";
                    break;
                    case "N" :
                    $tekst[$a]="I";
                    break;
                    case "n" :
                    $tekst[$a]="i";
                    break;
                    case "I" :
                    $tekst[$a]="N";
                    break;
                    case "i" :
                    $tekst[$a]="n";
                    break;
                    case "E" :
                    $tekst[$a]="C";
                    break;
                    case "e" :
                    $tekst[$a]="c";
                    break;
                    case "C" :
                    $tekst[$a]="E";
                    break;
                    case "c" :
                    $tekst[$a]="e";
                    break;
                    case "M" :
                    $tekst[$a]="A";
                    break;
                    case "m" :
                    $tekst[$a]="a";
                    break;
                    case "A" :
                    $tekst[$a]="M";
                    break;
                    case "a" :
                    $tekst[$a]="m";
                    break;
                    case "T" :
                    $tekst[$a]="U";
                    break;
                    case "t" :
                    $tekst[$a]="u";
                    break;
                    case "U" :
                    $tekst[$a]="T";
                    break;
                    case "u" :
                    $tekst[$a]="t";
                    break;
                    case "R" :
                    $tekst[$a]="Y";
                    break;
                    case "r" :
                    $tekst[$a]="y";
                    break;
                    case "Y" :
                    $tekst[$a]="R";
                    break;
                    case "y" :
                    $tekst[$a]="r";
                    break;
                break;
            }
            echo($tekst[$a]);
        }   
    }
?>