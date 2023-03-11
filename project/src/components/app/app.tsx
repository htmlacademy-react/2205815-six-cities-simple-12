import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Offer from '../offer/offer';

type AppScreenProops = {
  placesCount: number;
}


function App({placesCount}: AppScreenProops): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainScreen placesCount={placesCount} />}
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
          element={<Offer offers={[{id:1}, {id:2}, {id:3}]} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
