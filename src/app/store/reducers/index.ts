import { ActionReducerMap } from '@ngrx/store';
import { reducer, AppReducerState } from './appReducer';

interface AppState {
  appReducer: AppReducerState;
}

export const reducers: ActionReducerMap <AppState> = {
  appReducer: reducer
};
