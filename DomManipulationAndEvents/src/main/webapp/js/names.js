/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var str = console.log(all.join());
var str2 = console.log(all.join('-'));

console.log(all.push("Lone", "Gitte"));
console.log(all.unshift("Hans", "Kurt"));

console.log(all.shift());
console.log(all.pop());

console.log(all.splice(3,2));

console.log(all.reverse());

console.log(all.sort());

var uppercaseMap = console.log(all.map(x => x.toUpperCase()));


var namesWithL = console.log(all.filter(x => x.charAt(0) === "L" || x.charAt(0) === "l"));