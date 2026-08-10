var courses = ["html", "css", "js"];
var userInput = prompt("enter your course")?.trim().toLowerCase();

var index = courses.findIndex(item => item === userInput);

if (index !== -1) {
    alert("Index: " + index);
} else {
    courses.push(userInput);
    alert(" ADDED ! " + courses.join(", "));
}