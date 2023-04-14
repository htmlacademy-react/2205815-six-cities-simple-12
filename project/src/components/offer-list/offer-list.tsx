import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
    offers: Offers;
    cb: (id: number) => void;
    isNearPlaceCard?: boolean;
}


function OfferList({offers, cb, isNearPlaceCard}: OfferListProps): JSX.Element {
  return (
    <div
      className={isNearPlaceCard ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}
    >
      {offers.map((offer) => <PlaceCard cb={cb} offer={offer} key={offer.id} isNearPlaceCard={isNearPlaceCard}/>)}
    </div>
  );
}

export default OfferList;
