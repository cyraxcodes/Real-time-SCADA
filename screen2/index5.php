<?php
$conn = new mysqli('localhost', 'root', '', 'apdcl');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
}

// $feeder_name=array("MS_ROAD","AT_ROAD", "LAKHTOKIA", "FANCY_BAZAR", "JAIL", "STATION")

$sql1 = "SELECT * FROM mft WHERE feeder LIKE '%JAIL%' ORDER BY time_calc DESC";
$sql2 = "SELECT * FROM fancy_bazaar WHERE feeder LIKE '%JAIL%' ORDER BY open_time DESC";

$result1 = mysqli_query($conn, $sql1);
$result2 = mysqli_query($conn, $sql2);

while ($row1 = mysqli_fetch_array($result1)) {
    echo "<div id='index5'>
    <span>Voltage R_Y: " . $row1['VOL_R_Y'] . "</span><br>
<span>Voltage Y_B: " . $row1['VOL_Y_B'] . "</span><br>
<span>Voltage B_R: " . $row1['VOL_B_R'] . "</span><br>
<span>Ampere L_1: " . $row1['AMP_L1'] . "</span><br>
<span>Ampere L_2: " . $row1['AMP_L2'] . "</span><br>
<span>Ampere L_3: " . $row1['AMP_L3'] . "</span><br>
<span>PF: " . $row1['PF'] . "</span><br>
<span>MW: " . $row1['MW'] . "</span><br>";
	break;
}
while ($row2 = mysqli_fetch_array($result2)) {
	echo "<span>Open time: " . $row2['open_time'] . "</span><br>
<span>Close time: " . $row2['close_time'] . "</span><br>
    <span  id='status5' hidden>Status:" . $row2['status'] . "</span><br>
    </div>";
    break;
}
mysqli_close($conn);
?>