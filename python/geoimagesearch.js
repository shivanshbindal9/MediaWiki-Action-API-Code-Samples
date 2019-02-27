//This is autogenerated code of javascript file

const URL = "https://en.wikipedia.org/w/api.php"; 

const params = {
    action: "query",
    generator: "geosearch",
    prop: "coordinates|pageimages",
    ggscoord: "37.7891838|-122.4033522",
    format: "json"
}

URL = URL + "?origin=*";
Object.keys(params).forEach(key => URL = URL + "&" + key + "=" + params[key]);

fetch(URL)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error=>console.log(error))
