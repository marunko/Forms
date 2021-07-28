 
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Simple Form</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<div> 
			<form action="" method="POST" name="form1">
				<div align="center"><label>The Form</label></div>
				<div>
					<input type="text" name="name">
					<p id="message_name"></p>
				</div>

				<div> 
					<input type="number" name="age">
					<p id="message_age"></p>
				</div>
			<div id="submit"> 
				<input type="submit" name="submit">
			</div>
			</form>
		</div>
		<div id="response">
			
		</div>
		<script type="text/javascript" src="validateSend.js"></script>
	</body>
</html>	 
