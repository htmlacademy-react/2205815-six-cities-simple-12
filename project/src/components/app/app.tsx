import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Offer from '../offer/offer';
import { Offers } from '../../types/offers';

type AppScreenProops = {
  placesCount: number;
  offers: Offers;
}


function App({placesCount, offers}: AppScreenProops): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <MainScreen
              placesCount={placesCount}
              offers={offers}
            />
          }
        />
        <Route
          path='login'
          element={<LoginScreen/>}
        />
        <Route
          path='property'
          element={<PropertyScreen/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
        <Route
          path='offer/:id'
          element={<Offer offers={offers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
