import IconDate from "../../images/icons/date.svg";
import IconGo from "../../images/icons/go.svg";

function FeaturedArticleBrief() {
  return (
    <article className="p-6 rounded-lg border">
      <strong className="px-2 py-0.5 mr-4 bg-secondary text-background-secondary rounded-full text-xs font-semibold">
        Destacado
      </strong>
      <div className="inline-flex items-center gap-1 text-sm">
        <img
          className="inline h-3 w-3"
          width="24"
          height="24"
          src={IconDate}
          alt="Icono de un calendario para indicar la fecha"
        />
        <time dateTime="2025-02-04">Feb 4, 2025</time>
      </div>
      <h3 className="mt-4 text-2xl font-bold">
        El futuro de la tecnología wearable en 2025
      </h3>
      <p className="mt-2 p-4 rounded-md font-medium">
        La tecnología vestible evoluciona a un ritmo sin precedentes, con la
        aparición de nuevas innovaciones que prometen revolucionar la forma en
        que interactuamos con nuestros dispositivos y controlamos nuestra salud.
      </p>
      <a
        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-secondary"
        href="#"
      >
        Leer más
        <img
          className="inline h-3 w-3"
          width="24"
          height="24"
          src={IconGo}
          alt="Icono de ir al artículo"
        />
      </a>
    </article>
  );
}

export default FeaturedArticleBrief;
