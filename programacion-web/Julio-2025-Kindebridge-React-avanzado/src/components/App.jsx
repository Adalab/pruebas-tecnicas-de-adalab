import { useState, useEffect } from 'react';
import './App.css';

const normalizeKi = (ki) => {
  const kiValue =
    ki.toLowerCase() === 'unknown'
      ? 1000000000000000000000000000000n
      : parseInt(
          ki.replaceAll('.', '').replaceAll(',', '').replaceAll(' ', ''),
          10
        );

  return BigInt(kiValue);
};

// Función para "limpiar los datos" del API
// Recorre el array de objetos que devuelve el API
// y transforma cada objeto en otro con menos propiedades
// (solo las que usa la aplicacion) y con el ki
// transformado a BigInt.
const cleanData = (characters) => {
  return characters.map((eachCharacter) => ({
    id: eachCharacter.id,
    name: eachCharacter.name,
    race: eachCharacter.race,
    image: eachCharacter.image,
    description: eachCharacter.description,
    ki: normalizeKi(eachCharacter.ki),
  }));
};

// DEBOUNCE
let timeoutId;
const debounce = (callback, timeout = 1500) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    console.log('Debounced!!');
    callback();
  }, timeout);
};

// CACHE
const CACHE = {};
const isInCache = (name) => CACHE[name] !== undefined;
const getFromCache = (name) => CACHE[name];
const setIntoCache = (name, characters) => {
  CACHE[name] = characters;
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    min_ki: '',
    max_ki: '',
  });
  const [paginationData, setPaginationData] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const responseData = await fetch(
        'https://dragonball-api.com/api/characters'
      ).then((res) => res.json());

      const characters = cleanData(responseData.items);

      setCharacters(characters);
      setPaginationData(responseData.meta);
      setIntoCache('', characters);
    };

    const fetchFilteredCharacters = async () => {
      const responseData = await fetch(
        `https://dragonball-api.com/api/characters?name=${filters.name}`
      ).then((res) => res.json());

      const characters = cleanData(responseData);

      setCharacters(characters);
      setPaginationData(responseData.meta);
      setIntoCache(filters.name, characters);
    };

    // Cuando cambia el valor del filtro del nombre
    // se hace debounce: se espera unos milisegundos
    // antes de lanzar el fetch. Si en ese tiempo la
    // usuaria escribe otra letra en el nombre,
    // se cancela el fetch y se espera otra vez unos
    // milisegundos antes de lanzar otro.

    debounce(() => {
      if (isInCache(filters.name)) {
        setCharacters(getFromCache(filters.name));
      } else if (filters.name === '') {
        fetchAllCharacters();
      } else {
        fetchFilteredCharacters();
      }
    });
  }, [filters.name]);

  // Para tener controlados los componentes
  // del formulario de los filtros
  const handleInputFilter = (ev) => {
    const { name, value } = ev.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Cuando se pulsa en un número de página de la paginación
  const handleClickPage = async ({ target }) => {
    const { page } = target.dataset;

    if (isInCache('#' + page)) {
      setCharacters(getFromCache('#' + page));
      return;
    }

    // Fetch por página
    const responseData = await fetch(
      `https://dragonball-api.com/api/characters?page=${page}`
    ).then((res) => res.json());

    const characters = cleanData(responseData.items);

    setCharacters(characters);
    setPaginationData(responseData.meta);
    setIntoCache('#' + page, characters);
  };

  // Se genera un array con números consecutivos
  // para renderizar los botones a las páginas
  // de la paginación de los resultados
  const pagesArray = Array.from(
    { length: paginationData?.totalPages || 0 },
    (_, idx) => 1 + idx
  );

  // Los personajes se filtran por nombre a través del API.
  // Con este filter, se filtran por un rango que ki.
  const filteredCharacters = characters.filter(
    (eachCharacter) =>
      (filters.min_ki === '' || eachCharacter.ki > BigInt(filters.min_ki)) &&
      (filters.max_ki === '' || eachCharacter.ki < BigInt(filters.max_ki))
  );

  return (
    <div className='page'>
      <header className='header rubik'>
        <h1 className='title'>Colección de cromos de Dragon Ball</h1>
      </header>

      <main className='main'>
        <form className='filters card'>
          <h2 className='title'>Filtra los personajes</h2>
          <fieldset className='filters__list'>
            <div className='input__line'>
              <label className='input__label' htmlFor='filter-name'>
                Filtrar por nombre
              </label>
              <input
                className='input__text'
                id='filter-name'
                placeholder='Ej. Goku'
                type='text'
                name='name'
                onInput={handleInputFilter}
                value={filters.name}
              />
            </div>
            <div className='input__line'>
              <label className='input__label' htmlFor='filter-ki-min'>
                Filtrar por Ki
              </label>
              <div className='filter__double'>
                <label htmlFor='filter-ki-min'>entre</label>
                <input
                  className='input__text'
                  id='filter-ki-min'
                  placeholder='Ej. 100'
                  type='number'
                  name='min_ki'
                  onInput={handleInputFilter}
                  value={filters.min_ki}
                />
                <label htmlFor='filter-ki-max'>y</label>
                <input
                  className='input__text'
                  id='filter-ki-max'
                  placeholder='Ej. 5000'
                  type='number'
                  name='max_ki'
                  onInput={handleInputFilter}
                  value={filters.max_ki}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <ul className='card__list characters'>
          {filteredCharacters.map((eachCharacter) => (
            <li className='card' key={eachCharacter.id}>
              <article className='character'>
                <img
                  className='card__img'
                  alt={`Picture of ${eachCharacter.name}`}
                  loading='lazy'
                  decoding='async'
                  width='200'
                  height='200'
                  src={eachCharacter.image}
                />
                <h3 className='card__title'>{eachCharacter.name}</h3>
                <p className='card__subtitle'>{eachCharacter.race}</p>
                <p className='card__ki'>Ki: {eachCharacter.ki}</p>
                <p className='card__text'>
                  {eachCharacter.description.split('.').at(0)}
                </p>
              </article>
            </li>
          ))}
        </ul>
        {paginationData && (
          <ul className='pagination'>
            {paginationData.currentPage > 1 && (
              <li>
                <button
                  className='button'
                  onClick={handleClickPage}
                  data-page={paginationData.currentPage - 1}
                >
                  &laquo;
                </button>
              </li>
            )}
            {pagesArray.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={
                    pageNumber === paginationData.currentPage
                      ? 'button highlighted'
                      : 'button'
                  }
                  onClick={handleClickPage}
                  data-page={pageNumber}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            {paginationData.currentPage < paginationData.totalPages && (
              <li>
                <button
                  className='button'
                  onClick={handleClickPage}
                  data-page={1 + paginationData.currentPage}
                >
                  &raquo;
                </button>
              </li>
            )}
          </ul>
        )}
      </main>
      <footer className='footer'>
        <small>&copy; 2025 Adalab</small>
      </footer>
    </div>
  );
}

export default App;
