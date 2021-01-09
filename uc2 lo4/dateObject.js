//date object
var myDate= new Date();
console.log(myDate);

//year-month-date-hours-minutes-seconds
var myPastDate=new Date(1545,11,2,10,41,30);
console.log(myPastDate);

var birthday=new Date(1985,0,15,11,15,25);
//get month(0-11)
console.log(birthday.getMonth());
//get year(yyyy)
console.log(birthday.getFullYear());
//get date (1-31)
console.log(birthday.getDate());
//get day of the week
console.log(birthday.getDay());
//get hours (0-23)
console.log(birthday.getHours());
//get milliseconds
console.log(birthday.getTime());