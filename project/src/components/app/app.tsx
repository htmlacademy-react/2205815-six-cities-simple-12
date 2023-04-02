import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Offer from '../offer/offer';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';

type AppScreenProops = {
  reviews: Reviews;
}


function App({reviews}: AppScreenProops): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <MainScreen
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
    </BrowserRouter>
  );
}

export default App;
