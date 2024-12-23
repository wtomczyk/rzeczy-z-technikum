<a href='?zadanie=3' >Zapytanie 3</a>
<a href='?zadanie=4' >Zapytanie 4</a>
<a href='?zadanie=5' >Zapytanie 5</a>
<?php
$conn=@new mysqli('localhost','root','','auta');
if($conn->connect_errno) die("Brak połączenia");
if(isset($_GET['zadanie']) && $_GET['zadanie']==3){
    $i=0;
    $rs=$conn->query('SELECT osoby.imie, osoby.nazwisko, osoby.pesel FROM `osoby` INNER JOIN `auta` ON osoby.pesel = auta.pesel_wlasciciela GROUP BY osoby.nazwisko, osoby.pesel HAVING COUNT(auta.pesel_wlasciciela)>1') or die('Błąd danych');
    if($rs->num_rows>0){
        echo '<table border=1><tr><th>Imie</th><th>Nazwisko</th><th>Pesel</th></tr>';
        while($rec=$rs->fetch_array()){
            if($i%2==0){
                echo '<tr><td>'.$rec['imie'].'</td><td>'.$rec['nazwisko'].'</td><td>'.$rec['pesel'].'</td></tr>';
            }
            else{
                echo '<tr><td><b>'.$rec['imie'].'</b></td><td><b>'.$rec['nazwisko'].'</b></td><td><b>'.$rec['pesel'].'</b></td></tr>';
            }
            $i++;
        }
        echo '</table>';
    }
    else
        echo('Nie ma nic :/');
    $rs->close();
}
if(isset($_GET['zadanie']) && $_GET['zadanie']==4){
    $rs=$conn->query('SELECT osoby.imie, osoby.nazwisko, auta.rok_produkcji FROM `osoby` INNER JOIN `auta` ON osoby.pesel = auta.pesel_wlasciciela WHERE auta.marka = "citroen" ORDER BY auta.rok_produkcji LIMIT 1') or die('Błąd danych');
    if($rs->num_rows>0){
        echo '<table border=1><tr><th>Imie</th><th>Nazwisko</th><th>Rok produkcji</th></tr>';
        while($rec=$rs->fetch_array()){
        echo '<tr><td>'.$rec['imie'].'</td><td>'.$rec['nazwisko'].'</td><td>'.$rec['rok_produkcji'].'</td></tr>';
        }
        echo '</table>';
    }
    else
        echo('Nie ma nic :/');
    $rs->close();
}
if(isset($_GET['zadanie']) && $_GET['zadanie']==5){
    $conn->query('UPDATE `osoby`,`auta` SET auta.pesel_wlasciciela = osoby.pesel WHERE auta.rejestracja = "KR21004" AND osoby.imie = "Karol" AND osoby.nazwisko = "Hubicki"') or die('Błąd danych');
    echo '<br/>Wykonano Update!';
}

$conn->close();
?>