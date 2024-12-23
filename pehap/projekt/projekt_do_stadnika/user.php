<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body>
<?php
    session_start();
    echo("<p><a href='index.php'>Wyloguj</a><br></p>");
    If(isset($_SESSION['login'])){
        echo("<p>Witaj ".$_SESSION['login']."</p>");
        $conn=new mysqli('localhost','root','','wtomczyk');
        echo("<form method='POST'><input type='hidden' name='login' value='".$_SESSION['login']."'><input type='hidden' name='funkcja' value='losuj'><input type='submit' class='losujbutton' value='Wylosuj pytania'></form><br>");
        if(isset($_POST['funkcja'])){
            if($_POST['funkcja']=="losuj"){
                $sql = 'SELECT *  FROM pytania';
                $rs=$conn->query($sql);
                $tab = [];
                while($rec=$rs->fetch_array()) {
                    array_push($tab,$rec['id']);
                }
                $rand_keys = array_rand($tab, 10);
                $tab_id = [];
                $tab_liczb = [];
                $licznik = 0;
                while($licznik<10){
                    $i = rand(0,9);
                    $zezwolenie = true;
                    $licznik2 = 0;
                    while($licznik2 < count($tab_liczb)){
                        if($i == $tab_liczb[$licznik2]){
                            $zezwolenie = false;
                        }
                        $licznik2++;
                    }
                    if($zezwolenie){
                        array_push($tab_liczb,$i);
                        array_push($tab_id,$tab[$rand_keys[$licznik]]);
                        $licznik++;
                    }
                }
                $licznik = 0;
                $tab_zadan = [];
                while($licznik<10){
                    $tab_zadan[$tab_liczb[$licznik]] = $tab_id[$licznik];
                    $licznik++;
                }
                //$tab_zadan - tabela 10 rozlosowanych id zadań
                $zadania = "";
                $licznik = 0;
                while($licznik<10){
                    $zadania.=$tab_zadan[$licznik];
                    if($licznik!=9){
                        $zadania.=",";
                    }
                    $licznik++;
                }
                $conn->query("UPDATE `users` SET `wylosowane_pytania` = '".$zadania."' WHERE `users`.`login` = '".$_POST['login']."'");
                $sql = 'SELECT *  FROM pytania';
                $rs=$conn->query($sql);
                echo("<form  method='POST' ><div class='form'><input type='hidden' name='login' value='".$_POST['login']."'><input type='hidden' name='funkcja' value='odpowiedz'>");
                $licznik = 0;
                while($licznik<10){
                    if($rs->num_rows>0) {
                        $sql = 'SELECT *  FROM pytania';
                        $rs=$conn->query($sql);
                        while($rec=$rs->fetch_array()) {
                            if($tab_zadan[$licznik]==$rec['id']){
                                echo($rec['tresc']);
                                echo("<br>");
                                $aaa = "aaa".$licznik;
                                echo('<input type="radio" name="'.$aaa.'" value="'.$rec['pytanie1'].'">'.$rec['pytanie1'].'<br>
                                <input type="radio" name="'.$aaa.'" value="'.$rec['pytanie2'].'">'.$rec['pytanie2'].'<br>
                                <input type="radio" name="'.$aaa.'" value="'.$rec['pytanie3'].'">'.$rec['pytanie3'].'<br>
                                <input type="radio" name="'.$aaa.'" value="'.$rec['pytanie4'].'">'.$rec['pytanie4'].'<br>');
                            }
                        }
                    }
                    $licznik++;
                }
                echo("<input type='submit' class='losujbutton' value='Potwierdź odpowiedzi'></div></form>");
            }
            else if($_POST['funkcja']=='odpowiedz'){
                $sql = "SELECT * FROM users WHERE `users`.`login` = '".$_POST['login']."'";
                $rs=$conn->query($sql);
                $pytania = "";
                while($rec=$rs->fetch_array()) {
                    $pytania = explode(",",$rec["wylosowane_pytania"]);
                }
                $licznik = 0;
                $wynik = 0;
                echo("<div class='form'>");
                while($licznik<10){
                    $aaa = "aaa".$licznik;
                    $sql = 'SELECT *  FROM pytania';
                    $rs=$conn->query($sql);
                    while($rec=$rs->fetch_array()) {
                        if($pytania[$licznik]==$rec['id']){
                            $aaa = $rec["wszystkie_odpowiedzi"]+1;
                            $bbb = $rec['poprawne_odpowiedzi']+1;
                            $conn->query("UPDATE `pytania` SET `wszystkie_odpowiedzi` = '".$aaa."'  WHERE `pytania`.`id` = '".$rec['id']."' ");
                            echo($rec['tresc']);
                            echo("<br>");
                            $aaa = "aaa".$licznik;
                            //tu porobić rzeczy w radio
                            if(isset($_POST[$aaa])){
                                if($_POST[$aaa]==$rec['pytanie1']){
                                    if($rec['dobra_odpowiedz']==$rec['pytanie1']){
                                        $wynik++;
                                        $conn->query("UPDATE `pytania` SET `poprawne_odpowiedzi` = '".$bbb."'  WHERE `pytania`.`id` = '".$rec['id']."' ");
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b class="wybrane dobre">'.$rec['pytanie1'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b class="wybrane zle">'.$rec['pytanie1'].'</b><br>');
                                    }
                                }
                                else{
                                    if($rec['dobra_odpowiedz']==$rec['pytanie1']){
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b class="dobre">'.$rec['pytanie1'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b>'.$rec['pytanie1'].'</b><br>');
                                    }
                                }  
                            }
                            else{
                                if($rec['dobra_odpowiedz']==$rec['pytanie1']){
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b class="dobre">'.$rec['pytanie1'].'</b><br>');
                                }
                                else{
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie1'].'"><b>'.$rec['pytanie1'].'</b><br>');
                                }
                            }
                            if(isset($_POST[$aaa])){
                                if($_POST[$aaa]==$rec['pytanie2']){
                                    if($rec['dobra_odpowiedz']==$rec['pytanie2']){
                                        $wynik++;
                                        $conn->query("UPDATE `pytania` SET `poprawne_odpowiedzi` = '".$bbb."'  WHERE `pytania`.`id` = '".$rec['id']."' ");
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b class="wybrane dobre">'.$rec['pytanie2'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b class="wybrane zle">'.$rec['pytanie2'].'</b><br>');
                                    }
                                }
                                else{
                                    if($rec['dobra_odpowiedz']==$rec['pytanie2']){
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b class="dobre">'.$rec['pytanie2'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b>'.$rec['pytanie2'].'</b><br>');
                                    }
                                }  
                            }
                            else{
                                if($rec['dobra_odpowiedz']==$rec['pytanie2']){
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b class="dobre">'.$rec['pytanie2'].'</b><br>');
                                }
                                else{
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie2'].'"><b>'.$rec['pytanie2'].'</b><br>');
                                }
                            }
                            if(isset($_POST[$aaa])){
                                if($_POST[$aaa]==$rec['pytanie3']){
                                    if($rec['dobra_odpowiedz']==$rec['pytanie3']){
                                        $wynik++;
                                        $conn->query("UPDATE `pytania` SET `poprawne_odpowiedzi` = '".$bbb."'  WHERE `pytania`.`id` = '".$rec['id']."' ");
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b class="wybrane dobre">'.$rec['pytanie3'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b class="wybrane zle">'.$rec['pytanie3'].'</b><br>');
                                    }
                                }
                                else{
                                    if($rec['dobra_odpowiedz']==$rec['pytanie3']){
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b class="dobre">'.$rec['pytanie3'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b>'.$rec['pytanie3'].'</b><br>');
                                    }
                                }  
                            }
                            else{
                                if($rec['dobra_odpowiedz']==$rec['pytanie3']){
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b class="dobre">'.$rec['pytanie3'].'</b><br>');
                                }
                                else{
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie3'].'"><b>'.$rec['pytanie3'].'</b><br>');
                                }
                            }
                            if(isset($_POST[$aaa])){
                                if($_POST[$aaa]==$rec['pytanie4']){
                                    if($rec['dobra_odpowiedz']==$rec['pytanie4']){
                                        $wynik++;
                                        $conn->query("UPDATE `pytania` SET `poprawne_odpowiedzi` = '".$bbb."'  WHERE `pytania`.`id` = '".$rec['id']."' ");
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b class="wybrane dobre">'.$rec['pytanie4'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled checked name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b class="wybrane zle">'.$rec['pytanie4'].'</b><br>');
                                    }
                                }
                                else{
                                    if($rec['dobra_odpowiedz']==$rec['pytanie4']){
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b class="dobre">'.$rec['pytanie4'].'</b><br>');
                                    }
                                    else{
                                        echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b>'.$rec['pytanie4'].'</b><br>');
                                    }
                                }  
                            }
                            else{
                                if($rec['dobra_odpowiedz']==$rec['pytanie4']){
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b class="dobre">'.$rec['pytanie4'].'</b><br>');
                                }
                                else{
                                    echo('<input type="radio" disabled name="'.$aaa.'" value="'.$rec['pytanie4'].'"><b>'.$rec['pytanie4'].'</b><br>');
                                }
                            }
                        }
                    }
                    $licznik++;
                }
                echo("</div>");
                $sql = "SELECT * FROM users WHERE `users`.`login` = '".$_POST['login']."'";
                $rs=$conn->query($sql);
                while($rec=$rs->fetch_array()) {
                    $aaa = $rec['poprawne_odpowiedzi']+$wynik;
                    $bbb = $rec['wszystkie_odpowiedzi']+10;
                    $conn->query("UPDATE `users` SET `poprawne_odpowiedzi` = '".$aaa."', `wszystkie_odpowiedzi` = '".$bbb."'  WHERE `users`.`login` = '".$_POST['login']."' ");
                    if($rec["rekord"]<$wynik){
                        $conn->query("UPDATE `users` SET `rekord` = '".$wynik."' WHERE `users`.`login` = '".$_POST['login']."' ");
                    }
                }
                echo("<p>Wynik: ".($wynik*10)."%</p>");
            }
        }
        $conn=new mysqli('localhost','root','','wtomczyk');
        $sql = 'SELECT *  FROM users WHERE NOT `users`.`login` = "admin" ORDER BY rekord  DESC LIMIT 10';
        $rs=$conn->query($sql);
        if($rs->num_rows>0) {
            echo("<table border=1 class='wyniki'><tr><td>Najlepsi użytkownicy</td><td>rekord</td></tr>");
            while($rec=$rs->fetch_array()) {
                echo("<tr><td>".$rec['login']."</td><td>".($rec['rekord']*10)."%</td></tr>");
            }
            echo("</table>");
        }

    }
?>
</body>
</html>