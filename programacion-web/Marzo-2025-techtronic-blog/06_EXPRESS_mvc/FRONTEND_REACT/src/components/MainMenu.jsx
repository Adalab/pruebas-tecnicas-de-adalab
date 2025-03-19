import IconHamburger from "../images/icons/hamburger.svg";

function MainMenu() {
  return (
    <nav className="relative md:min-w-90 md:flex-1">
      <label htmlFor="menu_mobile">
        <img
          className="md:hidden"
          width="24"
          height="24"
          src={IconHamburger}
          alt="Icono del menú hamburguesa"
        />
        <input className="hidden" type="checkbox" id="menu_mobile" />
      </label>
      <ul className="menu hidden fixed left-0 w-screen justify-evenly gap-1 py-2 bg-white md:relative md:flex md:w-full md:py-0">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Sobre nosotros</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
