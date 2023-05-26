export default function validation(inputs) {
    const errors = {};

    const regexEmail = /\S+@\S+\.\S+/;
    
    const regexPass = new RegExp("[0-9]");

    if (!regexEmail.test(inputs.username)) {
        errors.username = "Nombre debe ser un email valido!";
    }

    if (!inputs.username) {
        errors.username = "Campo obligatorio!";
    }

    if (inputs.username.length > 35) {
        errors.username = "El nombre es demasiado largo!";
    }

    if (!regexPass.test(inputs.password)) {
        errors.password = "Debe tener al menos un numero!";
    }

    if (inputs.password.length < 6 || inputs.password.length > 10 ) {
        errors.password = "Debe tener entre 6 y 10 caracteres!";
    }
    
    return errors;
}