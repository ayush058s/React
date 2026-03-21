/*
tsc i typescript -g => installs ts globally in ur laptop
tsc --init => makes config file
tsc app.ts => to run
tsc app.ts --watch => live edits
npm
*/
function setAdmin(obj) {
    obj.name = "Ayush";
    obj.admin = true;
    return obj;
}
var adminUser = {
    name: "Rahul",
    email: "rahul@example.com",
    admin: false
};
console.log(setAdmin(adminUser));
// class and objects
var AnimalType1 = /** @class */ (function () {
    function AnimalType1(color, age, city) {
        if (city === void 0) { city = "Kanpur"; }
        this.color = color;
        this.age = age;
        this.city = city;
    }
    return AnimalType1;
}());
// constructor can be made in both ways 
var AnimalType2 = /** @class */ (function () {
    function AnimalType2(type, color, age, city) {
        this.type = type;
        this.color = color;
        this.age = age;
        this.city = city;
    }
    return AnimalType2;
}());
var dog = new AnimalType1("wild");
var cat = new AnimalType2("wild", "red", 99, "Kanpur");
// private => variables accessable inside that class not even the class that extends it
// public => variables accessable everywhere
// protected => variables accessable inside that class and the classes that extends it
// if you want that the value of variable should not change => use "readonly" after  access modifiers
var Box = /** @class */ (function () {
    function Box(type, color) {
        this.type = type;
        this.color = color;
    }
    Box.prototype.changeValue = function () {
        // this.type = "domestic"; // as it readonly it will through error
        this.color = "black";
    };
    return Box;
}());
var box1 = new Box("pencil", "red");
box1.changeValue();
var box2 = new Box("tiffin", "red");
// getter and setter
var login = /** @class */ (function () {
    function login(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    Object.defineProperty(login.prototype, "name", {
        // getName(){
        //     return this.userName;
        // }
        // setName(name: string){
        //     this.userName =  name;
        // }
        // if do not want to call function there is other way
        get: function () {
            return this.userName;
        },
        set: function (name) {
            this.userName = name;
        },
        enumerable: false,
        configurable: true
    });
    return login;
}());
var user1 = new login("shivam", "1234@");
