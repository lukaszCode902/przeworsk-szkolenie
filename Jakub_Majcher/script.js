// var person = {
//    imie: "Jakub",
//    age: 15,
//    plec: menubar,
//    yearofbirth: 2000
// };
// console.log(person.age + person.plec);

// person.calculateAge = function (yearofbirth) {
//    var currentyear = 2024;
//    var result = currentyear - yearofbirth;
//    return result;
// }
// console.log(person.calculateAge())

// const objectarray = [
//    {
//       name: "Marcin",
//       age: 15,
//       gender: "male",
//       isAdult: false,
//       users: [
//          { car: audi },
//          { color: red },
//          { productionYear: 2015 }
//       ]

//    },
//    {
//       name: "Maciek",
//       age: 20,
//       gender: "male",
//       isAdult: true,

//    },
//    {
//       name: "Marian",
//       age: 30,
//       gender: "male",
//       isAdult: true
//    },
//    {
//       name: "Magda",
//       age: 20,
//       gender: "female",
//       isAdult: true
//    },
//    {
//       name: "Aga",
//       age: 15,
//       gender: "female",
//       isAdult: false
//    }
// ];

const apiUrl = "https://swapi.dev/api/people/1/"

async function fetchstarwarsData() {

   try {
      const response = await fetch(apiUrl)
      let info = document.getElementById("info");
      if (!response.ok) {
         throw new Error('HTTP error!');
      }

      const data = await response.json();

      console.log("Pobrane dane Star Wars", data.films);

      data.films.ForEach(element => {
         info.innerHTML += `<a href="${element}" id="info" target="blank">${element}</a>`
      });

   } catch (error) {
      console.error("Błąd podczas pobierania danych", error);
   }
}

fetchstarwarsData();








