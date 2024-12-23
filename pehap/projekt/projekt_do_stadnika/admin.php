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
echo("<p><a href='index.php'>Wyloguj</a></p>");
session_start();
    If($_SESSION['login']=='admin'){
        echo("<div class='adminpanel'>");
        $conn=new mysqli('localhost','root','','wtomczyk');
        if(isset($_POST['funkcja'])){
            if($_POST['funkcja']=="edytuj"){
                $val = "";
                if($_POST['odpowiedz']==1){
                    $val = $_POST['odp1'];
                }
                else if($_POST['odpowiedz']==2){
                    $val = $_POST['odp2'];
                }
                else if($_POST['odpowiedz']==3){
                    $val = $_POST['odp3'];
                }
                else if($_POST['odpowiedz']==4){
                    $val = $_POST['odp4'];
                }
                if($_POST['tresc']!="" && $_POST['odp1']!="" && $_POST['odp2']!="" && $_POST['odp3']!="" && $_POST['odp4']!="" && $_POST['odp1']!=$_POST['odp2'] && $_POST['odp1']!=$_POST['odp3'] && $_POST['odp1']!= $_POST['odp4'] && $_POST['odp2']!= $_POST['odp3'] && $_POST['odp2']!=$_POST['odp4'] && $_POST['odp3']!=$_POST['odp4']){
                    $conn->query("UPDATE `pytania` SET `dobra_odpowiedz` = '".$val."', `tresc` = '".$_POST['tresc']."', `pytanie1` = '".$_POST['odp1']."', `pytanie2` = '".$_POST['odp2']."', `pytanie3` = '".$_POST['odp3']."', `pytanie4` = '".$_POST['odp4']."' WHERE `pytania`.`id` = '".$_POST['id']."' ");
                }
                else{
                    echo("<p>Nie wszystkie pola wypełniono, tudzież niektóre z pól są takie same</p>");
                }
            }
            else if($_POST['funkcja']=="delete"){
                echo($_POST['usun']);
                $conn->query("DELETE FROM `pytania` WHERE `pytania`.`id` = '".$_POST['usun']."' ");
            }
            else if($_POST['funkcja']=="add"){
                if($_POST['tresc']!="" && $_POST['odp1']!="" && $_POST['odp2']!="" && $_POST['odp3']!="" && $_POST['odp4']!="" && $_POST['odp1']!=$_POST['odp2'] && $_POST['odp1']!=$_POST['odp3'] && $_POST['odp1']!= $_POST['odp4'] && $_POST['odp2']!= $_POST['odp3'] && $_POST['odp2']!=$_POST['odp4'] && $_POST['odp3']!=$_POST['odp4']){
                    $val = "";
                    if($_POST['odpowiedz']==1){
                        $val = $_POST['odp1'];
                    }
                    else if($_POST['odpowiedz']==2){
                        $val = $_POST['odp2'];
                    }
                    else if($_POST['odpowiedz']==3){
                        $val = $_POST['odp3'];
                    }
                    else if($_POST['odpowiedz']==4){
                        $val = $_POST['odp4'];
                    }
                    $conn->query("INSERT INTO `pytania` (`id`, `tresc`, `pytanie1`, `pytanie2`, `pytanie3`, `pytanie4`, `dobra_odpowiedz`, `poprawne_odpowiedzi`, `wszystkie_odpowiedzi`) VALUES (NULL, '".$_POST['tresc']."','".$_POST['odp1']."','".$_POST['odp2']."','".$_POST['odp3']."','".$_POST['odp4']."','".$val."','0','0')");
                }
                else{
                    echo("<p>Nie wszystkie pola wypełniono, tudzież niektóre z pól są takie same</p>");
                }
            }
            else if($_POST['funkcja']=="users"){
                $conn->query("DELETE FROM `users` WHERE `users`.`login` = '".$_POST['user']."' ");
            }
        }
        $sql='SELECT * FROM pytania';
        $rs=$conn->query($sql);
        if($rs->num_rows>0) {
            echo('<h1>Panel pytań</h1><table border=1 class="table1"><tr><td>Id</td><td>Treść zadania</td><td>Odp1</td><td>Odp2</td><td>Odp3</td><td>Odp4</td><td>Poprawna odpowiedź</td><td>Ilość poprawnych odpowiedzi</td><td>Ilość niepoprawnych odpowiedzi</td><td></td><td></td></tr>');
            $licznik = 1;
            while($rec=$rs->fetch_array()) {
                $val = "";
                if($rec['dobra_odpowiedz']==$rec['pytanie1']){
                    $val = '<select name="odpowiedz"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
                }
                else if($rec['dobra_odpowiedz']==$rec['pytanie2']){
                    $val = '<select name="odpowiedz"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option></select>';
                }
                else if($rec['dobra_odpowiedz']==$rec['pytanie3']){
                    $val = '<select name="odpowiedz"><option value="1">1</option><option value="2">2</option><option value="3" selected>3</option><option value="4">4</option></select>';
                }
                else if($rec['dobra_odpowiedz']==$rec['pytanie4']){
                    $val = '<select name="odpowiedz"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4" selected>4</option></select>';
                }
                $zle = $rec['wszystkie_odpowiedzi'] - $rec['poprawne_odpowiedzi'];
                echo ('<form method="POST"><input type="hidden" name="login" value="admin"><input type="hidden" name="id" value="'.$rec['id'].'"><input type="hidden" name="funkcja" value="edytuj"><tr><td>'.$rec['id'].'</td><td><input type="text" name="tresc" value="'.$rec['tresc'].'"></td><td><input type="text" name="odp1" value="'.$rec['pytanie1'].'"></td><td><input type="text" name="odp2" value="'.$rec['pytanie2'].'"></td><td><input type="text" name="odp3" value="'.$rec['pytanie3'].'"></td><td><input type="text" name="odp4" value="'.$rec['pytanie4'].'"></td><td>'.$val.'</td><td>'.$rec['poprawne_odpowiedzi'].'</td><td>'.$zle.'</td><td><input type="submit" value="Edytuj"></form></td><td><form method="POST"><input type="hidden" name="login" value="admin"><input type="hidden" name="usun" value="'.$rec['id'].'"><input type="hidden" name="funkcja" value="delete"><input type="submit" value="usun"></form></td></tr>');
                $licznik++;
            }
            echo("</table>");
        }
        echo("<form method='POST'><input type='hidden' name='login' value='admin'><input type='hidden' name='funkcja' value='add'><h1>Dodaj pytanie</h1><table border=1 class='table2'><tr><td>Treść zadania</td><td>Odp1</td><td>Odp2</td><td>Odp3</td><td>Odp4</td><td>Poprawna odpowiedź</td><td></td></tr><tr><td><input type='text' name='tresc'></td><td><input type='text' name='odp1'></td><td><input type='text' name='odp2'></td><td><input type='text' name='odp3'></td><td><input type='text' name='odp4'></td><td><select name='odpowiedz'><option value'1'>1</option><option value'2'>2</option><option value'3'>3</option><option value'4'>4</option></select></td><td><input type='submit' value='dodaj'></td></tr></table></form>");
        echo("<h1>Panel użytkowników</h1><table border=1 class='table3'><tr><td>Użytkownik</td><td>Poprawne odpowiedzi</td><td>Niepoprawne odpowiedzi</td><td></td>");
        $sql='SELECT * FROM users';
        $rs=$conn->query($sql);
        if($rs->num_rows>0) {
            while($rec=$rs->fetch_array()) {
                if($rec['login']!="admin"){
                    $zle = $rec['wszystkie_odpowiedzi'] - $rec['poprawne_odpowiedzi'];
                    echo("<tr><form method='POST'><input type='hidden' name='login' value='admin'><input type='hidden' name='user' value='".$rec['login']."'><input type='hidden' name='funkcja' value='users'><td>".$rec['login']."</td><td>".$rec['poprawne_odpowiedzi']."</td><td>".$zle."</td><td><input type='submit' value='Usuń'></td></form></tr>");
                }
            }
        }
        echo("</table></form>");
        $sql = 'SELECT * , poprawne_odpowiedzi / wszystkie_odpowiedzi AS "srednia" FROM users WHERE NOT wszystkie_odpowiedzi = 0 AND `users`.`login` != "admin" ORDER BY srednia DESC LIMIT 10';
        $rs=$conn->query($sql);
        if($rs->num_rows>0) {
            echo("<h1>Top 10 użytkowników</h1><table border=1 class='table4'><tr><td>Najlepsi użytkownicy</td><td>średnia</td></tr>");
            while($rec=$rs->fetch_array()) {
                echo("<tr><td>".$rec['login']."</td><td>".$rec['srednia']."</td></tr>");
            }
            echo("</table>");
        }
        $sql = 'SELECT * , poprawne_odpowiedzi / wszystkie_odpowiedzi AS "srednia" FROM pytania WHERE NOT wszystkie_odpowiedzi = 0 ORDER BY srednia ASC LIMIT 10';
        $rs=$conn->query($sql);
        if($rs->num_rows>0) {
            echo("<h1>Top 10 najtrudniejszych pytań</h1><table border=1 class='table5'><tr><td>Najtrudniejsze pytania (id)</td><td>średnia</td></tr>");
            while($rec=$rs->fetch_array()) {
                echo("<tr><td>".$rec['id']."</td><td>".$rec['srednia']."</td></tr>");
            }
            echo("</table>");
        }
        echo("</div>");
    }
?>
</body>
</html>