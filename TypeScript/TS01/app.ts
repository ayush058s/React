/*
tsc i typescript -g => installs ts globally in ur laptop
tsc --init => makes config file
tsc app.ts => to run
tsc app.ts --watch => live edits
npm 
*/


// interfaces

interface User {
    name: string,
    email: string,
    age?: number
}
interface Admin extends User{
    admin: boolean
}

function setAdmin(obj: Admin){
    obj.name = "Ayush";
    obj.admin = true;
    return obj;
}

const adminUser: Admin = {
    name: "Rahul",
    email: "rahul@example.com",
    admin: false
};

console.log(setAdmin(adminUser));


// class and objects

class AnimalType1{
    public color;
    public age;
    public city;

    constructor(color: string, age?: number, city: string = "Kanpur"){
        this.color = color;
        this.age = age;
        this.city = city;

    }
}

// constructor can be made in both ways 

class AnimalType2{
    constructor(public type: string, public color: string, public age: number, public city: string){

    }
}

let dog = new AnimalType1("wild");
let cat = new AnimalType2("wild", "red", 99, "Kanpur");

// private => variables accessable inside that class not even the class that extends it
// public => variables accessable everywhere
// protected => variables accessable inside that class and the classes that extends it

// if you want that the value of variable should not change => use "readonly" after  access modifiers
class Box{
    constructor(public readonly type: string, public color: string){

    }

    changeValue(){
        // this.type = "domestic"; // as it readonly it will through error
        this.color ="black";
    }
}

let box1 = new Box("pencil", "red");
box1.changeValue();
let box2 = new Box("tiffin", "red");

// getter and setter

class login{
    constructor(public userName: string, public password: string){

    }
    // getName(){
    //     return this.userName;
    // }
    // setName(name: string){
    //     this.userName =  name;
    // }

    // if do not want to call function there is other way

    get name(){
        return this.userName;
    }

    set name(name: string){
        this.userName = name;
    }
    
}

let  user1 = new login("shivam", "1234@");