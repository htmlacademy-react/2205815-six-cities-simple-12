import {createReducer} from '@reduxjs/toolkit';
import { cityChanger, offersChangerByCity, activeSortOption, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setPersonalDataUser} from './action';
import { CITIES, SORT_OPTIONS, AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';
import { UserPersonalData } from '../types/user-personal-data';

const emptyPersonalData = {
  'avatarUrl': '',
  'email': '',
  'id': 0,
  'isPro': true,
  'name': '',
  'token': ''
};

type initialStateType = {
  cities: string[];
  city: string;
  offers: Offers;
  activeSortOption: string;
  sortOptions: string[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  userPersonalData: UserPersonalData;
}

const initialState: initialStateType = {
  cities: CITIES,
  city: CITIES[0],
  offers: [],
  activeSortOption: 'Popular',
  sortOptions: SORT_OPTIONS,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  userPersonalData: emptyPersonalData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChanger, (state, action) => {
      state.city = action.payload.city;
    });
  builder
    .addCase(offersChangerByCity, (state) => {
      state.offers = state.offers.filter((offer) => offer.city.name === state.city);
    });
  builder
    .addCase(activeSortOption, (state, action) => {
      state.activeSortOption = action.payload.option;
      switch(action.payload.option) {
        case 'Popular':
          state.offers = state.offers.filter((offer) => offer.city.name === state.city);
          break;
        case 'Price: low to high':
          state.offers.sort((a,b) => a.price - b.price);
          break;
        case 'Price: high to low':
          state.offers.sort((a,b) => b.price - a.price);
          break;
        case 'Top rated first':
          state.offers.sort((a,b) => b.rating - a.rating);
          break;
      }
    });
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
  builder
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
  builder
    .addCase(setPersonalDataUser, (state, action) => {
      state.userPersonalData = action.payload;
    });
});

export {reducer};
