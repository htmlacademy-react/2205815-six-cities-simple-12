import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';


const Setting = {
  PlacesCount: 312,
  offers: offers,
  reviews: reviews
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      offers={Setting.offers}
      reviews={Setting.reviews}
    />
  </React.StrictMode>,
);
