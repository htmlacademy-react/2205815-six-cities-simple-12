import { Offers } from '../../types/offers';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';
import SortOptionList from '../../components/sort-options-list/sort-option-list';
import UserAuthCard from '../../components/user-auth-card/user-auth-card';

type MainScreenProps = {
  offers: Offers;
  sortOptions: string[];
}

function MainScreen({offers, sortOptions}: MainScreenProps): JSX.Element {
  const [offerId, setActivOfferId] = useState({id: 0});

  const setActiveOfferId = (id: number) => {
    setActivOfferId({...offerId, id: id});
  };

  const activeCity = useAppSelector((state) => state.city);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="six cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <UserAuthCard />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortOptionList sortOptions={sortOptions}/>
              {!offers.length ?
                <b>No Offers</b>
                :
                <OfferList offers={offers} cb={setActiveOfferId} />}
            </section>
            <div className="cities__right-section">
              <Map offers={offers} city={offers[0]} activeOfferId={offerId.id}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
