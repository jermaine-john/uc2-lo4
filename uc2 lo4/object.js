//object

var myCar=new Object();
myCar.maxSpeed=50;
myCar.driver="shaun";
myCar.drive=function(){
    console.log("now");};
myCar.drive();


var myCar2={
    maxSpeed:70,
    driver:"maine",
    drive:function(speed,time){
    console.log("now driving "+ speed*time);
   
}
};
console.log(myCar2.maxSpeed);
myCar2.drive(50,3);





