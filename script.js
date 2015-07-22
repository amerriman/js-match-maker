var numStudents = prompt("How many students are learning JavaScript?");

var studentArray = [];
var addStudents = function(){
  if (numStudents > 0){
    for (var i = 0; i < numStudents; i++) {
    var student = {};
      student.name = prompt("Student name?");
      student.phoneNumber = prompt("Student phone number?");
      student.city = prompt("Student city");

        studentArray.push(student);
    }  //return student;
  }
};

addStudents();
console.log(studentArray);

var numMentors = prompt("How many Mentors are available?");
  if (numMentors > 0){

var mentorArray = [];
var addMentors = function(){
  for (var i = 0; i < numMentors; i++) {
  var mentor = {};
    mentor.Name = prompt("Mentor name?");
    mentor.PhoneNumber = prompt("Mentor phone number?");
    mentor.City = prompt("Mentor city");

      mentorArray.push(mentor);
    }  //return student;
  };
}

addMentors();
console.log(mentorArray);
