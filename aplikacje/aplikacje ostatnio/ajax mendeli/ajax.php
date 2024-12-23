<?php
//echo $_POST['imie']; // $_GET
//print_r($_POST);
//var_dump($_POST);
//echo json_encode($_POST);
 
include("passwd.php");
    $dbh = new PDO($dsn, $user, $passwd);
    $dbh->exec("set names utf8");
    if(isset($_POST['f']) && $_POST['f']=="add"){
    // select count(*) from passwd where login='   ' or 1=1 --     ' and passwd=''
        $sth = $dbh->prepare("insert into baza (ikona,nominal,kategoria,stop,rok) values(:ikona,:nominal,:kategoria,:stop,:rok)");
                $sth->bindValue(':ikona', rawurldecode($_POST['ikona']), PDO::PARAM_STR);
                $sth->bindValue(':nominal', rawurldecode($_POST['nominal']), PDO::PARAM_STR);
                $sth->bindValue(':kategoria', rawurldecode($_POST['kategoria']), PDO::PARAM_STR);
                $sth->bindValue(':stop', rawurldecode($_POST['stop']), PDO::PARAM_STR);
                $sth->bindValue(':rok', rawurldecode($_POST['rok']), PDO::PARAM_STR);
                $sth->execute();
    }elseif(isset($_POST['f']) && $_POST['f']=="get"){
        $sth = $dbh->prepare("select * from baza");
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
    elseif(isset($_POST['f']) && $_POST['f']=="update"){
        // select count(*) from passwd where login='   ' or 1=1 --     ' and passwd=''
        $sth = $dbh->prepare("update baza set ikona=:ikona, nominal=:nominal, kategoria=:kategoria, stop=:stop, rok=:rok WHERE id=:id");
                $sth->bindValue(':ikona', rawurldecode($_POST['ikona']), PDO::PARAM_STR);
                $sth->bindValue(':nominal', rawurldecode($_POST['nominal']), PDO::PARAM_STR);
                $sth->bindValue(':kategoria', rawurldecode($_POST['kategoria']), PDO::PARAM_STR);
                $sth->bindValue(':stop', rawurldecode($_POST['stop']), PDO::PARAM_STR);
                $sth->bindValue(':rok', rawurldecode($_POST['rok']), PDO::PARAM_STR);
                $sth->bindValue(':id', rawurldecode($_POST['id']), PDO::PARAM_STR);
                $sth->execute();
    }
    elseif(isset($_POST['f']) && $_POST['f']=="delet"){
        $sth = $dbh->prepare("delete from baza where id=:id");
        $sth->bindValue(':id', rawurldecode($_POST['id']), PDO::PARAM_STR);
        $sth->execute();
    }
?>