import {createAction} from '@reduxjs/toolkit';

const cityChanger = createAction('cityChanger', (payload: {city: string}) => ({payload}));

const offersChangerByCity = createAction('offersChangerByCity');

export {cityChanger, offersChangerByCity};
