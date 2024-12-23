<?php
$conn = @new mysqli('localhost', 'root', '', 'kantor');
// local host, login, hasło, baza danych
if($conn->connect_errno) die('Nie można połączyć się z serwerem');
$rs=$conn->query('SELECT * FROM kursy LEFT JOIN waluty ON kursy.id_waluta = waluty.id_waluta WHERE kursy.data = "2019-10-27"');
echo '<table border="1"><tr><td>Nazwa</td><td>Skrót</td><td>Skup</td><td>Sprzedaż</td></tr>';
while($rec=$rs->fetch_array())
	echo '<tr><td>',$rec['nazwa'],'</td><td>',$rec['skrot'],'</td><td>',$rec['skup'],'</td><td>',$rec['sprzedaz'],'</td></tr>';
$rs->close();
echo '</table>';
?>
