// Создайте HTML-форму и по нажатию на кнопку проверяйте
//  заполненность всех полей. Если останутся незаполненные поля 
//  — выводите предупреждение и не отправляйте форму.

document.addEventListener('DOMContentLoaded', () =>{
    let registerBtn = document.querySelector('.register-btn');

    registerBtn.addEventListener('click', checkFields);

    function checkFields() {
        let phoneInput = document.querySelector('.input-phone');
        let nameInput = document.querySelector('.input-name');
        let lastNameInput = document.querySelector('.input-lastname');
        let passwordInput = document.querySelector('.input-password');
        let allInputs = document.querySelectorAll('input');
        
        let status = true;
    
        allInputs.forEach(item => {
            if(!item.value) status = false
        })
    
        if(status) {
            const obj = {
                phone: phoneInput.value,
                name: nameInput.value,
                lastname: lastNameInput.value,
                password: passwordInput.value
            }
    
            console.log(obj);
        } else alert ('Заполните поля')
    
    }
})
