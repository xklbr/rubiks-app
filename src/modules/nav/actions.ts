import { createAction } from 'redux-actions';
import {
  NAV_SET_ERROR,
  NAV_SET_URL_FILTERS,
  NAV_UPDATE_URL_FILTERS,
} from './types';

export const setUrlFilters = createAction(NAV_SET_URL_FILTERS);
export const updateFiltersFromUrl = createAction(NAV_UPDATE_URL_FILTERS);
export const setNavError = createAction(NAV_SET_ERROR);
