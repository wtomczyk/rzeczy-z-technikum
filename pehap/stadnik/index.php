<?php
$conn = new mysqli('localhost', 'root', '', '');
if ($conn->connect_errno) die ('Brak połączenia');


if (isset($_GET['zaglosowane'])) {
	$rs = $conn->query('INSERT INTO `oceny`(`ocena`, `id_stacji`) VALUES ('.$_GET['ocena'].','.$_GET['id_stacji'].')')
	or die('Błędne dane');
}


$rs = $conn->query('SELECT id_stacji,nazwa,orczyki,krzeselka,`gondole/kolejki`,nasniezanie,oswietlenie FROM stacje')
	or die('Błąd pobierania danych');
	
if ($rs -> num_rows > 0) {
	echo '<table border=1><tr><th>Nazwa</th><th>Orczyki</th><th>Krzesełka</th><th>Gondole/Kolejki</th><th>Naśnieżanie</th><th>Oświetlenie</th></tr>';
	while ($rec = $rs->fetch_array()) {
        echo "<form><input type='hidden' name='id_stacji' value='".$rec["id_stacji"]."'><tr>
		<td> <a href=\"?stacja=".$rec["id_stacji"]."\">".$rec["nazwa"]."</a></td>
        <td>".$rec["orczyki"]."</td>
        <td>".$rec["krzeselka"]."</td>
        <td>".$rec["gondole/kolejki"]."</td>
        <td>".$rec["nasniezanie"]."</td>
        <td>".$rec["oswietlenie"]."</td>
        </tr> </form>";
	}
	echo '</table>';
}
$rs->close();


if (isset($_GET['stacja'])) {
	$rs = $conn->query('SELECT `trasy`.`nazwa`, `trasy`.`dlugosc` FROM `stacje` INNER JOIN `trasy` ON `stacje`.`id_stacji` = `trasy`.`id_stacji` WHERE `trasy`.`id_stacji` = '.$_GET['stacja'])
	or die('Błąd pobierania danych');
	if ($rs -> num_rows > 0) {
		echo '<br><table border=1><tr><th>Nazwa Trasy</th><th>Długość</th></tr>';
		while ($rec = $rs->fetch_array()) {
			echo "<form><tr>
			<td>".$rec["nazwa"]."</td>
			<td>".$rec["dlugosc"]."</td>
			</tr></form>";
		}
		echo '</table>';
	}
	$rs->close();
}


$rs = $conn->query('SELECT id_stacji,nazwa FROM stacje')
	or die('Błąd pobierania danych');
	
if ($rs -> num_rows > 0) {
	echo '<h3>Głosowanie na stacje:</h3><table border=1>
	<tr><th>Stacja</th><th>Ocena</th><th>Zagłosuj</th></tr>
	<tr><form><td><select name="id_stacji">';
	while ($rec = $rs->fetch_array()) {
        echo '<option value="'.$rec["id_stacji"].'">'.$rec["nazwa"].'</option>';
	}
	echo '</select></td>
	<td><select name="ocena">
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	</select></td>
	<td><input type="submit" name="zaglosowane" value="Zagłosuj"/></td></tr>
	</form></table>';
}
$rs->close();

if (isset($_GET['zaglosowane'])) {
	$rs = $conn->query('SELECT `stacje`.`nazwa`, AVG(`oceny`.`ocena`) AS "srednia" FROM `oceny` INNER JOIN `stacje` ON `oceny`.`id_stacji` = `stacje`.`id_stacji` GROUP BY `oceny`.`id_stacji` ORDER BY AVG(`oceny`.`ocena`) DESC LIMIT 3')
		or die('Błąd pobierania danych');
		
	if ($rs -> num_rows > 0) {
		echo '<h3>Najlepiej oceniane stacje:</h3><table border=1>
		<tr><th>Stacja</th><th>Średnia Ocen</th></tr>';
		while ($rec = $rs->fetch_array()) {
			echo "<tr>
			<td>".$rec["nazwa"]."</td>
			<td>".$rec["srednia"]."</td>
			</tr>";
		}
		echo '</table>';
	}
	$rs->close();
}


$conn->close();
?>