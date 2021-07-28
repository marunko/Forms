var name_valid = false;
var age_valid = false;

function function_name(argument) {
	
}
function reg_expr(arr, exp){
	arr = arr.toLowerCase();
	for (var i = arr.length - 1; i >= 0; i--) {
		if(!arr[i].match(exp)) return false;
	}
	return true;
}

function valid_name(e){

	var text = e.target.value; let exp = /[a-z]/;
		console.log(text);
	if(text.length > 0 && text.length < 30 && reg_expr(text, exp)){
		 
			e.target.style = "border: solid green;";
			document.querySelector('#message_name').innerText = "";
			 name_valid = true;
			
	 
	}
	else{
			e.target.style = "border: solid red;";
			document.querySelector('#message_name').innerText = "Incorrect Name";
			name_valid = false;
		}
	 
}
function valid_age(e){

	var text = e.target.value;console.log(text);
	if(text > 0 && text < 125){

			e.target.style = "border: solid green;";
			age_valid = true;
	}
	else{
			e.target.style = "border: solid red;";
			document.querySelector('#message_age').innerText = "Incorrect Age";
			age_valid = false;
		}
		 
}

function submitter(e) {
    var form = new FormData(document.forms.form1);
	var xml = new XMLHttpRequest();

	xml.open('POST', '/response.php', true);
	 
	xml.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(xml.response);
			let name = res.name[0].toUpperCase() + res.name.slice(1, res.name.length-1);
			document.querySelector('#response').innerHTML =  "<h1>Name: " + name  + "</h1></br>" + "<h1>Age: " + res.age + "</h1>";
			console.log(name.toUpperCase());
		}
	} 
	xml.send(form);
}
 	 

document.forms.form1.name.addEventListener('change', valid_name);
document.forms.form1.age.addEventListener('change', valid_age);

document.forms.form1.submit.addEventListener('click', function(e){
 e.preventDefault();
 if(age_valid && name_valid){
 		submitter();
	}

  else{
  	console.log("wrong data");
  	 valid_age(e);
  	 valid_name(e);
  }
});
