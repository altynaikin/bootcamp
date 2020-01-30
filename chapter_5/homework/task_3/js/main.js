$(document).ready(function () {
let country = "japan";


function setup() {
let api = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => res.json())
    .then(data => {
        $('#name').html(data[0].name);
        $('#region').html(data[0].region);
        $('#subregion').html(data[0].subregion);
        $('#capital').html(data[0].capital);
        $('#flag').css('background', `url(${data[0].flag}) no-repeat`)
        $('#flag').css('background-size', 'contain')
        
        
    })
}

setup()

})