//This is autogenerated code of javascript file

const URL = "https://en.wikipedia.org/w/api.php"; 

const params = {
    action: "query",
    format: "json",
    list: "alllinks",
    alnamespace: "0",
    alunique: "1"
}

URL = URL + "?origin=*";
Object.keys(params).forEach(key => URL = URL + "&" + key + "=" + params[key]);

fetch(URL)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error=>console.log(error))
