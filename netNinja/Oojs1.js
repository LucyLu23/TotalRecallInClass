//Lesson 1
console.log('Lesson 1');
var names = ['rose', 'trees',23, {}];
names.length;
console.log(names.length);
var nameslength = names.length;
console.log(nameslength);
console.log(names.sort());
console.log(window);
window.innerWidth=766;
console.log(window.innerHeight);
console.log(typeof null);
var name1="Plane";
console.log(name1);
let argLength = name1.length;
console.log(argLength);
var name2 = new String ('EarthMoon');
console.log(name2);
console.log(typeof name1);//create name1 by 'identifier var and "="', will get "String" instead of "object"
console.log(typeof name2);//create name2 by applying "new, String",will get "object"
// log "-----" separate the different lesson, making your 'html' and 'js' document much more clear.
var string11 = "--------------------------------------------";
console.log(string11);

//Lesson 2
console.log('Lesson 2');
//create user 1
var userOneEmail = 'Lucy@ninjas.com';
var userOneName = 'Lucy';
var userOneFriends = ['Vi'];
// user 2
var userTwoEmail = 'Luly@ninjas.com';
var userTwoName = 'Luly';
var userTwoFriends =['Liam','Joanie','Sean'];
// user 3
var userThreeEmail = 'Lisa@ninjas.com';
var userThreeName ='Lisa';
var userThreeFriends = ['Jake','Mike'];


function login(email){
    console.log(email, 'is now online, great!');
}

function logout(email){
    console.log(email, ' logged out already.');
}
function logFriends(friends){
    friends.forEach(friend =>{
        console.log(friend);
    });
}

login(userOneEmail);

// apply Object instead of variable
var userOne1 = {
    name:'Lucy1',
    email: 'lucy1@ninjas.com',
    /*create "method" here, no need identifier"function"
    'this' here only is applied in this object"userOne1", 
    differentiating from the global "this" 
    */
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, "has logged out")
    }
}
    //call 'object', the code need to write outside of the definition of "object"
    console.log(userOne1.name);
    console.log(userOne1.email);
    console.log(userOne1.login);//appear the 'login' general method
    console.log(userOne1.login()); // 'login' and login() are different
    console.log(userOne1);
    userOne1.login();
    userOne1.logout();
    //we can use 'console.log(string11)',but the below method('-----"") makes code more clear.
    console.log('-----------------------------------------------')

    //Lesson 3
    console.log('Lesson 3');
    // update the 'Object'
    userOne1.name = 'Jake';// change 'object' name to "Jake", userOne1['name']='Jake'
    console.log(userOne1);
    console.log(userOne1['email']); 
    // access the properties of "object": '.'dot notation and '[]' curly bracket
    // clear(), clear the console
    var prop ='name';// prop for finding 'value' of the identified 'key'
    userOne1[prop];
    console.log(userOne1[prop]);
    prop = 'email';
    console.log(prop);
    console.log(userOne1[prop]);
    //userOne1.prop---not correct, not defined. need to evaluate prop with 'key' first
    userOne1.age = 23;// add 'age' property to 'object' userOne1
    console.log(userOne1);
    //userOne1.logInfo = function(){};
    userOne1['logInfo'] = function(parameter){};
    // '.''[]' can be used to access property/method; if no, then add the property/method to "object"
    userOne1['hobbies'] = ['hike','travelling'];
    console.log(userOne1.hobbies);
    console.log(userOne1);
    /*add property/method may make your code a little confusing and complex
    try to setup property/method when creating 'object'
    */
    console.log('-----------------------------------------------')
    
    //Lesson 4
    console.log('Lesson 4');
    //create multiple 'object's at the same time to simplify and clarify your code
    /* 'object'  simplifies  multiple "variable"s; 'class' simplifise multiple "object"s
    'array' simplifies the same type data.
    */
    class User {

    }
    console.log('User');// empty class
    class User111 extends User{

    };// User111 is the child-class of father-class"User

    console.log('-----------------------------------------------')

    //Lesson 5
    console.log('Lesson 5');
    /*
    class: 'new' keyword, curly bracket,sets the value of "this"
    to be the class, calls the constructor method that automatically installed 
    when creating class(father and child class); this has its own scope.
    'this' in constructor refers to the "new" class. 
    'this' in method refers to the new class that calls the method. 
    "this" passes the argument to parameter
    */
    class User1 {
        constructor(email, name){
            this.email = email;
            this.name = name;
        }

    }

    var userOne1 = new User1('luwin@gmail.com','Lisasa');
    var userOne2 = new User1('lll@yahoo.com','JJ');
    console.log(userOne1);
    console.log(userOne2);
    console.log('-----------------------------------------------')

    //Lesson 6
    console.log('Lesson 6');

    class User2 {
        constructor (email, name){
            this.email = email;
            this.name = name;
        }

        login(){
            console.log(this.email, 'logged in already!');
        }
        logout(){
            console.log(this.email, 'you logged out your email, good job!');
        }
        
    }

    var userOne11 = new User2('yy@gmail.com', 'Kivi');
    var userTwo11 = new User2('dd@gmail.com','DD');
    console.log(userOne11);
    console.log(userTwo11);

    // call the method of class"User2"" by variables "userOne11/userTwo11"
    userOne11.login();
    userTwo11.logout();
    console.log('-----------------------------------------------')

    //Lesson 7
    console.log('Lesson 7');
    // learn updateScore(){}
    class FatherUser{
        constructor (email, name){
            this.email = email;
            this.name = name;
            this.score = 0;// kind of like 'static' method, not change, "constant"
        }
        login(){
            console.log('congratulation, you logged in')
            return this;
        }
        logout(){
            console.log('see you next time, you logged out')
            return this;
        }
        updateScoare(){
            this.score++;
            console.log(this.email, " score is now ", this.score);
            return this;

        }
    }
    var userOne22 = new FatherUser('PP@gmail.com','PP');
    var userTwo22 = new FatherUser('KKK@yahoo.com','KiKiSi');
    userOne22.updateScoare();
    console.log(userOne22.updateScoare);// not instantiation, but "function/method" itself

    userTwo22.updateScoare()
    userTwo22.updateScoare()
    userTwo22.updateScoare()
    userTwo22.updateScoare()

    userTwo22.logout().updateScoare().updateScoare().logout();
    console.log('-----------------------------------------------')

    //Lesson 8
    console.log('Lesson 8');
    // learning child-class, child-class inherits all properties and methods from father-class
    // child-class also can create its own properties and methods
    class ChildClass extends FatherUser {
        deleteUser(user){
            userArr= userArr.filter(u =>{
                return u.email !== user.email;
            } )
        }        

    }

    var childUser = new ChildClass('Cici@gmail.com', 'Cici');//instantiating Child-class
    var childUser1 = new ChildClass('didi@gmail.com','DIDI');
    userArr = [userOne22,userTwo22];
    childUser1.deleteUser(userOne22);
    console.log(userArr);// 'userss' array just has one argument
    //var userss1 =userss.push(childUser);
    //console.log(userss1);
    //childUser1.deleteUser(userOne11)
    //console.log(userss1, "  ***");
    //let admin = new Child11('ccccc@gmail.com', "KOko");
    //var userss = [userOne22,userTwo22,childUser,childUser1];
    //childUser1.deleteUser(userOne22);
    //console.log(userss)
    //admin.deleteUser(userOne22);
    //console.log(userss);
    console.log("------------------------------------------------")

    //Lesson 9
    console.log('Lesson 9');
    function FunctionUser(email, name){
        this.email = email;
        this.name = name;
        this.online = false;
        this.login = function(){
            console.log(this.email, 'has logged in');
        }
    }
    var UserOne = new FunctionUser('wiwi@ninjas.com','wiwi');
    var UserTwo = new FunctionUser('FiFI@qq.com',"FiFI");
    console.log(UserOne);
    UserTwo.login();
    console.log(UserTwo);
    console.log('------------------------------------------------')

    //Lesson 10
    console.log('Lesson 10');

    //instantiation has no prototype
    //constructor has the prototype
    function FunctionUser1(email, name){
        this.email = email;
        this.name = name;
        this.online = false;
        }
    
    FunctionUser1.prototype.login = function(){
        this.online = true;
        console.log(this.email, 'has logged in');
    
    }
    FunctionUser1.prototype.logout = function(){
        this.online = false;
        console.log(this.email, "has logged out already");
    }

    var userOne111 = new FunctionUser1('xx@gmail.com', 'XX');
    var userTwo111 = new FunctionUser1('yy@gmail.com','YY');
    userOne111.login();
    userTwo111.logout();
    console.log(userOne111);
    console.log('------------------------------------------------');

    //Lesson 11
    console.log('Lesson 11');

    function Admin11(...args){
        //console.log(args);
        FunctionUser1.apply(this,args);
        this.role = 'super admin';

    }
    //you can create Admin11 its own prototype
    Admin11.prototype = Object.create(FunctionUser1.prototype);
    Admin11.prototype.deleteUser1 = function(u){
        usersArr = usersArr.filter(user => {
           return user.email !== u.email;
        });
    };

    var admin11 = new Admin11('hihi@yahoo.com','hihi');
    console.log(admin11);
    var usersArr = [userOne111, userTwo111,admin11];
    console.log(usersArr);
    admin11.deleteUser1(usersArr[1]);
    console.log(usersArr);
    console.log('---------THE END OF The Net Ninja-------------------');











    











