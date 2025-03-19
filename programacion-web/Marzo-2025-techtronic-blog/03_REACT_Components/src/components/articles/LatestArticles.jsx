import ArticleList from './ArticleList';

import IconGo from "../../images/icons/go.svg";

function LatestArticles() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Últimos artículos</h2>
      <p>
        Mantente actualizado con las últimas noticias y novedades del mundo de
        la electrónica
      </p>
      <ArticleList />
      <div className="flex justify-center">
        <button className="h-10 px-4 py-2 border border-input bg-background-secondary text-secondary rounded-md text-sm font-medium whitespace-nowrap cursor-pointer">
          Más artículos
          <img
            className="inline ml-2 w-4 h-4"
            width="24"
            height="24"
            src={IconGo}
            alt="Icono de ir a más artículos"
          />
        </button>
      </div>
    </section>
  );
}

export default LatestArticles;
