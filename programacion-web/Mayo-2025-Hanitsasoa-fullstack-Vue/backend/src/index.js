const express = require("express");
const cors = require("cors");
const { v7: uuidv7 } = require("uuid");
const { validateField, isNotEmpty, isNotFullname, isNotEmail, isNotPhone } = require('./lib/validator')

// Configurar Express
const server = express();

server.use(cors());
server.use(express.json()); // Solo hace falta si vamos a hacer un API

// Arrancar el servidor

const port = process.env["PORT"] || 4000; // 1025 - 65535

server.listen(port, () => {
  console.log(`Server listening at <http://localhost:${port}>`);
});

server.get("/", (req, res) => {
  res.send("It works");
});

const MANDATORY_FIELDS_VALIDATIONS = {
  'fullname': [isNotEmpty, isNotFullname],
  'email': [isNotEmpty, isNotEmail],
  'phone': [isNotEmpty, isNotPhone],
  'message': [isNotEmpty]
};

const MANDATORY_FIELDS = Object.keys(MANDATORY_FIELDS_VALIDATIONS);

const formResponses = [];

server.post("/api/form", (req, res) => {
  if( !req.body || typeof req.body !== 'object' ) {
    return res.status(400).json({success: false, error: "No data found"})
  }

  if( !MANDATORY_FIELDS.every(field => Object.keys(req.body).includes(field)) ) {
    return res.status(400).json({success: false, error: "Mandatory fields are missing", description: `Required: ${MANDATORY_FIELDS.join(', ')}; received: (${Object.keys(req.body).join(', ')}))`});
  }

  const errors = []
  
  MANDATORY_FIELDS.forEach(fieldName => {
    const error = validateField(req.body[fieldName], fieldName, MANDATORY_FIELDS_VALIDATIONS[fieldName]);
    if(error) {
      errors.push(error);
    }
  });

  if( errors.length > 0 ) {
    return res.status(400).json({success: false, error: "Mandatory fields have no value", description: errors.join('. ')})
  }

  const dataObject = {
    id: uuidv7(),
    createdAt: (new Date()).toISOString(),
    fullname: req.body.fullname.trim(),
    email: req.body.email.trim(),
    phone: req.body.phone.trim(),
    message: req.body.message.trim(),
  };

  const existentResponse = formResponses.find(r => r.email === dataObject.email || r.phone === dataObject.phone);

  if( existentResponse ) {
    const errorDescription = `Response with the same ${existentResponse.email === dataObject.email ? 'email' : 'phone'} found in the server`;
    return res.status(409).json({success: false, error: 'Response already exists', description: errorDescription})
  }

  formResponses.push(dataObject);

  res.json({success: true, data: dataObject, count: formResponses.length })
})