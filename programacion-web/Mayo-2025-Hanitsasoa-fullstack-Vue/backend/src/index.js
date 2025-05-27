const express = require("express");
const cors = require("cors");
const { validateField, isNotEmpty, isNotFullname, isNotEmail, isNotPhone } = require('./lib/validator');

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

  res.json({success:true});
});