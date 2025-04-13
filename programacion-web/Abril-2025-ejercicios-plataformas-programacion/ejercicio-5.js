/*
Ejercicio 5:

Se necesita que haga una función que reciba como parámetro un objeto que representa una carpeta de un proyecto. Ese objeto tiene las propiedades:
- name
- children
- type

La propiedad name es un string. La propiedad type es un string que puede tomar los valores “directory” o “file”. La propiedad children será un array de objetos del mismo tipo que el expuesto.
El objeto inicial del parámetro siempre será de tipo “directory”. Puede haber varios niveles de profundidad en la estructura (es decir, puede haber un objeto en children que sea de tipo “directory” y tenga a su vez otros children).

Se desea que la función escriba en la consola (o en la terminal) el listado de todos los contenidos de la carpeta de proyecto indentados.
*/

const projectStructure = {
  name: 'proyecto-web',
  type: 'directory',
  children: [
    {
      name: 'index.html',
      type: 'file',
      size: '15KB'
    },
    {
      name: 'css',
      type: 'directory',
      children: [
        {
          name: 'styles.css',
          type: 'file',
          size: '5KB'
        },
        {
          name: 'responsive.css',
          type: 'file',
          size: '3KB'
        }
      ]
    },
    {
      name: 'js',
      type: 'directory',
      children: [
        {
          name: 'app.js',
          type: 'file',
          size: '10KB'
        },
        {
          name: 'utils',
          type: 'directory',
          children: [
            {
              name: 'helpers.js',
              type: 'file',
              size: '3KB'
            }
          ]
        }
      ]
    },
    {
      name: 'assets',
      type: 'directory',
      children: [
        {
          name: 'images',
          type: 'directory',
          children: [
            {
              name: 'logo.png',
              type: 'file',
              size: '20KB'
            }
          ]
        }
      ]
    }
  ]
};

function printTree( structure, indent='' ) {
  console.log(indent+structure.name);

  if( structure.type === 'directory' ) {
    for( const children of structure.children ) {
      printTree( children, '  '+indent );
    }
  }
}

printTree( projectStructure );

/*
proyecto-web
  index.html
  css
    styles.css
    responsive.css
  js
    app.js
    utils
      helpers.js
  assets
    images
      logo.png
*/
