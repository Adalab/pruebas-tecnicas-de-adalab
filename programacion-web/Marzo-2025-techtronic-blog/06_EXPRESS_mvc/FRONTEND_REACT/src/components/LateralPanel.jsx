import CategoriesWidget from './widgets/CategoriesWidget';
import SearchWidget from './widgets/SearchWidget';
import WeatherWidget from './widgets/WeatherWidget';

function LateralPanel() {
  return (
    <aside>
      <SearchWidget />
      <WeatherWidget />
      <CategoriesWidget />
    </aside>
  );
}

export default LateralPanel;