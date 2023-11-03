import { SongType, UserType } from '../../types';

export const LOGIN = 'LOGIN';

export const login = (user: UserType) => ({
  type: LOGIN,
  payload: user,
});

export const FAV = 'FAV';

export const fav = (song: SongType, user: UserType) => ({
  type: FAV,
  payload: {
    song,
    user,
  },
});

export const ONOF = 'ONOF';

export const onOf = (user: UserType) => (
  {
    type: ONOF,
    payload: user,
  }
);
