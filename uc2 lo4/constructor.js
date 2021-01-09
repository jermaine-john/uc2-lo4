// constructor function

var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
    console.log(speed*time);
    }
    this.logDriver=function(){
        console.log("drivers name is "+ this.driver);
    }

}

var myCar = new Car(70, "Ninja man");
var myCar1 = new Car(40, "Humpty Dumpty");
var myCar2 = new Car(10, "Shaun");
var myCar3 = new Car(90, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();
myCar2.logDriver();

   
