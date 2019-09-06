//JavaScript functions and Callbacks

////Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example

//OPGAVE 3 (rewrite)
var cb = function (n1, n2, callback) {

    if (typeof n1 === "number" &
            typeof n2 === "number" &
            typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        try {
            throw new Error('Whoops! Wrong arguments!');
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }

};

var mul = function (n1, n2) {
    return n1 * n2;
}

// OPGAVE 2

// console.log( add(1,2) ) vil printe 3
console.log(add(1, 2));

// console.log( add ) Mit gæt er den vile printe undefined/null - den printede [Function:add], altså hvad add er.
console.log(add);

//console.log( add(1,2,3) ) Mit gæt er den vile printe 3 - den printede 3
console.log(add(1, 2, 3));

//console.log( add(1) ) Gæt: den printer 1. Resultat: den printede NaN(Not a Number), er ikke sikker på hvorfor.
console.log(add(1));

//console.log( cb(3,3,add) ) Gæt: den printer "Result from the two numbers: 3+3=6" fordi den har add som callback funktion. Resultat: det var rigtigt.
console.log(cb(3, 3, add));

//console.log( cb(4,3,sub) )Gæt: den vil printe "Result from the two numbers: 4+3=1" fordi den har sub som callback funktion. Resultat: det var rigtigt.
console.log(cb(4, 3, sub));

console.log("start 7");
//console.log(cb(3,3,add())) Gæt: Det går galt fordi man prøver at kalde add som funktion i argument listen. Resultat "TypeError: callback is not a function"
console.log(cb(3, 3, add()));

console.log("start 8");
//console.log(cb(3,"hh",add)) Gæt: den vil printe "Result from the two numbers: 3+hh=3hh" fordi den har add som callback og den vil concatenere 3 og hh som om de begge var strings.
//Resultat: det var rigtigt
console.log(cb(3, "hh", add));

//OPGAVE 4
//cb call med mul som callback function
console.log(cb(3, 3, mul));

//OPGAVE 5
//cb call med anonymous div function as callback
console.log(cb(9, 3, function div(n1, n2) {
    return n1 / n2;
}));

//Getting comfortable with filter, map and forEach:

//OPGAVE 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var longNames = names.filter(x => x.length >= 3);

names.forEach(x => console.log(x));
longNames.forEach(x => console.log(x));

//OPGAVE 2
var uppercaseNames = names.map(x => x.toUpperCase());
console.log(uppercaseNames);

//OPGAVE 3
var namesToHTML = function (names) {
    var result = names.map(x => "<li>" + x + "</li>");
    result.unshift("<ul>");
    result.push("<ul>");
    //result.join('');
    return result.join('');
};

console.log(namesToHTML(names));

//OPGAVE 4
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var newCars = cars.filter(x => x.year > 1999);

console.log(newCars);

var volvos = cars.filter(x => x.make === 'Volvo');

console.log(volvos);

var cheapCars = cars.filter(x => x.prices < 5000);

console.log(cheapCars);

var carsNewerThanYear = function (cars, year) {
    return cars.filter(x => x.year > year);
};

var carsOfMake = function (cars, make) {
    return cars.filter(x => x.make === make);
};

var carsCheaperThan = function (cars, price) {
    return cars.filter(x => x.prices < price);
};

//fandt bare denne metode på nettet for at kunne replace det sidste komma i følgende metode med semikolon
var setCharAt = function(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
};

var carsToSQL = function (cars) {
    var SQL = cars.map(x => "(" + x.id + "," + x.year + "," + x.make
                + "," + x.model + "," + x.price + "),");
    SQL.unshift("INSERT INTO cars (id,year,make,model,price) VALUES");
    var str = SQL.join('');
    var result = setCharAt(str,str.length-1,';');
    return result;
};

console.log(carsToSQL(cars));

//Asynchronous Callbacks

//OPGAVE 1

//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

// Jeg forventer:
//"aaaaaaaaa"
//"ddddddddd"
//"fffffffff"
//"eeeeeeeee"
//"bbbbbbbbb"

//da e og b begge har delays kommer de sidst, og b har det længste delay

//OPGAVE 2 
//det var korrekt


//this and constructor functions

//OPGAVE 1, 2, 3 (opgaverne er lidt blandet sammen her)

//function Person(name){
//  this.name = name;
//  var self = this;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+self.name);  //Explain this
//  }.bind(this),2000);
//}
//call it like this (do it, even if you know it’s silly ;-)
//var p = new Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ p.name);  //Explain this

//Jeg forstår at vi opretter en person da en function der starter med stort bogstav er en constructor.
//I forhold til this.name i den delayede function fandt jeg 
//"Variables defined inside a function are not accessible (visible) from outside the function." fra  https://www.w3schools.com/js/js_scope.asp
// 
// I forhold til den globale "name" variabel fandt jeg:
// "If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable" fra samme side.

//Når jeg lavede et instance af en person, så lavede den ikke den globale variabel "name" mere.

//OPGAVE 4

var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);

//Man binder et objekt (g1 og g1) til en metode (greeter) og gemmer denne binding som en ny variabel,
// som man så kan bruge når man har brug for den.

//JavaScript Objects

//OPGAVE 1
function Human(name, birthday, hobby, email){
    this.name = name;
    this.birthday = birthday;
    this.hobby = hobby;
    this.email = email;
}

var h = new Human("Hans", "7-6-1990", "Fishing", "hans@hans.dk");
var h2 = new Human("Hans2", "7-6-1990", "Fishing2", "hans@hans.dk2");


//loop der lister properties
for(var prop in h){
    console.log(prop +  ', ' + h[prop]);
}

//loop der lister properties før vi sletter
for(var prop in h2){
    console.log(prop +  ', ' + h2[prop]);
}

//loop der deleter properties
for(var prop in h2){
    delete(h2[prop]);
}

// loop der lister properties efter vi har slettet (ingen output)
for(var prop in h2){
    console.log(prop +  ', ' + h2[prop]);
}

//giver h2 et nyt navn
h2.name = "Per";

//printer alle h2's properties ud (kun hans nye navn)
for(var prop in h2){
    console.log(prop +  ', ' + h2[prop]);
}

//OPGAVE 2

//jeg bruger bare min Human constructor fra før.
var humanInfo = function(){
    console.log(this.name);
    console.log(this.birthday);
    console.log(this.hobby);
    console.log(this.email);
};

//Jeg binder min første human fra højere oppe til functionen humanInfo
var hi1 = humanInfo.bind(h);

console.log("humanInfo method: ");
//Jeg ved ikke hvordan jeg bruger hi1, ud over med setTimeout som blev vist i opgave arket
setTimeout(hi1,100);