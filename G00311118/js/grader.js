function gradeResult() {
	var myEnglishResult = parseInt(document.getElementById("value-english").value);
	var myIrishResult = parseInt(document.getElementById("value-irish").value);
	var englishGrade, irishGrade;
	
	if (!myEnglishResult){
		alert("Please enter a result");
	}
	else if (myEnglishResult <0 || myEnglishResult >100){
		alert("Please eneter a number between 0 and 100");
	}
	
	else{
		if (myEnglishResult > 90) {
			englishGrade= 'A';
		}else if (myEnglishResult > 80) {
			englishGrade = 'B';
		}else if (myEnglishResult > 70) {
			englishGrade = 'B-';
		}else if (myEnglishResult > 60) {
			englishGrade = 'C';
		}else if (myEnglishResult > 50) {
			englishGrade = 'C-';
		}else if (myEnglishResult > 40) {
			englishGrade = 'D';
		}else {
			englishGrade = 'F';
		}
		
		var message = 'Your English result of ' + myEnglishResult + ' gets you a grade ' + englishGrade;
		console.log(message);
		document.getElementById("Englishresultsentence").innerHTML = message;
	}
		
		
		
		if (!myIrishResult){
		alert("Please enter a result");
	}
	else if (myIrishResult <0 || myIrishResult >100){
		alert("Please eneter a number between 0 and 100");
	}
	
	else{
		if (myIrishResult > 90) {
			Irishgrade= 'A';
		}else if (myIrishResult > 80) {
			Irishgrade = 'B';
		}else if (myIrishResult > 70) {
			Irishgrade = 'B-';
		}else if (myIrishResult > 60) {
			Irishgrade = 'C';
		}else if (myIrishResult > 50) {
			Irishgrade = 'C-';
		}else if (myIrishResult > 40) {
			Irishgrade = 'D';
		}else {
			Irishgrade = 'F';
		}
		
		
		
		
		var message = 'Your Irish result of ' + myIrishResult + ' gets you a grade ' + Irishgrade;
		console.log(message);
		document.getElementById("Irishresultsentence").innerHTML = message;
	}
}
