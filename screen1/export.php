<?php
$startdate = $_POST['start'];
$enddate = $_POST['end'];
$substation = $_POST['substation'];

// $startdate = str_replace("-", "", $startdate);
// $enddate = str_replace("-", "", $enddate);

$conn = new mysqli('localhost','root','','apdcl');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	}
  
$sql="SELECT * FROM mft WHERE time BETWEEN '".$startdate."' AND '".$enddate."' AND feeder LIKE '%".$substation."%'";
$result = mysqli_query($conn,$sql);

$filename = "Data from $startdate to $enddate of $substation.csv";
header("Content-type: text/csv");
header("Content-Disposition: attachment; filename=$filename");
$output=fopen("php://output", "w");

$header = array("id", "feeder", "time", "VOL_R_Y", "VOL_Y_B", "VOL_B_R", "AMP_L1", "AMP_L2", "AMP_L3", "MW", "MVAR", "PF", "FREQUENCY", "KWH", "time_calc");

fputcsv($output, $header);
foreach($result as $row)
{
	fputcsv($output, $row);
}
fclose($output);
?>