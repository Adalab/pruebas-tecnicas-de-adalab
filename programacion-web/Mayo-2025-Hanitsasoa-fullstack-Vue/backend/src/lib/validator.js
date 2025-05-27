function isNotEmpty(text, field) {
  return typeof text === 'string' && text.trim().length === 0 && `Field ${field} cannot be empty`;
}

function isNotFullname(text, field) {
  return text.indexOf(' ') === -1 && `Field ${field} must have a first name and last name`;
}

function isNotEmail(text, field) {
  return !/^.+@[^.]+\.[^.]+$/.test(text) && `Field ${field} seems to contain an invalid email`;
}

function isNotPhone(text, field) {
  return !/^\+?(\d.*){3,}$/.test(text) && `Field ${field} seems to contain an invalid phone number`;
}

function validateField(value, fieldName, validators=[]) {
  for( const validator of validators ) {
    const errorMessage = validator(value, fieldName);
    if( errorMessage ) {
      return errorMessage;
    }
  }
}

module.exports = { validateField, isNotEmpty, isNotFullname, isNotEmail, isNotPhone };