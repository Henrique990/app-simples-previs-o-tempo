var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    var choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia, ou ao parque, e tome um sorvete.';
    } else if (choice === 'rainy') {
        para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva, e não fique muito tempo fora.';
    } else if (choice === 'snowing') {
        para.textContent = 'A neve está caindo , está congelando! Melhor ficar com uma xícara de chocolate quente ou construir um boneco de neve.';
    } else if (choice === 'overcast') {
        para.textContent = 'Não está chovendo, mas o céu está cinza e sombrio; pode virar a qualquer minuto, então leve uma capa de chuva para o caso.';
    } else {
        para.textContent = '';
    }
}
console.log(setWeather('sunny'))