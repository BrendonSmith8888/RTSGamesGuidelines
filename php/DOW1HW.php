<?php
	header('Content-Type: application/json; charset=UTF-8');
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

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

	$query = 'SELECT `Faction`, `Heavy Weapon` As HeavyWeapon, `Unit 1` As Unit1, `Unit 2` As Unit2, `Unit 3` As Unit3, 
	`Cost Requisition` As CostRequisition,  `Cost Power` As CostPower, `Damage Melee Min` As DamageMeleeMin, `Damage Melee Max` As DamageMeleeMax,  
	`Damage Range Min` As DamageRangeMin, `Damage Range Max` As DamageRangeMax, `Range Long` As RangeLong, `Range Medium` As RangeMedium, 
	`Range Short` As RangeShort, `Effective Against Buildings` As EffectiveAgainstBuildings, `Effective Against Heavy Infantry` As EffectiveAgainstHeavyInfantry, 
	`Effective Against Infantry` As EffectiveAgainstInfantry, `Effective Against Morale` As EffectiveAgainstMorale, 
	`Effective Against Vehicles` As EffectiveAgainstVehicles, `Required Building 1` As RequiredBuilding1, `Required Building 2` As RequiredBuilding2, 
	`Required Cost Ork Supply` As RequiredCostOrkSupply, `Required Technologies` As RequiredTechnologies
	FROM heavyweapons ORDER BY `Faction`, `HeavyWeapon`';

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