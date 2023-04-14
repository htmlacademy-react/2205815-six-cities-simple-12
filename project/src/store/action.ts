import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserPersonalData } from '../types/user-personal-data';

const cityChanger = createAction('cityChanger', (payload: {city: string}) => ({payload}));

const offersChangerByCity = createAction('offersChangerByCity');

const activeSortOption = createAction('activeSortOption', (payload: {option: string}) => ({payload}));

const loadOffers = createAction<Offers>('loadOffers');

const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

const setError = createAction<string | null>('setError');

const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

const setPersonalDataUser = createAction<UserPersonalData>('setEmailPersonalDataUser');

const redirectToRoute = createAction<string>('redirectToRoute');

export {cityChanger, offersChangerByCity, activeSortOption, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setPersonalDataUser, redirectToRoute};
