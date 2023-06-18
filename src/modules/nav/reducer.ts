import produce, { Draft, Immutable } from 'immer';
import { setNavError, updateFiltersFromUrl } from './actions';

export type NavState = Immutable<{
  filters: Record<string, unknown>;
  prevFilters: Record<string, unknown>;
  error?: string | null;
}>;

const initialState: NavState = {
  filters: {},
  prevFilters: {},
  error: undefined,
};

export default produce((draft: Draft<NavState>, { type, payload }) => {
  switch (type) {
    case updateFiltersFromUrl.toString():
      draft.prevFilters = draft.filters;
      draft.filters = payload;
      break;
    case setNavError.toString():
      draft.error = payload;
      break;
    // no default
  }
}, initialState);
