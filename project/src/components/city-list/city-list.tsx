import CityCard from '../city-card/city-card';
import { store } from '../../store';

function CityList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {store.getState().cities.map((element) => <CityCard key={element} city={element} />)}
    </ul>
  );
}

export default CityList;
