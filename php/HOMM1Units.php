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

	$query = 'SELECT Faction, Class, Buildings,  `Cost - Gold` As Cost_Gold, `Cost - Wood` As Cost_Wood, `Cost - Ore` As Cost_Ore,
	`Cost - Crystal` As Cost_Crystal, `Cost - Gems` As Cost_Gems, `Cost - Mercury` As Cost_Mercury, `Cost - Sulphur` As Cost_Sulphur,
	`Reveals Ancient Map` as Reveals_Ancient_Map, Artefacts,  Experience, `Income - Crystal` As Income_Crystal, `Income - Gems` As Income_Gems, 
	`Income - Gold` As `Income_Gold`, `Income - Mercury` As Income_Mercury, `Income - Ore` As Income_Ore, `Income - Sulphur` As Income_Sulphur,
	`Income - Wood` As `Income_Wood`, Luck,  Morale, `Movement - Sea` as `Movement_Sea`, `Pay Freedom` As `Pay_Freedom`, Population, `Player Rankings` As Player_Rankings,
	`Required Buildings 1` as `Required_Buildings1`, `Required Buildings 2` as `Required_Buildings2`, `Spells - Level 1` as Spells_L1,
	`Spells - Level 2` as Spells_L2, `Spells - Level 3` as Spells_L3, `Spells - Level 4` as Spells_L4, `Transports to Different Location` As Transports_to_Different_Location,
	`Units - Recruitment` As Units_Recruitment FROM buildings ORDER BY Class, Buildings';

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