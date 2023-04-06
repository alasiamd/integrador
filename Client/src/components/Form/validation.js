export default function validation(inputs) {
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /^(?=\w*\d)\S{6,10}$/;
    const regexNum = /^(?=.*[a-z])(?=.*[0-9])/;

    if (!inputs.username) errors.username = 'El campo usuario no debe estar vacio!';
    if(!regexEmail.test(inputs.username)) errors.username = 'Debe ser un correo electrónico';
    if (inputs.username.length > 35) errors.username = 'No debe tener mas de 35 caracteres';

    if (!regexPass.test(inputs.password)) errors.password = 'La longitud válida es de 6 a 9 caracteres';
    if (!regexNum.test(inputs.password)) errors.password = 'Debe contener al menos un número';

    return errors;
}