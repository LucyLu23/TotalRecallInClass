/*## Q + A
1. How do we assign a value to a variable?
we can apply keyword: const--for constant data/value; let- for block-limit variable; var- for global variable.           
2. How do we change the value of a variable?
we can evaluate the variable again to change its value. we can change the value of a variable if it is created by using 
keyword"let ","var". But the value/method/property of a object can be changed even it is created by keyword "const"
Eg. var name = "Mike";
    name = " Jack";
    console.log(name)// Jack
3. How do we assign an existing variable to a new variable?
 variable-name = new value, applying"="
4. Remind me, what are declare, assign, and define?
var variable ----declare;
variable = value ------assign;
var variable = value ------initialize and define.
### Research 
5. What is pseudocoding and why should you do it?
pseudocode is not formal code, is a kind of code draft that will help your figure out the sequence, result, scope, order of your future code.
and it will assist you in your coding preparation, making your thoughts/idea/plan/strategy of your code more organizing and clear.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
about 70 : 30 if we consider 100 in all. But sometimes I am typing code while thinking, trying different ways in my mind. The more you try, 
the more you will succeed in solving the problem.
*/

// Strings
//- Create a variable called firstVariable
console.log('--------------review String-----------');
var firstVariable;
firstVariable = "Hello World";
document.write(firstVariable);
firstVariable = 23;
console.log(firstVariable);
let secondVariable = firstVariable;
secondVariable = "How are you?";
console.log(secondVariable);
// What is the value of firstVariable?
console.log('the value of firstVariable is ',firstVariable);
//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string `"Hello, my name is "` and the variable yourName. 
var yourName = "Lucy";
console.log("Hello, my name is ", yourName);

// Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:
console.log('--------------review Booleans-----------');
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e || 'Kevin');
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird"`
console.log(48 !== '48');

// The Farm 
// 1.Declare a variable animal. Set it to be either "cow" or something else
// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animalis anything other than a cow, it will print `"Hey! You're not a cow."`
// 4. Commit
console.log('--------------review Conditional"if-else"-----------');
var animal = "cow";
if (animal == "cow"){
    console.log(' moooooo');
    //alert('Not sure what animal is');
}else{
    console.log("Hey!, You're not a cow.");
    //alert("Moooooooooooooooo");
}
// Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
const kevinAge = 23;
if (kevinAge > 16){
    console.log('Here are the keys')
}else{
    console.log("Sorry, you're too young.")
}

const kevinAge1 =16;
kevinAge1 > 16? "here are the keys for you": "Sorry, you are too young ";

// Loops
console.log('--------------review Loops------------------');
//USE let when you initialize your for loops!
// This is GOOD: `for(let i = 0; i < 100; i++)`
//This is NO GOOD: `for(i = 0; i < 100; i++)`
// A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
//Write a loop that will print out all the numbers from 10 up to and including 400
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=0; i<11; i++){
        console.log(i);
    }

for (let i1=10; i1<401; i1++){
    console.log(i1);
}

for (let i2=12; i2<=4000; i2++){
    if(i2%3==0){
    console.log(i2);
}
}

// B. Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let j=2; j< 101; j +=2){
    console.log(j, " is an even number.")
}
//C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:
for (let j1=1; j1< 101; j1 ++){
    if ( j1%5==0)
    console.log(j1, " I found a number. High five!")
}
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//**Example Output:**
//I found a 3. Three is a crowd
//I found a 5. High five!
//I found a 6. Three is a crowd
/*
I found a 9. Three is a crowd
I found a 10. High five!
For numbers divisible by both three and five, be sure your code prints both messages
For numbers divisible by both three and five, be sure your code prints both messages
*/
for (let j2=1; j2< 101; j2 ++){
    if (j2%3 == 0){
        console.log('I found a ', j2, "there is a crowd");
    }
    if ( j2%5 == 0){
    console.log(j2, " I found a number. High five!")
    }
}

//D. Savings account
//- Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
//- Check your work! Your `bank_account` should have $55 in it.
//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your `bank_account` should have $10,100 in it.
let savingsAccount1 =0 ;
for (i1 = 1; i1 <= 10; i1++){
    savingsAccount1 += i1; 
}
console.log(savingsAccount1);

let savingsAccount2 = 0;
for (i2 =1; i2 <= 100; i2++){
    savingsAccount2 += i2;
}
console.log(savingsAccount2*2)

//Arrays & Control flow
console.log('-----------Arrays & Control flow--------------')
/*A. Talk about it:
What are the things in an array called?
elements, and it can be any type of data, like number, string, array, object, boolean, undefined 
Do Arrays guarantee those things will be in order?
yes. Arrays keep things in order and you can access the specific element by "index", while the properties(key-value) aren't in order.
What real-life thing could you model with an array?
like the seats in the theater, the seats in a airplane.
*/
//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
let quotes = ['apple','eggs','milk'];


//C. Accessing elements
// How do you access the 1st element in the rray?
const randomThings = [1, 10, "Hello", true] //
randomThings[0];
console.log(randomThings[0]);// access the elements by "Index"
//- Change the value of `"Hello"` to `"World"`
randomThings[2]='World';
console.log(randomThings); // 'Hello' change to "World"
// Check the value of the array to make sure it updated the array using `console.log()`
//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//What would you write to access the 3rd element of the array?
ourClass[3];
//Change the value of "Github" to "Octocat"
ourClass[4]='Octocat';
//Add a new element, "Cloud City" to the array
ourClass.push('Cloud City');
console.log(ourClass[3]);
console.log(ourClass);
//E. Mix It Up
var myArr = [ 'a',1,2,3,45,6,3,66,99,123,2233,6699,999998];
var myArr1 = myArr.slice(1,3);
console.log(myArr);
console.log(myArr1);
var myArr2 =myArr.splice(0,10,2);
console.log(myArr2);// the array that was deleted
console.log(myArr);// the array left after deleting elements

var myArray = [5, 10, 500, 20];
console.log(myArray)
//Add the string "Aegon"to the end of the array. Add another string of your choice to 
//the end of the array.
myArray.push('Aegon');
//myArray.push('having fun');
console.log(myArray.push('having fun'));//return the length of the new array
console.log(myArray);// return the new array

//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//Remove the string of your choice from the end of the array.
console.log(myArray.pop());
console.log(myArray)
//Reverse this array using `Array.prototype.reverse()`. 
myArray.reverse();
console.log(myArray);
//Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
//.reverse() change the order of the origin array. return the opposite order new array.

// F. Biggie Smalls
//Create a variable that contains an integer.
/*Write an `if ... else` statement that:
- `console.log()s` "little number" if the number is entered is less than 100
- `console.log()s` "big number" if the number is greater than or equal to 100.
*/
var num1 = 23;
if (num1 < 100){
    console.log('little number')
}else{
    console.log('big number')
}

/*### G. Monkey in the Middle
//Write an `if ... else if ... else` statement:
1. console.log()little numberif the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".*/
//method one
function judgeNum (num){
    if (num < 5){
        console.log('little number')
    }else if(num > 10){
        console.log('big number')
    }else{
        console.log('monkey')
    }
}
judgeNum(12);
judgeNum(2);
judgeNum(6);
//method two
let num11 =12;
if (num11 > 10){
    console.log('big number')
}else if(num11 <5){
    console.log('little number')
}else{
    console.log('monkey')
}


/*## H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = {
    firstName: "Kristyn",
    lastName: "Smith",
    age:25,
    clothes:["left shoe", "cowboy boots","right sock","GA hoodie",
  "green pants",  "yellow knit hat",  "marshmallow peeps"]
}

//Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*What's Kristyn wearing today?**
1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
*/
console.log('Kristyn is rocking that '+ kristynsCloset.clothes[1] + "today!")
/*2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.*/
console.log(kristynsCloset.clothes.splice(5,1,'stained kint hat','raybans'))
console.log(kristynsCloset.clothes);
//3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])
/**In the same way, access one item from Thom's pants array.**
- Access one item from Thom's accessories array.
- Log a sentence about what Thom's wearing. 
*Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
- Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/
console.log('Thom is looking cool in a '+ thomsCloset[0][1]+", "+ thomsCloset[1][2]+', and '+thomsCloset[2][0])
console.log('Thom is looking super awesome in a '+ thomsCloset[0][1]+", Footie Pajamas , and "+thomsCloset[2][0])

console.log('-----------------review function---------------------------------')
/*
## IV. Functions
### A. printGreeting
Do you think you could write a function called `printGreetingwith` a parameter name that returns a greeting with the argument interpolated into the greeting?
Like so?
``console.log(printGreeting("Slimer")); `
`=> Hello there, Slimer!``*/
function printGreetingwith (goodword){
    console.log(`Hello there,  ${goodword}`)
}
printGreetingwith('Vivi!');
/*
You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
### B. printCool
Write a function `printCoolthat` accepts one parameter, `name`, as an argument. The function should print the name and a message saying that that person is cool.
`console.log(printCool("Captain Reynolds"));`
`=> "Captain Reynolds is cool";`
*/
function printCoolthat (name1,name2){
    console.log(`Cool ${name1},`+'  ' +`${name2} is cool too!`)
}
printCoolthat('Ariel','Miguel');

console.log('----------------------------------------------')
/*### C. calculateCube
Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
`console.log(calculateCube(5));`
`=> 125`
*/
function calculateCubethat (num2){
    console.log(Math.pow(num2, 3))
}
calculateCubethat(5);

function calculateCubethat1 (num22){
    console.log((num22*num22*num22))
}
calculateCubethat1(6);

function calculateCubethat2 (num222){
    volume3 =num222*num222*num222
    console.log(volume3)
}
calculateCubethat2(7);

console.log('----------------------------------------------')
/*
## D. isVowel
1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 
2. The vowel could be upper or lower case. 
Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
`console.log(isVowel("a"));`
`=> true*/

/*
I tried for Loop, and it seems not successful yet.
function isVowel (myStr){
    var myStrchange = myStr.toLowerCase();
    var vowelLetter =['a','e','i','o','u','y'];
    for (let i = 0; i < vowelLetter.length; i++){
        if (myStrchange!=vowelLetter[i] ){
            return myStrchange = isVowel(myStr)

        }
        return true;
           return false;
        }   need more thinking about this method.   
    } 
    console.log(isVowel('B'));
console.log(isVowel('a'));
console.log(isVowel('E'));///???????????
console.log('--------------------')
*/
// Way One
function isVowel(myStr){
    myStrChange = myStr.toLowerCase();
    switch (myStrChange){
        case "a":
            return true
            break;
        case "i":
            return true
            break;
        case 'e': 
            return true
            break;
        case "o":
            return true
            break;
        case "u":
            return true
            break;
        case "y":
            return true
            break;
        default:
            return false
            break;
       }
}
console.log(isVowel('H'));
console.log(isVowel('p'));
console.log(isVowel('o'));
console.log(isVowel('U'));
console.log('-----------------------------')
//way two
function isVowel2 (myStr2){
    var myStrChange2 = myStr2.toLowerCase();
    if ((myStrChange2=="a" )||
    (myStrChange2=="e" ) ||
    (myStrChange2=="o" ) ||
    (myStrChange2=="i" ) ||
    (myStrChange2=="u" ) ||
    (myStrChange2=="y" ) ){
        return true;
    }else {
        return false;
    }
}
console.log(isVowel2('h'));
console.log(isVowel2('y'));
console.log(isVowel2('Z'));
console.log(isVowel2('O'));

console.log('----------------------------------------------')
/*### E. getTwoLengths
Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number 
is the length of the corresponding string.
`console.log(getTwoLengths("Hank", "Hippopopalous"));`
`=> [4, 13]`*/
function getMyArrLength (myStr11,myStr22){
    let myStrNumArr =[ myStr11.length,  myStr22.length];
    return myStrNumArr
}
console.log(getMyArrLength('learningcode','activateworkDenver'));

console.log('----------------------------------------------')
/* 
### F. getMultipleLengths
Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.
`console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
`=> [5, 4, 2, 2, 4]` 
*/
function getMultipleLength (myStrArray){
    var myStrElemLength = [];
    for (let i=0; i<myStrArray.length; i++){
        myStrElemLength.push(myStrArray[i].length);
    }
    return myStrElemLength;
}
console.log(getMultipleLength (['1','23','learningcode','activateworkDenver']));
console.log(getMultipleLength (['126sd4sdfs8fds6f4ds','23','learningcode','activateworkDenver','oksdokfs','howare']));

/*
### G. maxOfThree
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. 
If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
console.log(maxOfThree(6, 9, 1));
=> 9
Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, 
we need you to submit a solution that does not use Math.max().
*/
//Way one
function maxOfThree (num3,num33,num333){
    let maxNumber = num3>=num33? (num3>=num333? num3:num333) : (num33>=num333? num33:num333);
    return maxNumber;
}
console.log(maxOfThree(23,2,3));
console.log(maxOfThree(232,2023,36));

// Way TWo
function maxOfThree1(num4,num44,num444){
    if (num4>=num44 && num4>=num444){
        return num4;
    }else if(num44>=num4 &&num44>=num444){
        return num44;
    }else{
        return num444;
        }
    }
console.log(maxOfThree1(23,2,36));
console.log(maxOfThree1(2300,20232,36));
console.log(maxOfThree1(23900,20442,30546));
// Wat Three
function maxOfThree2(num5,num55,num555){
    if (num5>=num55 && num5>=num555) {
        return num5; 
    }else{
        if (num5>=num55 && num5<=num555){
            return num555;
        }else{
            return num55;
        }
    }
}
console.log(maxOfThree2(2003,442,3460));
console.log('----------------------------------------------')
/*### H. printLongestWord
Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word 
in the array. In case of a tie, the method should return the word that appears first in the array.
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter" */
console.log('--------------------')
//way one
function printLongestWord (myArray1){
    let myarraylongestword = "";
   for (let i=0; i< myArray1.length; i++){
       if (myArray1[i].length > myarraylongestword.length){
        myarraylongestword=myArray1[i];
       }
           
    }return myarraylongestword;
}
//console.log(myArray1[0].length <= myArray1[1].length);
console.log(printLongestWord(['ad','256464','false','howareyouandyou?']));

// Way two, this method does not do good work, but I want to keep it . I try to figure out later.
function printLongestWord111(myArray111){
    for (let i=0; i< myArray111.length-1; i++){
         if (myArray111[0].length <= myArray111[1].length){
             myArray111.shift();          
         }
         else{
             myArray111.splice(2,1);   
         } 
         
     }return myArray111;
 }
 // way three
 /*
 try using recursion, not figure out yet
function printLongestWord1111(myArray1111){
    for (let i=0; i< myArray1111.length-1; i++){
         if (myArray1111[0].length <= myArray1111[1].length){
             myArray1111.shift(); 
             return printLongestWord1111(myArray1111)         
         }
         else{
             myArray1111.splice(2,1);   
             return printLongestWord1111(myArray1111)  
         }
         
     }//return myArray1111;
 }
 console.log(printLongestWord1111(['ad','256464','false','howareyouandyou?'])); */
 // way four
/* function printLongestWordthat(myArray12){
    //for(let i=0; i<myArray12.length; i++)
    return myArray12.sort()   
}
console.log(printLongestWordthat(['ad','256464','false','howareyouandyou?'])); */



console.log('----------------------------------------------')
/*### C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
- Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).
*/
const userData ={
    customer1:{
        name:"vivi",
        age: 18,
        email:'vivi@gmail.com',
        gender:'female',
        purchasedthings:['womanshoes','handbag','cookie','milk']
    },
    customer2:{
        name:'AA',
        age:23,
        email:'AA@gmail.com',
        gender:'male',
        purchasedthings:['manshoes','manTshirts','bread','drink']

    },
    customer3:{
        name:'BB',
        age:36,
        email:'BB@gmail.com',
        gender:'female',
        purchasedthings:['babyclothes','pillow','eggs','water','apple']
    }
}
//console.log(userData[0]);
console.log(userData);
userData.customer3.email='BBBBBB@gmail.com';
console.log(userData.customer3.email);
userData.customer1.age++;
console.log(userData.customer1.age);
console.log('--------------')
/* object's property/value cannot be accessed by index?
for (let n=0; n<userData.length; n++){
    let location1 = ['12th street','16th street','23rd street'];
    userData.userData[n]['location']=location1[n];
}
console.log(userData); */
/* for (var eachCustomer in userData){
    for (let n=0; n<userData.length; n++){
        let location1 = ['12th street','16th street','23rd street'];
        eachCustomer['location']=location1[n];
        
    }console.log(userData.customer1); */
console.log('--------------')
/* userData.customer1['location']= '12th street';
userData.customer2['location']= '16th street';
userData.customer3['location']= '23rd street'; */

userData.customer1.purchasedthings.push('peace of mind');
console.log(userData.customer1);
userData.customer2.purchasedthings.push('peace of mind');
console.log(userData.customer2);

userData.customer3.purchasedthings.push('Merino jodhpurs');
console.log(userData.customer3);

userData.friend= {
    name:"Grace Hopper",
    age:85
}
console.log(userData);//add object "friend" to the main object "userData"
userData.friend.location='36th street';
userData.friend.purchasedthings=['orange','iphone','TVset','laptop'];
console.log(userData.friend.name);
console.log(userData.friend.location);
userData.friend.age=55;
userData.friend.purchasedthings.push('The One Ring');
console.log(userData.friend.purchasedthings[1]='A latte');

console.log('-------------LOOPSREVIEW---------------');
for (let i1=0; i1 < userData.customer1.purchasedthings.length; i1++){
    console.log(userData.customer1.purchasedthings[i1] );
}
console.log('----------------------------');
for (let i2=0; i2 < userData.customer2.purchasedthings.length; i2++){
    let purchasedgoods= userData.customer2.purchasedthings[i2];
    console.log(purchasedgoods);
}
console.log('----------------------------');
//let customer3purchase = userData.customer3.purchasedthings;
let i3=0;
while (i3 < userData.customer3.purchasedthings.length){
    console.log(userData.customer3.purchasedthings[i3]);
    i3++;
}
console.log('-----------FunctionsCanOperateOnObject----------------')

function updateUser(){
    this.age++;
    this.name.toUpperCase();
    console.log(this.age);
    console.log(this.name.toUpperCase());
}
console.log('---------')
const user1111 ={
    age:22,
    name:'jake',
   }
updateUser.apply(user1111);
//This function and its calling I spend much time on it, so I want to keep the below
//many codes that I tried.
/*console.log(user1111.age);//22
updateUser(user1111);
console.log(updateUser(user1111.age));//nan
user1111.updateUser();
 const name1="Jake";
console.log(name1.toUpperCase());
const  anotherGreeting = 'goodmorning!!';
console.log(anotherGreeting.toUpperCase()); */
/* function oldAndLoud (person){
    this.age++;
    this.name.toUpperCase();
}
const person11 ={
    age:23,
    name:'Backson'
}
let object11 = oldAndLoud(person11);
console.log(object11);
//console.log(object11.age);
console.log(person11.name); */

let cat1that ={
    name: 'Yoyo',
    breed: 'Persian' ,
    age:6
}
console.log(cat1that.age);
console.log(cat1that.breed);

let cat2that ={
    name: 'Jack',
    breed: 'Maine Coon' ,
    age:9
}

function combineCats1(mama, papa){
    papa.name='papamama';
    papa.age=1;
    papa.breed ='hybrid';
    return {...mama,...papa};
   }
console.log(combineCats1(cat1that,cat2that));

console.log("-------------")
function combineCats2 (papa1, mama1) {
    var obj = Object.assign(papa1,mama1);
    obj.name='papamama';
    obj.age=1;
    obj.breed ='hybrid';
    console.log(obj);
}
combineCats2(cat1that,cat2that);

for (var property in cat1that){
    console.log('key: '+ property);
    console.log('value: ' +cat1that[ property]);
}

console.log(combineCats1(combineCats1(cat1that,cat2that),combineCats1(cat1that,cat2that)));