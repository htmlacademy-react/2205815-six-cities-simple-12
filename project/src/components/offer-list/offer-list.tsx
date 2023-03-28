import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
    offers: Offers;
    cb: (id: number) => void;
}


function OfferList({offers, cb}: OfferListProps): JSX.Element {
  return (
    <div
      className="cities__places-list places__list tabs__content"
    >
      {offers.map((offer) => <PlaceCard cb={cb} offer={offer} key={offer.id} />)}
    </div>
  );
}

export default OfferList;
