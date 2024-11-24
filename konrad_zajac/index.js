//dadadadadadadad

var Person = {
    Name: "Konrad",
    FamilyName: "Zając",
    Age: 16,
    YearOfBirth: 2008,
}

//alert("Imię to "+Person.Name)

Person.Gender = "Gmail"

//alert("Płeć "+Person.Name+" to "+Person.Gender)

if (Person.Hobby) {
    //alert("Hobby "+Person.Name+" to "+Person.Hobby)
} else {
    //alert(Person.Name+" nie ma hobby")
}

Person.CalculateAge = function() {
    var CurrentYear = 2024
    var Result = CurrentYear-Person.YearOfBirth
    return Result
}

//alert("Wiek "+Person.Name+" wynosi "+Person.CalculateAge())

var BazaDanychUżytkowników = [
    {
        name: "Marcin",
        age: 17,
        users: [
            {car: "Audi"},
            {ProductionYear: 2017},
            {color: "red"},
        ]
    },
    {
        name: "Konrad",
        age: 16,
    },
    {
        name: "Radek",
        age: 16,
    },
    {
        name: "Bartosz",
        age: 12,
    },
]

/*for (var i = 0; i < BazaDanychUżytkowników.length; i++) {
    if (BazaDanychUżytkowników[i].name == "Marcin") {
        console.log(BazaDanychUżytkowników[i].users)
        console.log(BazaDanychUżytkowników[i].users))
    }
}*/

/*let FindObject = BazaDanychUżytkowników.find(element => element.users ? element : null)

FindObject.users.map((item) => console.log(item))*/

const UrlAPI = "https://swapi.dev/api/people/1/"

async function GetData(APIKey) {
    try {
        const Response = await fetch(APIKey)
        return Response
    } catch(error) {
        console.error("Błąd podczas pobierania danych:", error)
    }
}

async function ConvertDataFromJSON(Data) {
    const ConvertedData = await Data.json();
    return ConvertedData
}

async function DisplayFilms() {
    var Table = document.getElementById("newtable")
    var Data = await GetData(UrlAPI)
    var ConvertedData = await ConvertDataFromJSON(Data)

    ConvertedData.films.forEach(film => {
        const kolumna = document.createElement("a")
        kolumna.href = film
        kolumna.target = "_blank"
        kolumna.textContent = film
        kolumna.style.display = "block"
        Table.appendChild(kolumna)
    });
}

DisplayFilms()

/*async function fetchData() {
    var Div = document.getElementById("newtable")

    try {
        const Response = await fetch(UrlAPI)

        const data = await Response.json();

        data.films.forEach(film => {
            Div.innerHTML += `<td><a href=${film} target="_blank">${film}</a></td>`
        });
    } catch(error) {
        console.error("Błąd podczas pobierania danych:", error)
    }
}*/

