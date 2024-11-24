var person = {
    name: "Adam",
    age: 99,
    yearofbirth: 2000
}
person.Gender = "Male";
console.log(person.Gender);
person.CalAge = function () {
    var currentYear = 2024;
    var result = currentYear - person.yearofbirth
    return result;
}
console.log(person.CalAge())

var array = [
    {
        name: "aa",
        users: [
            { car: "audi" },
            { year: 2000 },
            { color: "red" }
        ]
    },
    {
        name: "bb",
    },
    {
        name: "cc",
    }
]
// for (let i = 0; i < array.length; i++) {
//     if (array[i].name == "cc") {
//         console.log(array[i].name)
//     }
// }
let findobject = array.find((element) => element.users ? element : null)
console.log("object: " + findobject);

//findobject.users.map((item) => console.log($Object.values(item)))

// for (let i = 0; i < array.length; i++) {
//     if (array[i].name == "aa") {
//         console.log(array[i].users)
//     }
// }



//API


const apiUrl = "https://swapi.dev/api/people/1/";

async function fetchAPI() {
    try {
        const response = await fetch(apiUrl);
        let info = document.getElementById("info");
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`)
        }
        const data = await response.json();

        console.log(data.films);

        data.films.forEach(element => {
            info.innerHTML += `<a href="${element}" id="info" target="_blank">${element}</a> <br>`;
        });
    } catch (error) {
        console.log("błąd podczas pobierania danych", error)
    }
}
fetchAPI();





