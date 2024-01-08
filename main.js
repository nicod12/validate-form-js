document.addEventListener('DOMContentLoaded', function () {


    const person = {
        name:'',
        email:'',
        password:''
    }

    const formulario = document.querySelector('.formulario')

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    const errorName = document.querySelector('#error_name')
    const errorEmail = document.querySelector('#error_email')
    const errorPassword = document.querySelector('#error_password')

    name.addEventListener('input', readText)
    email.addEventListener('input', readText)
    password.addEventListener('input', readText)


    formulario.addEventListener('submit', (e) => {

        e.preventDefault()


        const { name, email, password } = person

        if(!name || name.trim().length <= 3 || name.indexOf(' ') !== -1) {
            errorName.textContent = !name ? 'El campo no debe estar vacio' : 'Minimo 4 caracteres y sin espacios'

            setTimeout(() => {
                errorName.textContent = ''
            }, 3000);
            return
        }


        if(!validateEmail(email)) {
            errorEmail.textContent = 'El correo es obligatorio'

            setTimeout(() => {
                errorEmail.textContent = ''
            }, 3000);

            return
        }

        if(!password || password.trim().length <= 8 || password.indexOf(' ') !== -1) {
            errorPassword.textContent = !password ? 'El campo no debe estar vacio' : 'La contraseña debe tener minimo 8 caracteres y sin espacios'

            setTimeout(() => {
                errorPassword.textContent = ''
            }, 3000);
            return
        }

        console.log('Enviando formulario')
    })


    function validateEmail(email) {

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        return validRegex.test(email)
    }

    function readText(e) {
        person[e.target.id] = e.target.value
    }
})