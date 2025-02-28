let person = {
    name: "John",
    email: "john@wick.com",
    age: 45,
    count: 0,
    status: true,
    array: ["reading", "writing", 10, null, true],
    login: function () {
    console.log("login", this);
},
    logout: () => {
    console.log("logout", this);
},
    nameFunction() {
    return this.name;
},
    updateCount() {
    this.count++;
},
 };
    
    person.login();
    person.logout();
    console.log("outside", this);
    // ES6 Class keyword
    // ES5 Prototypes
    
    // console.log({ name: 'Audi'});
    
    class Person{
    constructor(name= 'Jon Doe', email='john@doe.com', count=0){
    this.name = name;
    this.email = email;
    this.count = count;
    }
    login(){
    console.log(this.name, 'has logged in!')
    }
    logout(){
    console.log(this.name, 'has logged out!')
    }
    }
    
// new keyword:creating an instance of Person class
    let person1 = new Person('John', 'john@wick.com');
    let person2 = new Person('Jay', 'jay@z.com');
    let person3 = new Person('Jake', 'jake@tyler.com', 20);
    
    person1.login();
    person2.login();
    console.log(typeof person3);
    
// Number  
    let rollNo = new Number(10);
    console.log(typeof rollNo, typeof 10);
    
    let nm = new String('Nithin');
    console.log(nm.toUpperCase());
    
    let obj = new Object({name: 'Manas'});
    console.log(obj);  
//Objects
// let obj = { name: "Cipher" }
// console.log(obj);  
    let personOne ={
    name: 'John',
    email: 'john@wick.com',
    count: 0,
    age: 45,
    status: true, 
    children: {
    name: 'Jay'
    },  
    hobbies: ['Reading', 'Writing', true, 100, null], // Array,
    login(){
// console.log(this)
    console.log( this.name, 'has logged in');
    return this;
    },
    logout(){
    console.log('Logout', this.login());
    },
    updateLogin(){
    this.count++;
    console.log(this.count);
    return this;
    },
    } 
    person.test();
    person.login(); // Method
    
    console.log('hello'.toUpperCase());
    
    console.log(this);
    
    // Method chaining
    person.login().updateLogin().updateLogin().logout();
    // .logout();
    console.log(person.count);