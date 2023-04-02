import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import reviews from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';


const Setting = {
  PlacesCount: 312,
  reviews: reviews
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={Setting.reviews}
      />
    </Provider>
  </React.StrictMode>,
);
