<?php

$servername = "mysql.zzz.com.ua";
$database = "rubens31";
$username = "rubens31";
$password = "Aaron2019";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
  
/*echo "Connected successfully";*/

?>



<!DOCTYPE HTML>

<html>
<head>
	<title>Мои тесты с PHP</title>
	<link href="css.css" rel="stylesheet">
	<meta charset="utf-8">
	<style type="text/css"> 
.mes{
	color: red
}
#rr{
	color: black;
	font-weight: bold;
}
#rr2{
	color: blue
}
#dd{
	color: green
}
</style>

</head>
<body>
	<div class="box">
		<a id=main href="index.html">Главная</a>
<h1>Стена для сообщений</h1>
<p>Здесь можно написать что вы думаете о моей программе или просто поздороваться)</p>
<form method="post" action="wall2.php">
	<label>Имя</label>
<input style="width: 100px" type="text" name="name">
<label>Сообщение</label>
<input type="text" name="text">
<input type="hidden" name="date" value="<?php echo date('d-m-Y');?>">
<input  type="submit" value="Отправить" name="">
</form>
</div>

<div class="mes">
	<?

$name = $_POST['name'];
$text = $_POST['text'];
$date = $_POST['date'];

      
	$result = "INSERT INTO user (name,tx,dt) VALUES ('$name','$text','$date')";
	/*if ($result == true){
	echo "Информация занесена в базу данных";
}else{
	echo "Информация не занесена в базу данных";
}*/ 
if (mysqli_query($conn, $result)) {}

?>
	</div>

<div class="mes"><hr>
	
		
		<?php /*
$result = mysql_query('SELECT * FROM user'); // запрос на выборку

$row = mysql_fetch_array($result);
echo $POST['name'];
echo $POST['tx'];*/

  $sql = mysqli_query($conn, 'SELECT  name, tx,dt FROM user');
  while ($result = mysqli_fetch_array($sql))
   {
    echo "<div class=message><p id=rr>{$result['name']}</p><p id =rr2>{$result['tx']}</p><p id =dd>{$result['dt']}</p></div>";
  }
  mysqli_close($conn);
 ?>


</div>
<script type="text/javascript">
	
</script>
</body>
</html>
