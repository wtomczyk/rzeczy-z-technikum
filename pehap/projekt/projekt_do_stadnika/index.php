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
        
        $conn=new mysqli('localhost','root','','wtomczyk');
        session_start();
        if(isset($_POST['login']) && isset($_POST['haslo'])){
            if($_POST['login'] == "admin" && $_POST['haslo'] == "admin"){
                echo("git");
                //strona
                $_SESSION['login'] = 'admin';
                header("Location: admin.php?".$_SERVER['QUERY_STRING']);
                die();
            }
            else if(strlen($_POST['login']) < 6 || strlen($_POST['haslo']) < 6){
                echo('<form method="POST"><input type="text" name="login"><br><input type="text" name="haslo"><br><input type="submit" value="czyń"><br></form><br>Niepoprawny login lub hasło'); 
            }
            else{
                $sprawdzenie = true;
                $sql='SELECT * FROM users';
                $rs=$conn->query($sql);
                if($rs->num_rows>0) {
                    while($rec=$rs->fetch_array()) {
                        if($_POST['login'] == $rec['login']){
                            $sprawdzenie = false;
                            $pass = md5($_POST['haslo']);
                            if($rec['password']==$pass){
                                $_SESSION['login'] = $_POST['login'];
                                header("Location: user.php?".$_SERVER['QUERY_STRING']);
                                die();
                            }
                            else{
                                echo('<form method="POST"><input type="text" name="login"><br><input type="text" name="haslo"><br><input type="submit" value="czyń"><br></form><br>złe hasło');
                            }
                        }
                    }
                }
                if($sprawdzenie){
                    $pass = md5($_POST['haslo']);
                    $sql = "INSERT INTO users (login, password) VALUES ('".$_POST["login"]."','".$pass."')";
                    $rs=$conn->query($sql);
                    $_SESSION['login'] = $_POST['login'];
                    header("Location: user.php?".$_SERVER['QUERY_STRING']);
                    die();
                }
            }
        }
        else{
           echo('<form method="POST"><div class="start"><p>Login: <input type="text" name="login"></p><p>Hasło: <input type="text" name="haslo"></p><input type="submit" class="log" value="Zaloguj się/zarejestruj się"><br></div></form>'); 
        }
    ?>   
</body>
</html>