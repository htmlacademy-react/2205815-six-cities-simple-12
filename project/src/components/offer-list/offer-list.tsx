import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';


type OfferListProps = {
    offers: Offers;
}


function OfferList({offers}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} />)}
    </div>
  );
}

export default OfferList;
