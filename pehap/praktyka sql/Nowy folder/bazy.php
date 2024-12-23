<?php
$conn=@mysqli_connect('localhost', 'root', '','mysql');
if(!$conn) die('Brak połączenia z serwerem');
$sql='SELECT db FROM db';
$result =mysqli_query($conn,$sql);
$rec=mysqli_fetch_array($result);
echo $rec['db'];
mysqli_close($conn);
?>