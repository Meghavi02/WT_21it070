console.log("connect...");
'use strict';
let studentobj1 = {
    firstname: "Meghavi",
    lastname: "Lad",
    id: "21it070",
    age: 18,

    getName: function(){
        return `Your name is ${this.firstname} ${this.lastname}`;
    },
};
console.log(studentobj1.getName());