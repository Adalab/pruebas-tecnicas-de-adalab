/*
Ejercicio 4:
Desarrolle una función en lenguaje JavaScript. Esta función recibirá como parámetro un array de objetos con la información de estudiantes. En cada uno de estos objetos hay una propiedad con el nombre “teacher” y es probable que su valor se repita en distintos objetos.
La función debe devolver un objeto que agrupe los objetos de las estudiantes según la propiedad “teacher”. Los nombres de las propiedades del objeto devuelto serán los diferentes valores de “teacher” y el valor será un array con los objetos que cuenten con ese mismo valor.

Ejemplo:

Dado este array de estudiantes:
```js
const students = [
  {
    name: "Lucía Rodríguez",
    averageGrade: 8.7,
    teacher: "Yanelis"
  },
  {
    name: "Carla Mendoza",
    averageGrade: 7.2,
    teacher: "Ana"
  },
  {
    name: "Sofía Vega",
    averageGrade: 9.5,
    teacher: "Ana"
  },
  {
    name: "Elena Gutiérrez",
    averageGrade: 6.8,
    teacher: "Iván"
  },
  {
    name: "Jacinta Morales",
    averageGrade: 8.1,
    teacher: "Yanelis"
  },
  {
    name: "Isabel Ortega",
    averageGrade: 9.2,
    teacher: "Iván"
  }
];
```

Deberá devolver el siguiente objeto:
```js
{
  "Yanelis": [
    {
      name: "Lucía Rodríguez",
      averageGrade: 8.7,
      teacher: "Yanelis"
    },
    {
      name: "Jacinta Morales",
      averageGrade: 8.1,
      teacher: "Yanelis"
    }
  ],
  "Ana": [
    {
      name: "Carla Mendoza",
      averageGrade: 7.2,
      teacher: "Ana"
    },
    {
      name: "Sofía Vega",
      averageGrade: 9.5,
      teacher: "Ana"
    }
  ],
  "Iván": [
    {
      name: "Elena Gutiérrez",
      averageGrade: 6.8,
      teacher: "Iván"
    },
    {
      name: "Isabel Ortega",
      averageGrade: 9.2,
      teacher: "Iván"
    }
  ]
}
```
*/


function groupStudentsByTeacher( studentsList ) {
  const groups = {};

  for( const student of studentsList ) {
    if( !groups[student.teacher] ) {
      groups[student.teacher] = [];
    }

    groups[student.teacher].push(student);
  }


  return groups;
}




const students = [
  {
    name: "Lucía Rodríguez",
    averageGrade: 8.7,
    teacher: "Yanelis"
  },
  {
    name: "Carla Mendoza",
    averageGrade: 7.2,
    teacher: "Ana"
  },
  {
    name: "Sofía Vega",
    averageGrade: 9.5,
    teacher: "Ana"
  },
  {
    name: "Elena Gutiérrez",
    averageGrade: 6.8,
    teacher: "Iván"
  },
  {
    name: "Jacinta Morales",
    averageGrade: 8.1,
    teacher: "Yanelis"
  },
  {
    name: "Isabel Ortega",
    averageGrade: 9.2,
    teacher: "Iván"
  }
];

console.log( JSON.stringify(groupStudentsByTeacher(students), null, 2) );
