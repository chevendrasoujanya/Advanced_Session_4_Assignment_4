// Generic Classes Example
class vehicle<T> {
    public name: T;
    setName(name:T):void {
        this.name = name;
    }

    getName():void {
        console.log(`I am from getName() function. and I am ${this.name}`);
    }
}

let stringObj = new vehicle<string>();
stringObj.setName("Soujanya");
stringObj.getName();

let numberObj = new vehicle<number>();
numberObj.setName(25);
numberObj.getName();

let booleanObj = new vehicle<boolean>();
booleanObj.setName(true);
booleanObj.getName();

// Generic Interfaces Example
interface iUser {
    getDesignation(): void;
}

class user<T> implements iUser {
    designation: T;        
    constructor(designation: T) {
        this.designation = designation;
    }

    getDesignation(): void {
        console.log(`I am a ${this.designation}`);
    }
}

let userObj = new user("Software Engineer");
userObj.getDesignation();

