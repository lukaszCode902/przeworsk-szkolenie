
async function fetchFilms() {
    const apiUrl = 'https://swapi.dev/api/films/';
    const filmList = document.getElementById('film-list');
    
    try {
    
    const response = await fetch(apiUrl);
    
    
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    
    const data = await response.json();
    const films = data.results;
    
    
    films.forEach(film => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    
    
    link.textContent = film.title;
    link.href = film.url;
    link.target = '_blank';
    
    listItem.appendChild(link);
    filmList.appendChild(listItem);
    });
    } catch (error) {
    
    console.error('Wystąpił błąd podczas pobierania danych:', error);
    const errorMessage = document.createElement('li');
    errorMessage.textContent = 'Nie udało się załadować listy filmów.';
    filmList.appendChild(errorMessage);
    }
    }
    
    fetchFilms();