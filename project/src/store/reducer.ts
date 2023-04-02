import {createReducer} from '@reduxjs/toolkit';
import { cityChanger, offersChangerByCity } from './action';
import offers from '../mocks/offers';

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const initialState = {
  cities: cities,
  city: cities[0],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChanger, (state, action) => {
      state.city = action.payload.city;
    });
  builder
    .addCase(offersChangerByCity, (state) => {
      state.offers = initialState.offers.filter((offer) => offer.city.name === state.city);
    });


});

export {reducer};
