<?php
	header('Content-Type: application/json; charset=UTF-8');
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("confighomm.php");

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];
		mysqli_close($conn);
		echo json_encode($output);
		exit;
	}	

	$query = 'SELECT Faction, Class, Unit,  `Cost - Crystal` As Cost_Crystal, `Cost - Gem` As Cost_Gem, `Cost - Gold` As Cost_Gold,
	`Cost - Mercury` As Cost_Mercury, `Cost - Sulphur` As Cost_Sulphur, `Cost - Wood` As Cost_Wood, Population, Attack, Defence, Shots, 
	`Damage - Min` As Damage_Min, `Damage - Max` As Damage_Max, `Hit Points` As Hit_Points, `Speed - Turn` As Speed_Turn, 
	`Speed - Fly` As Speed_Fly, Morale, Luck, Tier, `Specialty - Attacks Adjacent` As Attacks_Adjacent, 
	`Specialty - Attacks Chance of Halving Unit Stack` As Attacks_Halved, `Specialty - Attacks Hex` As Attacks_Hex, 
	`Specialty - Attacks Twice` As Attacks_Twice, `Specialty - Chance of Blinding` As Blind, `Specialty - Enemy Cannot Retaliate` As `Enemy_Retaliate`, 
	`Specialty - Killed Unit Joins Ghost Stack` As `Attacks_Ghost`, `Specialty - Magic Resistance` As Magic_Resistance,
	`Specialty - Chance of Paralyse` as Paralyse, `Specialty - Regenerates` as Regenerates, `Specialty - Unlimited Retaliation` as Unlimited_Retaliation
	 FROM units ORDER BY Class, Unit';

	$result = $conn->query($query);
	
	if (!$result) {
		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];
		mysqli_close($conn);
		echo json_encode($output); 
		exit;
	}
   
   	$data = [];

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($data, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $data;
	
	mysqli_close($conn);

	echo json_encode($output); 

?>