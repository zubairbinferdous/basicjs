var student = {id:120, phone:0162010, name:'abir'};
var student2 = {id:145, phone:0160244, name:'himahi'};
var student3 = {id:185, phone:01878950555, name:'himahi'};

var phoneNo1=student2.phone;
var phoneNo2=student['phone'];

var phoneVar = "phone";
var phoneNo3 =student3[phoneVar];

console.log(phoneNo1);
console.log(phoneNo2);
console.log(phoneNo3);