// alert("tekst");

// jakistamkod  //ctrl + ?

// Emmet

// Typy danych

// Typ prosty

// 1. string - ""
// 2. number - liczba
// 3. boolean - true/false
// 4. null/undefined - wartość niezdefiniowana / brak wartości


// HTML, CSS, JS, PREKOMPILATOR STYLI (SASS), GIT, 
// w3schools

var name = "Łukasz";
console.log(name);

// Typy złożone

// array - tablica
// object - objekt


var numbersArray = [1,2,3,4,5];
var stringArray = ["Julia","Łukasz","Tomek","Maciej"];
numbersArray.push(6);

console.log(numbersArray[2]);

var Person = {
    name: "Łukasz",
    age: 20 ,
    isAdult: true,
    yearOfBirth: 2004,
    gender: "male",
}

delete Person.gender;

Person.calculateAge = function() {
    var currentYear = 2024;
    var PersonAge = (currentYear - Person.yearOfBirth);
    console.log(PersonAge);
    return PersonAge;
}

Person.calculateAge();


console.log(Person);

let displayName  = (name) => console.log(name);
displayName(Person.name);



const ObjectArray = [
{
    name: "Łukasz",
    age: 20,
    isAdult: true,
    gender: "male"
        
},
{
    name: "Agata",
    age: 18,
    isAdult: true,
    gender: "female"
},
{
    name: "Marian",
    age: 25,
    isAdult: true,
    gender: "male",
    users: [
        {
        car: "Audi",
        productionYear: 2017,
        color: "red",
        }
    ]
},
]


let findObject = ObjectArray.find((element) => element.users ? element : null)

console.log('object', findObject);

findObject.users.map((item) => console.log(`${Object.values(item)}`));



// Pobieranie danych z API

const ApiURL = "https://swapi.dev/api/films/";

async function fetchSwapiData() {

try {
    const response = await fetch(ApiURL);

    if (!response.ok) {
        throw new Error("HTTP Error! Status: " + response.status);
    }

    const data = await response.json();

    console.log(data)

    wyniki(data);

}

catch (error) {
    console.error("Błąd: " + error)
}


}


fetchSwapiData();


function wyniki(data) {

    const Sekcja = document.createElement('div');
    Sekcja.id = 'wyniki'; 

    for (let i = 0; i < data.results.length && i < 7; i++) {
        let filmy = data.results[i].url;

        const tytulFilmu = document.createElement('p');
        tytulFilmu.textContent = (filmy);
        Sekcja.appendChild(tytulFilmu); 
    }

    document.body.appendChild(Sekcja);
}

// justjoin.it

// https://lesscss.org/

// git clone https://github.com/lukaszCode902/przeworsk-szkolenie.git