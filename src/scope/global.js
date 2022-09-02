//variables

var a; //Declarar
var b = "b"; //declarar /asignar
b = "bb"; //Reasignando
var a = "aa"// Redeclaración


//Global Scope
var fruit = "apple"; //Global

function bestFruit (){
    console.log(fruit);
}

bestFruit();


function countries (){
    country = "Colombia";// al no declarar, la variable se vuelve global automaticamente
    console.log(country);
}

countries();
console.log(country);