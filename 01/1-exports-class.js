// function (exports, module, require, __filename, __dirname) {
 exports= class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;

        }
        fullname(){
            return `${this.firstName} ${this.lastName}`;
        }
    }
    console.log(exports);
    console.log(module.exports);
// return module.exports
// }