var numStudents = prompt("How many students are learning JavaScript?");
    //var student = {};

var studentArray = [];
var addStudents = function(){
  if (numStudents > 0){
    for (var i = 0; i < numStudents; i++) {
      var student = {};
      student.name = prompt("Student name?");
      student.phoneNumber = prompt("Student phone number?");
      student.city = prompt("Student city?");
        studentArray.push(student);
    }
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
    mentor.name = prompt("Mentor name?");
    mentor.phoneNumber = prompt("Mentor phone number?");
    mentor.city = prompt("Mentor city?");

      mentorArray.push(mentor);
    }
  };
}

addMentors();
console.log(mentorArray);

//var contactList = alert("There are " + numStudents + " students and " + numMentors + " mentors.");

var studentList = ""

for (var i = 0; i < studentArray.length; i++) {
  var list = 'Name: ' + studentArray[i].name + '\nPhone Number: ' + studentArray[i].phoneNumber + '\nCity: ' + studentArray[i].city + '\n\n';

    studentList += (list);

}
alert('There are ' + numStudents + ' students.\n' + studentList);

var mentorList = ""

for (var i = 0; i < mentorArray.length; i++) {
  var mlist = 'Name: ' + mentorArray[i].name + '\nPhone Number: ' + mentorArray[i].phoneNumber + '\nCity: ' + mentorArray[i].city + '\n\n';

    mentorList += (mlist);

}
alert('There are ' + numMentors + ' mentors.\n' + mentorList);

