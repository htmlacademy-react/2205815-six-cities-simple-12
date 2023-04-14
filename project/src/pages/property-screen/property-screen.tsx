/* eslint-disable jsx-a11y/img-redundant-alt */

import { Offer } from '../../types/offers';
import PropertyImages from '../../components/property-image/property-images';
import PropertDescription from '../../components/property-description/property-description';
import PropertyHost from '../../components/property-host/property-host';
import { Reviews } from '../../types/reviews';
import PropertyReviews from '../../components/property-review/property-review';
import CommentSubmitForm from '../../components/comment-submit-form/comment-submit-form';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import OfferList from '../../components/offer-list/offer-list';

type PropertyScreenProps = {
  offer: Offer;
  reviews: Reviews;
}

function PropertyScreen({offer, reviews}: PropertyScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <div className="page">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property" />
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image) => <PropertyImages image={image} key={image}/>)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <PropertDescription offer={offer}/>
            <PropertyHost offer={offer}/>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ul className="reviews__list">
                {reviews.map((review) => <PropertyReviews review={review} key={review.id} />)}
              </ul>
              <CommentSubmitForm />
            </section>
          </div>
        </div>
        <Map offers={offers} city={offers[0]} activeOfferId={offer.id} isPropertyScreenMap/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OfferList offers={Array.from(offers.filter((item) => item.id !== offer.id))} cb={() => ''} isNearPlaceCard/>

        </section>
      </div>
    </div>
  );
}

export default PropertyScreen;
