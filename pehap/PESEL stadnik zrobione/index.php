<?php
	$conn=new mysqli('localhost','root','','test');
	if(!$conn) exit('Błąd połączenia');
  
	$sql=
	'SELECT *
	FROM stacje
	WHERE 1';
	
	$rs=$conn->query($sql) or die('Nie można pobrać rekordów');
	if(isset($_GET['stacja'])){
		echo('<a href="index.php">Powrot</a>');
			
			$sql=
			'SELECT stacje.id_stacji, stacje.nazwa as naz, trasy.nazwa, trasy.dlugosc
			FROM trasy INNER JOIN stacje ON trasy.id_stacji = stacje.id_stacji
			WHERE stacje.id_stacji = '.$_GET['stacja'];
			$rs=$conn->query($sql) or die('Nie można pobrać rekordów');
			if($rs->num_rows>0) {
				
				echo('<table border=1><tr><th>Nazwa</th><th>Dlugosc</th></tr>');
				$i = 0;
				$n = '';
				while($rec=$rs->fetch_array()) {
					if($i == 0) { echo('<br>'.$rec['naz']); $n = $rec['id_stacji']; }
					echo ('<tr><td>'.$rec['nazwa'].'</td><td>'.$rec['dlugosc'].'</td></tr>');
					$i += 1;
				}
				echo('</table>');
				
				echo('<br><b>Oceń stację</b>');
				echo('<form><table border=1>
				<tr><td><input name="ocena" type="number" min="1" max="6"><input type="hidden" name="ocena_stacja" value="'.$n.'"></td>
				<td><button>Wyślij</button></td></tr>
				</table></form>');
			}
	} elseif(isset($_GET['ocena'])) { 
		echo('<a href="index.php">Powrot</a>');
		$sql = 
		"INSERT INTO `oceny` (`id_oceny`, `ocena`, `id_stacji`) 
		VALUES (NULL, ".$_GET['ocena'].", ".$_GET['ocena_stacja'].")";
		$rs=$conn->query($sql) or die('Nie można pobrać rekordów');
		
		$sql =
		'SELECT
		stacje.nazwa,
		( SUM(oceny.ocena) / COUNT(oceny.ocena)) AS "srednia"
		FROM oceny INNER JOIN stacje ON stacje.id_stacji = oceny.id_stacji
		GROUP BY stacje.nazwa
		ORDER BY srednia DESC LIMIT 3';
		$rs=$conn->query($sql) or die('Nie można pobrać rekordów');
		echo('<table border=1><tr><th>nazwa</th><th>średnia</th></tr>');
		while($rec=$rs->fetch_array()) {
			echo ('<tr><td>'.$rec['nazwa'].'</td><td>'.$rec['srednia'].'</td></tr>');
		}
		echo('</table>');
	} else {
		if($rs->num_rows>0) {
			echo '<table border=1><tr><th>ID stacji</th><th>Nazwa stacji</th><th>orczyki</th><th>krzeselka</th><th>gondole/kolejki</th><th>nasniezanie</th><th>oswietlenie</th></tr>';
			while($rec=$rs->fetch_array()) {
				echo '<tr><td>'.$rec['id_stacji'].'</td><td><a href="?stacja='.$rec['id_stacji'].'">'.$rec['nazwa'].'</a></td><td>'.$rec['orczyki'].'</td><td>'.$rec['krzeselka'].'</td><td>'.$rec['gondole/kolejki'].'</td><td>'.$rec['nasniezanie'].'</td><td>'.$rec['oswietlenie'].'</td></tr>';
			}	
			echo "</table>";
		}
	}
?>