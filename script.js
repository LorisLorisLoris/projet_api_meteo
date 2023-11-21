// GEOLOC;
let city;
if("geolocation" in navigator){
    navigator.geolocation.watchPosition((position)=>{
        
        let key = "091b1b895c17db86c9b699e74fd1fbff"
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&appid=' + key + '&units=metric';
        console.log(url);

        // Creer une requete
        let request = new XMLHttpRequest(); // Creer un objet
        request.open('GET',url); // premier parametre GET ou POST, deuxieme parametre l'URL
        request.responseType = 'json'; // on attend du JSON
        request.send(); // envoyer la requete

        //on execute une fonction des qu'on recoit une reponse
        request.onload = function(){
            if (request.readyState === XMLHttpRequest.DONE){ // si la requete est bien terminé
                if (request.status === 200) { // si la requete s'est bien passé
                    let reply = request.response; // on stocke la reponse
                    let temperature = reply.main.temp;
                    let city = reply.name;
                    document.querySelector("#ville").textContent = city;
                    document.querySelector("#temperature_label").textContent = temperature;
                }
                else{
                    alert("Un problème est survenu, merci de revenir plus tard.")
                }
            }
         }
    }, error, options);

}else{
    city = "Toulouse";
    whatWeather(city);
}

var options = {
    enableHighAccuracy: true
}

function error(){
    city =  "Palma";
    whatWeather(city);
}

// FIN GEOLOC _______


// CHOISIR UNE VILLE

let selectCity = document.querySelector("#changer");
selectCity.addEventListener('click', ()=>{
    city = prompt('Veuillez choisir une ville.')
    whatWeather(city);
});

function whatWeather(city){

    let key = "091b1b895c17db86c9b699e74fd1fbff"
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric';

    // Creer une requete
    let request = new XMLHttpRequest(); // Creer un objet
    request.open('GET',url); // premier parametre GET ou POST, deuxieme parametre l'URL
    request.responseType = 'json'; // on attend du JSON
    request.send(); // envoyer la requete

    //on execute une fonction des qu'on recoit une reponse
    request.onload = function(){
        if (request.readyState === XMLHttpRequest.DONE){ // si la requete est bien terminé
            if (request.status === 200) { // si la requete s'est bien passé
                let reply = request.response; // on stocke la reponse
                let temperature = reply.main.temp;
                let city = reply.name;
                document.querySelector("#ville").textContent = city;
                document.querySelector("#temperature_label").textContent = temperature;
            }
            else{
                alert("Un problème est survenu, merci de revenir plus tard.")
            }
        }
    }
}


