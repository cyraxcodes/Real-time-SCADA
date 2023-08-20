<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>

<?php
$q = $_GET['q'];

$conn = new mysqli('localhost','root','','apdcl');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} 
  
$sql="SELECT * FROM mft WHERE feeder = '".$q."' ORDER BY time DESC";
$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($result)){
echo "<div class='date' style='position: fixed; top: 210px; left: 1250px;'>
Date: ".$row['time_calc']."
</div>
</div>";
echo "<div class='table'>
<table>
  <tr>
    <th>Voltage</th>
    <th>Ampere</th>
    <th>Power Factor</th>
    <th>Megawatt(s)</th>
    <div class='v-line'></div>
  </tr>";
  echo "<tr>";
  echo "<td id='vol'>" . $row['VOL_R_Y'] . "</td>";
  echo "<div class='voltage-info'>
  <p>Voltage R_Y: ".$row['VOL_R_Y']."</p>
  <p>Voltage Y_B: ".$row['VOL_Y_B']."</p>
  <p>Voltage B_R: ".$row['VOL_B_R']."</p>
</div>";
  echo "<td id='amp'>" . $row['AMP_L1'] . "</td>";
  echo "<div class='current-info'>
  <p>Ampere L1: ".$row['AMP_L1']."</p>
  <p>Ampere L2: ".$row['AMP_L2']."</p>
  <p>Ampere L3: ".$row['AMP_L3']."</p>
</div>";
  echo "<td id='pf'>" . $row['PF'] . "</td>";
  echo "<td id='mw'>" . $row['MW'] . "</td>";
  echo "</tr>";
  break;
}
echo "</table>";
echo "</div>";
mysqli_close($conn);
?>
</body>

</html>