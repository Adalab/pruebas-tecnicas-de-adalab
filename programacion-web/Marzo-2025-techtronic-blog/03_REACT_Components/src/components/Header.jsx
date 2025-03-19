import MainMenu from './MainMenu';

import ImgLogo from "../images/corp/logo.svg";

function Header() {
  return (
    <header className="relative flex justify-between items-center p-4 border-b md:gap-8 xl:mx-40 2xl:mx-80">
      <a
        className="px-2 py-1 bg-secondary text-background-secondary rounded-md text-sm font-medium md:order-1"
        href="#"
      >
        Tienda
      </a>
      <h1 className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 md:flex-1">
        <img
          className="inline mr-2"
          width="24"
          height="24"
          src={ImgLogo}
          alt="Logo de TechTronic que es como un símbolo de un relámpago con el centro hueco"
        />
        Blog de TechTronic
      </h1>
      <MainMenu />
    </header>
  );
}

export default Header;
