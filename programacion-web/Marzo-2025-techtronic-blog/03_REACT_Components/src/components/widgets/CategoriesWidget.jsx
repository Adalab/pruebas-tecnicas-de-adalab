import PropTypes from "prop-types";

import IconSmartphone from "../../images/icons/smartphone.svg?react";
import IconLaptop from "../../images/icons/laptop.svg?react";
import IconSmarthome from "../../images/icons/smarthome.svg?react";
import IconWearable from "../../images/icons/wearable.svg?react";

const CATEGORIES = [
  {
    name: "Smartphones",
    icon: "smartphone",
    count: 24,
  },
  {
    name: "Portátiles & ordenadores",
    icon: "laptop",
    count: 18,
  },
  {
    name: "Smarthome",
    icon: "smarthome",
    count: 12,
  },
  {
    name: "Wearables",
    icon: "wearable",
    count: 9,
  },
];

function CategoriesWidget() {
  return (
    <div className="px-6 pt-6">
      <section className="p-6 rounded-xl border">
        <h3 className="text-2xl font-semibold">Categorías</h3>

        <CategoriesList categories={CATEGORIES} />
      </section>
    </div>
  );
}

function CategoriesList({ categories }) {
  return (
    <ul className="pt-6 mx-2 grid gap-4">
      {categories.map((cat) => (
        <li key={cat.name}>
          <CategoriesItem {...cat} />
        </li>
      ))}
    </ul>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};

function CategoriesItem({ name, icon, count }) {

  const getIcon = ( icon ) => {
    if( icon === "smartphone" ) {
      return <IconSmartphone className="w-4 h-4 stroke-current"
      width="16"
      height="16"
      alt="Icono de un smartphone"/>;
    }
    if( icon === "laptop" ) {
      return <IconLaptop className="w-4 h-4 stroke-current"
      width="16"
      height="16"
      alt="Icono de un portátil" />
    }
    if( icon === "smarthome" ) {
      return <IconSmarthome className="w-4 h-4 stroke-current"
      width="16"
      height="16"
      alt="Icono de uan casa" />
    }
    if( icon === "wearable" ) {
      return <IconWearable className="w-4 h-4 stroke-current"
      width="16"
      height="16"
      alt="Icono de una flecha apuntando a un sol" />
    }
  };

  return (
    <a href="#" className="grid grid-cols-[2rem_1fr_2.5rem] items-center">
      {getIcon(icon)}
      <span>{name}</span>
      <span className="block py-1 pr-3 bg-background-secondary text-secondary rounded-full text-xs font-bold text-right">
        {count}
      </span>
    </a>
  );
}

CategoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  count: PropTypes.number.isRequired,
};

export default CategoriesWidget;
