import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import { Routes, Route } from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Offer from '../offer/offer';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProops = {
  reviews: Reviews;
}


function App({reviews}: AppScreenProops): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOfferDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const offers = useAppSelector((state) => state.offers);
  const sortOptions = useAppSelector((state) => state.sortOptions);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path='/'
          element={
            <MainScreen
              offers={offers}
              sortOptions={sortOptions}
            />
          }
        />
        <Route
          path='login'
          element={<LoginScreen/>}
        />
        <Route
          path='property'
          element={<PropertyScreen offer={offers[0]} reviews={reviews} />}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
        <Route
          path='offer/:id'
          element={<Offer offers={offers} reviews={reviews}/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
