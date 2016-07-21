/*Quiz

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s[1].toUpperCase() + s.slice(2);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

Array

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

Array Strings

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}
*/

 // $("#main").append(["José Carlos Portugal"]);

 
 /* Testes
 var email = "jcpleite@hotmail.com";

 var newEmail = email.replace("hotmail", "gmail");

 console.log(email);

 console.log(newEmail);

 //Replace 

 var awesomeThoughts = 
 	 	"I am José Carlos and I am AWESOME!";

 var funThoughts = 
 		awesomeThoughts.replace("AWESOME","FUN");

 $("#main").append(funThoughts);

 console.log(awesomeThoughts); 
 
*/
 //Array 
/*
 var skills = ["awesomeness", "programming", "teaching", "JS"];
 
 $("#main").append(skills);

 $("#main").append(skills[0]);

 $("#main").append(skills.length); 
*/
/*
 //Object

 var bio = {
	 "name": "José Carlos Portugal",
	 "role": "Product Manager - CTO",
	 "contacts": {
	 	"mobile": "+55 11 991942063",
	 	"email": "jcpleite@gmail.com",
	 	"github": "jcpleite",
	 	"twitter": "@jcpfleite",
	 	"location": "São Paulo",
	 }, 
	 "welcomeMessage" : "Engineer, Executive MBA for BSP - Business School São Paulo, extension in Suffolk University in Leadership, experience in the Internet Industry.",
	 "skills": ["Agile", "Programming", "Git and Github", "JS"],
	 "bioPic" : "images/JC.jpg"
	}

 $("#main").append(bio.name);
 $("#main").append(bio.role);
 $("#main").append(bio.bioPic);
 $("#main").append(bio.age);
 $("#main").append(bio.welcomeMessage);
 $("#main").append(bio.skills);
 */
/*
 //Object Sintex

 var work = {};
 work.position = "CTO";
 work.employer = "Evino";
 work.months = 5;

 var education = {};
 education["name"] = "BSP Business School São Paulo";
 education["years"] = "2013-2015";
 education["city"] = "São Paulo, SP, Brasil";

 $("#main").append(work["position"]);
 $("#main").append(education.name);
 */
/*
 //JSON

 var education = {
	"Formação acadêmica": [{
		"instituição de ensino": "BSP - Business School São Paulo",
		"localidade": "São Paulo, SP",
		"formação": "Executive Master of Business Administration (EMBA)",
		"ano de formação": 2015
	}, {
		"instituição de ensino": "Centro Universitário Nove de Julho",
		"localidade": "São Paulo, SP",
		"formação": "Engineer, Production Engineering",
		"ano de formação": 2010
	}]
}
*/


