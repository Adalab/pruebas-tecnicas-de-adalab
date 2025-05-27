function isNotEmpty(text, field) {
  return text.trim().length === 0 && `El campo ${field} no puede quedar vacío`;
}

function isNotFullname(text, field) {
  return text.indexOf(' ') === -1 && `El campo ${field} debe tener al menos un nombre y un apellido`;
}

function isNotEmail(text, field) {
  return !/^.+@[^.]+\.[^.]+$/.test(text) && `El campo ${field} no parece un email válido`;
}

function isNotPhone(text, field) {
  return !/^\+?(\d.*){3,}$/.test(text) && `El campo ${field} no parece un teléfono correcto`;
}

function validateField(value, fieldName, validators=[]) {
  for( const validator of validators ) {
    const errorMessage = validator(value, fieldName);
    if( errorMessage ) {
      return errorMessage;
    }
  }
}

export {validateField, isNotEmpty, isNotFullname, isNotEmail, isNotPhone};