import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type GlobalState = {
  UserReducer: {
    users: {
      name: string,
      password: string,
    }[]
  },
  Apis: {
    lastSearch: { xd: string }[],
    actualSearch: { xd: string }[],
  }
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
