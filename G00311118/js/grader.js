function gradeResult() {
	var myResult = parseInt(document.getElementById("value1").value);
	var grade;
	
	if (!myResult){
		alert("Please enter a result");
	}
	else if (myResult <0 || myResult >100){
		alert("Please eneter a number between 0 and 100");
	}
	
	else{
		if (myResult > 90) {
			grade = 'A';
		}else if (myResult > 80) {
			grade = 'B';
		}else if (myResult > 70) {
			grade = 'B-';
		}else if (myResult > 60) {
			grade = 'C';
		}else if (myResult > 50) {
			grade = 'C-';
		}else if (myResult > 40) {
			grade = 'D';
		}else {
			grade = 'F';
		}
		
		var message = 'Your result of ' + myResult + ' gets you a grade ' + grade;
		console.log(message);
		document.getElementById("resultsentence").innerHTML = message;
	}
}