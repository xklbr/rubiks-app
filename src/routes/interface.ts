/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnifiedRoutine } from 'redux-saga-routines';
import { ActionFunctionAny, Action } from 'redux-actions';

type RouteAction = UnifiedRoutine | ActionFunctionAny<Action<any>>;

type Routes = {
  path: string;
  component: React.ElementType;
  name?: string;
  exact?: boolean;
  privated?: boolean;
  published?: boolean;
  actions?: RouteAction[];
  routes?: Routes[];
  defaultFilters?: Record<string, unknown>;
};

export default Routes;
export type { Routes, RouteAction };
