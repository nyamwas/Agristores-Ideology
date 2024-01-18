/**
* 11:30:00
* 11:46:00
*/

class List{
constructor(){
this.id = window.location.href.charAt(24)
this.name = 'admin'
}
}
class Landing extends List{
constructor(){
super()
this.body = document.querySelector("body")
}
}

console.log(new Landing().id)
const form = document.querySelector("form")
form.addEventListener('submit',function arrive(){
let utilization = myObject.area_status / myObject.sim_time
console.log("utilization"+utilization)
return 1
})

var score=0;
var percentage=0;
function onSubmit()
{
	var name=document.getElementById("name").value;
	var e_mail=document.getElementById("e-mail").value;
	
	if(document.getElementById("choice1_1").checked)
		document.getElementById("varError1").innerHTML="correct answer";
		//score=score+1;
	else 
		document.getElementById("varError1").innerHTML="correct answer is (a): The removal of several steps leaving only relevant data";
	if(document.getElementById("choice2_2").checked)
		document.getElementById("varError2").innerHTML="correct answer";
		//score=score+1;
	else
		document.getElementById("varError2").innerHTML="correct answer is (b): Programming where several sub-methods are used to solve a larger problem";
	if(document.getElementById("choice1_3").checked)
		document.getElementById("varError3").innerHTML="correct answer";
		//score=score+1;
	else
		document.getElementById("varError3").innerHTML="correct answer is (a): An instance of a variable";
	if(document.getElementById("choice3_4").checked)
		document.getElementById("varError4").innerHTML="correct answer";
		//score=score+1;
	else
		document.getElementById("varError4").innerHTML="correct answer is (c): Variables and methods are accesible to all methods in the package";
	if(document.getElementById("choice1_5").checked)
		document.getElementById("varError5").innerHTML="correct answer";
		//score=score+1;
	else
		document.getElementById("varError5").innerHTML="correct answer is (a): O(n)";
	
	
	if(document.getElementById("choice1_1").checked)
		score+=1;
	if(document.getElementById("choice2_2").checked)
		score+=1;
	if(document.getElementById("choice1_3").checked)
		score+=1;
	if(document.getElementById("choice3_4").checked)
		score+=1;
	if(document.getElementById("choice1_5").checked)
		score+=1;
	percentage=(score/5)*100
	document.getElementById("score").innerHTML=`Congratulations ${name}: score: (${score}/5) percentage: ${percentage}`;
}
	
