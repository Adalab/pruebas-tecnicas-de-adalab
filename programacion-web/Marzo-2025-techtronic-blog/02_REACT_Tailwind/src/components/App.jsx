import ImgLogo from "../images/corp/logo.svg";
import IconHamburger from "../images/icons/hamburger.svg";
import IconDate from "../images/icons/date.svg";
import IconGo from "../images/icons/go.svg";
import IconSearch from "../images/icons/search.svg";
import IconWeatherSunny from "../images/weather/sunny.svg?react";
import IconWeatherCloudy from "../images/weather/cloudy.svg?react";
import IconSmartphone from "../images/icons/smartphone.svg?react";
import IconLaptop from "../images/icons/laptop.svg?react";
import IconSmarthome from "../images/icons/smarthome.svg?react";
import IconWearable from "../images/icons/wearable.svg?react";

import "../styles/App.css";

function App() {
  return (
    <>
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
      </header>
      <main className="mx-8 py-8 md:py-12 xl:mx-40 2xl:mx-80 md:grid md:grid-cols-[1fr_368px]">
    <section className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Últimos artículos</h2>
      <p>Mantente actualizado con las últimas noticias y novedades del mundo de la electrónica</p>
      <ol>
        <li className="flex flex-col space-y-6">
          <article className="p-6 rounded-lg border">
            <strong className="px-2 py-0.5 mr-4 bg-secondary text-background-secondary rounded-full text-xs font-semibold">Destacado</strong>
            <div className="inline-flex items-center gap-1 text-sm">
              <img className="inline h-3 w-3" width="24" height="24" src={IconDate} alt="Icono de un calendario para indicar la fecha" />
              <time dateTime="2025-02-04">Feb 4, 2025</time>
            </div>
            <h3 className="mt-4 text-2xl font-bold">El futuro de la tecnología wearable en 2025</h3>
            <p className="mt-2 p-4 rounded-md font-medium">
              La tecnología vestible evoluciona a un ritmo sin precedentes, con la aparición de nuevas innovaciones que
              prometen revolucionar la forma en que interactuamos con nuestros dispositivos y controlamos nuestra salud.
            </p>
            <a className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-secondary" href="#">
              Leer más
              <img className="inline h-3 w-3" width="24" height="24" src={IconGo} alt="Icono de ir al artículo" />
            </a>
          </article>

          <article className="p-6 rounded-lg border">
            <strong className="px-2 py-0.5 mr-4 bg-background-secondary text-secondary rounded-full text-xs font-bold">Smartphones</strong>
            <div className="inline-flex items-center gap-1 text-sm text-secondary">
              <img className="inline h-3 w-3" width="24" height="24" src={IconDate} alt="Icono de un calendario para indicar la fecha" />
              <time dateTime="2024-06-02">Jun 2, 2024</time>
            </div>
            <h3 className="mt-4 text-2xl font-bold">Los 5 mejores smartphones de 2024: Un análisis exhaustivo</h3>
            <p className="mt-2 p-4 rounded-md font-medium">
              Hemos probado los últimos smartphones insignia para ayudarte a hacer una decisión informada sobre tu próxima compra.
            </p>
            <a className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-secondary" href="#">
              Leer más
              <img className="inline h-3 w-3" width="24" height="24" src={IconGo} alt="Icono de ir al artículo" />
            </a>
          </article>
        </li>
      </ol>
      <div className="flex justify-center">
        <button className="h-10 px-4 py-2 border border-input bg-background-secondary text-secondary rounded-md text-sm font-medium whitespace-nowrap cursor-pointer">
          Más artículos
          <img className="inline ml-2 w-4 h-4" width="24" height="24" src={IconGo} alt="Icono de ir a más artículos" />
        </button>
      </div>
    </section>
    <aside>
      <div className="px-6 pt-6">
        <h3 className="text-2xl font-semibold">Búsqueda</h3>
      </div>
      <div className="px-6 pt-6 flex gap-4">
        <input
          className="h-10 px-3 py-2 w-full rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Busca por título..." />
        <button
        className="h-10 w-10 flex justify-center items-center rounded-xl bg-background-secondary text-secondary hover:bg-background-secondary/80 cursor-pointer">
          <img className="w-6 h-6" src={IconSearch} width="24" height="24" alt="Icono de una lupa para buscar" />
        </button>
      </div>

      <div className="px-6 pt-6"> {/* Widget Meteo */}
        <div className="p-6 rounded-xl border-0 bg-secondary text-background-secondary shadow-xl md:aspect-video md:overflow-hidden hover:aspect-auto">
          <h2 className="text-2xl font-light">Sevilla</h2>
          <p className="flex justify-between items-baseline text-sm opacity-70">
            <span>miércoles, 19 de marzo</span>
            <span>7:00 PM</span>
          </p>
          <section className="flex justify-between mt-4 mb-8">
            <div className="flex items-start gap-2 pr-8">
              <picture className="w-auto aspect-square inline-block p-3 rounded-full bg-highlight/20">
                <IconWeatherSunny className="w-8 h-8 stroke-current" width="24" height="24" alt="Icono indicando tiempo soleado" />
              </picture>
              <div className="flex flex-col">
                <h3 className="text-sm opacity-70">Soleado</h3>
                <strong className="text-4xl font-light">24º</strong>
              </div>
            </div>
            <section className="border-l border-l-background/10 pl-8 text-end">
              <h4 className="text-sm opacity-70">Sensación</h4>
              <strong className="text-lg font-light">23º</strong>
            </section>
          </section>
          <section className="mt-8 mb-4">
            <h3 className="text-xs opacity-70 uppercase">Previsión</h3>
            <ol className="mt-4 grid grid-cols-2 gap-4">
              <li className="px-2 py-4 rounded-xl bg-highlight/20 flex justify-between items-center">
                <div>
                  <h4 className="text-white text-sm font-medium leading-none">8:00 PM</h4>
                  <span className="text-xs leading-none opacity-70">Soleado</span>
                </div>
                <span className="text-lg font-medium">24º</span>
                <IconWeatherSunny className="w-5 h-5 stroke-current" width="16" height="16" alt="Icono indicando tiempo soleado" />
              </li>
              <li className="px-2 py-4 rounded-xl bg-white/5 flex justify-between items-center">
                <div>
                  <h4 className="text-white text-sm font-medium leading-none">9:00 PM</h4>
                  <span className="text-xs leading-none opacity-70">Nuboso</span>
                </div>
                <span className="text-lg font-medium">21º</span>
                <IconWeatherCloudy className="w-5 h-5 stroke-current" width="16" height="16" alt="Icono indicando tiempo soleado" />
              </li>
            </ol>
          </section>
        </div>
      </div> {/* END-Widget Meteo */}

      <div className="px-6 pt-6"> {/* Widget categories */}
        <section className="p-6 rounded-xl border">
          <h3 className="text-2xl font-semibold">Categorías</h3>

          <ul className="pt-6 mx-2 grid gap-4">
            <li>
              <a href="#" className="grid grid-cols-[2rem_1fr_2.5rem] items-center">
                <IconSmartphone className="w-4 h-4 stroke-current" width="16" height="16" alt="Icono de un smartphone" />
                <span>Smartphones</span>
                <span className="block py-1 pr-3 bg-background-secondary text-secondary rounded-full text-xs font-bold text-right">24</span>
              </a>
            </li>
            <li>
              <a href="#" className="grid grid-cols-[2rem_1fr_2.5rem] items-center">
              <IconLaptop className="w-4 h-4 stroke-current" width="16" height="16" alt="Icono de un portátil" />
                <span>Portátiles &amp; ordenadores</span>
                <span className="block py-1 pr-3 bg-background-secondary text-secondary rounded-full text-xs font-bold text-right">18</span>
              </a>
            </li>
            <li>
              <a href="#" className="grid grid-cols-[2rem_1fr_2.5rem] items-center">
              <IconSmarthome className="w-4 h-4 stroke-current" width="16" height="16" alt="Icono de un smartphone" /> 
                <span>Smarthome</span>
                <span className="block py-1 pr-3 bg-background-secondary text-secondary rounded-full text-xs font-bold text-right">12</span>
              </a>
            </li>
            <li>
              <a href="#" className="grid grid-cols-[2rem_1fr_2.5rem] items-center">
              <IconWearable className="w-4 h-4 stroke-current" width="16" height="16" alt="Icono de una flecha apuntando a un sol" /> 
                <span>Wearables</span>
                <span className="block py-1 pr-3 bg-background-secondary text-secondary rounded-full text-xs font-bold text-right">9</span>
              </a>
            </li>
          </ul>

          
          
          
          
        </section>
      </div>

{/* <!-- WIDGET2 --> 
 <div className="p-6">
<div className="rounded-lg w-full max-w-md mx-auto overflow-hidden bg-[#1a1a2e] text-white border-0 shadow-xl aspect-video hover:aspect-auto transition-all transition-duration-150" data-v0-t="card">
  <div className="h-full p-6 flex flex-col">
    <div className="mb-6">
      <h2 className="text-2xl font-light tracking-wide">Madrid</h2><div className="flex justify-between items-baseline"><p className="text-sm opacity-70">miércoles, 5 de marzo</p><p className="text-sm opacity-70">5:58 PM</p></div></div><div className="flex items-center justify-between mb-8"><div className="flex items-center gap-3"><div className="bg-[#4d4dff]/20 p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun text-white"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></div><div><p className="text-sm opacity-70 capitalize">sunny</p><p className="text-4xl font-light">24°</p></div></div><div className="h-16 w-[1px] bg-white/10"></div><div className="text-right"><p className="text-sm opacity-70">Sensación</p><p className="text-xl font-light">23°</p></div></div><div className="mt-auto"><h3 className="text-xs uppercase tracking-wider opacity-70 mb-3">Previsión</h3><div className="grid grid-cols-2 gap-4"><div className="rounded-xl p-4 flex items-center justify-between transition-all bg-[#4d4dff]/20"><div><p className="text-sm font-medium">5:00 PM</p><p className="text-xs opacity-70 capitalize">sunny</p></div><div className="flex items-center gap-2"><span className="text-lg font-light">24°</span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun text-white"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></div></div><div className="rounded-xl p-4 flex items-center justify-between transition-all bg-white/5 hover:bg-white/10"><div><p className="text-sm font-medium">6:00 PM</p><p className="text-xs opacity-70 capitalize">cloudy</p></div><div className="flex items-center gap-2"><span className="text-lg font-light">22°</span></div></div></div></div></div></div>
</div>
 <!-- END WIDGET2 --> */}
{/*
<div className="m-6 rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="text-2xl font-semibold leading-none tracking-tight">Categorías</h3>
  </div>
  <div className="p-6 pt-0 grid gap-2"><a href="#"
      className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
      <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" className="lucide lucide-smartphone h-4 w-4">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg><span>Smartphones</span></div>
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        data-v0-t="badge">24</div>
    </a><a href="#" className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
      <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" className="lucide lucide-laptop h-4 w-4">
          <path
            d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16">
          </path>
        </svg><span>Portátiles &amp; Ordenadores</span></div>
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        data-v0-t="badge">18</div>
    </a><a href="#" className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
      <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" className="lucide lucide-cpu h-4 w-4">
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <rect width="6" height="6" x="9" y="9" rx="1"></rect>
          <path d="M15 2v2"></path>
          <path d="M15 20v2"></path>
          <path d="M2 15h2"></path>
          <path d="M2 9h2"></path>
          <path d="M20 15h2"></path>
          <path d="M20 9h2"></path>
          <path d="M9 2v2"></path>
          <path d="M9 20v2"></path>
        </svg><span>Smart Home</span></div>
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        data-v0-t="badge">12</div>
    </a><a href="#" className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
      <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" className="h-4 w-4">
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 1.41 1.41"></path>
          <path d="M2 18h2"></path>
          <path d="M20 18h2"></path>
          <path d="m19.07 10.93-1.41 1.41"></path>
          <path d="M22 22H2"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M16 18a4 4 0 0 0-8 0"></path>
        </svg><span>Wearables</span></div>
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        data-v0-t="badge">9</div>
    </a></div>
</div>
*/}
    </aside>
  </main>
  <footer className="flex justify-center items-center p-4 border-t md:gap-8 xl:mx-40 2xl:mx-80">
    <p className="mx-8 text-center text-sm text-muted-foreground">
      &copy; 2025 TechTronic. All rights reserved.
    </p>
  </footer>
    </>
  );
}

export default App;
