//alert("alert")
//crtl + ?

// TYP PROSTY 
// 1. string -tekst-"Ala ma kota"
// 2. number - liczba - 30
// 3.Boolean - true/false
// 4.null - wartosc niezdefiniowana/brak wartosci
// 5.symbol

// HTML, CSSS, JS, PREKOMPILATOR STYLI (SASS), SYSTEM KONTROLI WERSJI GIT

//https://developer.mozilla.org/en-US/docs/Web/JavaScript

//https://www.w3schools.com/




//2.typy złożone

// 1.tablica-array-[]
// 2.obiekt - Object - []


// var name = "Łukasz";
// console.log("Wyświetl name: "+name);


//TABLICA

// var numbersArray = [1,2,3,4,5];

// var stringArray = ["Julia","Łukasz","Tomek","Maciek"];

// console.log(stringArray.length)

// stringArray.push("Ala ma kota")
// console.log(stringArray.length)

//name.trim() usuwa biale znaki


// OBIEKTY

// var person = {
//     name: "Łukasz",
//     age: 30,
//     isAdult: true,
//     yearsOfBirth: 2020
// };

// console.log(person.name)

// person.gender = "male";
// delete person.gender;
// console.log(person.gender)


// person.calculateAge = function() {
//     var currentYear = 2024
//     var personAge = currentYear-person.yearsOfBirth;
//     console.log(personAge)
//     return personAge
// }

// person.yearsOfBirth = 2000;

// console.log(person)

// person.calculateAge()

// //////////////////////////////////
// let displayName = (name) => console.log(name);

// displayName(30)

/////////////////////////////////////////////////////////////////


// const objectsArray = [
//     {
//         name: "agata",
//         age: 16,
//         gender: "female",
//         isAdult: true
//     },
//     {
//         name: "magda",
//         age: 10,
//         gender: "male",
//         isAdult: false
//     },
//     {
//         name: "marian",
//         age: 45,
//         gender: "male",
//         isAdult: true,
//         users: [
//                 {car: "Audi"},
//                 {productionYear: 2017},
//                 {color: "red"}
//         ]
//     },
//     {
//         name: "jozef",
//         age: 32,
//         gender: "male",
//         isAdult: true
//     },
//     {
//         name: "jacek",
//         age: 78,
//         gender: "male",
//         isAdult: true
//     }
// ];


// console.log(objectsArray[3].name)

// console.log(objectsArray[2].users)


// let findObject = objectsArray.find((element) => element.users ? element : null)
// console.log('object', findObject)

// findObject.users.map((item) => console.log(`${Object.values(item)}`))

////////////////////////////////////////////////////////////


//POBIERANIE DANYCH Z API


// const apiUrl = "https://swapi.dev/api/people/1/";

// async function fetchSwapiData() {
//     try {
//         const response = await fetch(apiUrl);

//         if(!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

        
//         console.log("Pobrane dane: ",data);

//         data.films.forEach(film => {
//             document.getElementById('box').innerHTML += `<a href="${data.films}" target="_blank">${data.films}</a><br><br>`;
//         });

//     } catch (error) {
//         console.log("Błąd",error)
//     }
    
// }

// fetchSwapiData()



const apiUrl = "https://swapi.dev/api/people/1/";

async function fetchSwapiData() {
    try {
        const response = await fetch(apiUrl);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        
        console.log("Pobrane dane: ",data);

        data.films.forEach(filmUrl => {
            box.innerHTML += `<a href="${filmUrl}" target="_blank">${filmUrl}</a><br><br>`;
        });

    } catch (error) {
        console.log("Błąd",error)
    }
    
}

fetchSwapiData()


//justjoin.it
//https://git-scm.com/downloads/win
//https://github.com/







