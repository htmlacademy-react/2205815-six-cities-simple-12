import { useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offers';


type PlaceCardProps = {
  offer: Offer;
  cb: (id: number) => void;
}

function PlaceCard({offer, cb}: PlaceCardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <article
      onMouseOver={() => cb(offer.id)}

      className="cities__card place-card" id={String(offer.id)}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a onClick = {() => navigate(`offer/${offer.id}`)} href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: offer.rating * 14 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick = {() => navigate(`offer/${offer.id}`)} href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
