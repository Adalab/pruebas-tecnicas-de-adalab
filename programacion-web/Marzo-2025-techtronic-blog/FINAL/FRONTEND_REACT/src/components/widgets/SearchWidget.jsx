import IconSearch from "../../images/icons/search.svg";

function SearchWidget() {
  return (
    <>
      <div className="px-6 pt-6">
        <h3 className="text-2xl font-semibold">Búsqueda</h3>
      </div>
      <div className="px-6 pt-6 flex gap-4">
        <input
          className="h-10 px-3 py-2 w-full rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Busca por título..."
        />
        <button className="h-10 w-10 flex justify-center items-center rounded-xl bg-background-secondary text-secondary hover:bg-background-secondary/80 cursor-pointer">
          <img
            className="w-6 h-6"
            src={IconSearch}
            width="24"
            height="24"
            alt="Icono de una lupa para buscar"
          />
        </button>
      </div>
    </>
  );
}

export default SearchWidget;
