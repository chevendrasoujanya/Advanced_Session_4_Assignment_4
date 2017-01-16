// Generic Classes Example
var vehicle = (function () {
    function vehicle() {
    }
    vehicle.prototype.setName = function (name) {
        this.name = name;
    };
    vehicle.prototype.getName = function () {
        console.log("I am from getName() function. and I am " + this.name);
    };
    return vehicle;
}());
var stringObj = new vehicle();
stringObj.setName("Soujanya");
stringObj.getName();
var numberObj = new vehicle();
numberObj.setName(25);
numberObj.getName();
var booleanObj = new vehicle();
booleanObj.setName(true);
booleanObj.getName();
var user = (function () {
    function user(designation) {
        this.designation = designation;
    }
    user.prototype.getDesignation = function () {
        console.log("I am a " + this.designation);
    };
    return user;
}());
var userObj = new user("Software Engineer");
userObj.getDesignation();
