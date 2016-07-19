/*
This is empty on purpose! Your code to build the resume will go here.
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
 

 //Array 

 var skills = ["awesomeness", "programming", "teaching", "JS"];
 
 $("#main").append(skills);

 $("#main").append(skills[0]);

 $("#main").append(skills.length);
 */

/* Code for my resume */

var name = "José Carlos Portugal";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Product Manager, CTO";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

