import React from 'react';
import {useParams} from 'react-router-dom';

type OfferProps = {
    offers: {
        id: number;
    }[];
}

function Offer(props: OfferProps): JSX.Element {
  const params = useParams();
  const offer = props.offers.find((off) => String(off.id) === params.id);

  return (
    <p>Now you see offer with id {offer?.id}</p>
  );
}

export default Offer;
