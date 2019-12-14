let number = prompt('Введите номер телефона');
function validateTelephone(number) {
    var pattern = /(\+996)|0\(?\d{3}\)?(\d+\s?)+/;
    console.log(pattern.test(number));
}

validateTelephone(number);
