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

	$query = 'SELECT Spell, Level, Type,  `Target - Hero All` As Target_All_Heroes, `Target - Hero Enemy` As Target_Enemy_Heroes, 
	`Target - Hexes` As Target_Hexes, `Target - Map` As Target_Map, `Target - Number` As Target_No, `Target - Units All` As Target_All_Units, 
	`Target - Units Ally` As Target_Ally_Units, `Target - Units Enemy` As Target_Enemy_Units, `Target - Units Killed` As Target_Injured_Units,  
	`Target - Undead` As Target_Undead, `Duration - Days` As Duration_Days, `Duration - Rounds` As Duration_Rounds, `Duration - Spell Power` As Duration_Spell_Power, 
	`Action - Randomly Attack Nearest Unit` as Action_Random, `Action - Unit Chosen` as Action_Unit_Chosen, `Damage - Spell` As Damage_Spell, 
	`Damage - Units` As Damage_Units, Defence,  `Hero Enemy - Army Size` As Enemy_Hero_Army_Size, `Hero Enemy - Stats` As Enemy_Hero_Stats, 
	`Immunity - Magic` As `Immunity_Magic`, `Location - Artefacts` as Location_Artefacts, `Location - Heroes` as Location_Heroes, 
	`Location - Mines` as Location_Mines, `Location - Resources` as Location_Resources, `Location - Teleports on Map` as Location_Teleports_Map,
	`Location - Teleports back to Nearest Town` as Location_Teleports_Town, `Location - Town` as Location_Town, `Location - World View` as Location_World, 
	Retaliation, Speed, `Spells - All` As Spells_All, `Spells - Negative` As Spells_Negative, `Summons Boat` As Summons_Boat, 
	`Units - Killed Creature Hit Points` As Units_Injured_Hit_Points, `Units - Move Unoccupied Hex` As Units_Move_Hex,
	`Units - Undead Destroyed Stacks` As Units_Undead FROM spells ORDER BY Level, Spell';

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