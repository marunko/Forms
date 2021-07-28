 
<?php 
	$name = $_POST['name'];
	$age = $_POST['age'];

	$data = array('name' => $name, 'age' => $age);
	
//	header('Content-type: application/json');
	echo json_encode( $data );
	//echo $name, $age;
	 
?>
