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

	$query = 'SELECT Artefact, Attack, `Catapult - Fires Twice` as `Catapult_Fires_Twice`,  Defence,  Knowledge,
	Luck,  Morale, `Movement - Land` as `Movement_Land`,  `Movement - Sea` as `Movement_Sea`,  
	`Resource - Gold` as `Resource_Gold`, Spellpower FROM artefacts ORDER BY `Artefact`';

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