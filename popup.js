document.addEventListener('DOMContentLoaded', async() =>{
    const JokesList = document.getElementById('JokesLists');
    const url = 'https://api.chucknorris.io/jokes/random';
    
    try{
        const res = await fetch(url);
        const jokes = await res.json();
        const jokeshtml = jokes.value
        JokesList.innerHTML = jokeshtml
    }catch(err){
    	console.error(err);
    }
})