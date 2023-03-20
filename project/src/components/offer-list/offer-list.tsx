import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';


type OfferListProps = {
    offers: Offers;
}


function OfferList({offers}: OfferListProps): JSX.Element {
  const [offerId, setActivOfferId] = useState({id: 0});

  const setActiveOfferId = (id: number) => {
    setActivOfferId({...offerId, id: id});
  };


  return (
    <div
      className="cities__places-list places__list tabs__content"
    >
      {offers.map((offer) => <PlaceCard cb={setActiveOfferId} offer={offer} key={offer.id} />)}
    </div>
  );
}

export default OfferList;
