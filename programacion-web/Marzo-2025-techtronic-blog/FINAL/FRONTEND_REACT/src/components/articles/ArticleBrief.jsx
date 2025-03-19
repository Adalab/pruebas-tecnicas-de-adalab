import IconDate from "../../images/icons/date.svg";
import IconGo from "../../images/icons/go.svg";

function ArticleBrief() {
  return (
    <article className="p-6 rounded-lg border">
      <strong className="px-2 py-0.5 mr-4 bg-background-secondary text-secondary rounded-full text-xs font-bold">
        Smartphones
      </strong>
      <div className="inline-flex items-center gap-1 text-sm text-secondary">
        <img
          className="inline h-3 w-3"
          width="24"
          height="24"
          src={IconDate}
          alt="Icono de un calendario para indicar la fecha"
        />
        <time dateTime="2024-06-02">Jun 2, 2024</time>
      </div>
      <h3 className="mt-4 text-2xl font-bold">
        Los 5 mejores smartphones de 2024: Un análisis exhaustivo
      </h3>
      <p className="mt-2 p-4 rounded-md font-medium">
        Hemos probado los últimos smartphones insignia para ayudarte a hacer una
        decisión informada sobre tu próxima compra.
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

export default ArticleBrief;
