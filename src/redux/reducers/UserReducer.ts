import { AnyAction } from 'redux';
import { FAV, LOGIN, ONOF } from '../actions/UserActions';
import { UserType } from '../../types';

const key = 'users';
const local = JSON.parse(localStorage.getItem(key) as string);

const INITIAL_STATE = {
  users: localStorage.getItem(key) ? local : [],
};

const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN: {
      if (state.users
        .some((e: { name: string, password: number }) => e.name
        === action.payload.name && e.password === action.payload.password)) {
        return { ...state };
      }
      localStorage.setItem(key, JSON.stringify([...INITIAL_STATE.users, action.payload]));
      return {
        users: [...state.users, { ...action.payload }],
      };
    }
    case ONOF: {
      const user = action.payload;
      return {
        users: [...state.users.map((e:UserType) => ({ ...e, on: false }))
          .filter((e:UserType) => e.name !== user.name), { ...user, on: true }],
      };
    }
    case FAV: {
      const { song, user } = action.payload;
      return {
        users: [...state.users.filter((e: UserType) => e.name !== user.name),
          {
            user,
            favoritesSongs: [...user.favoriteSongs, song],
          }],
      };
    }
    default: return {
      ...state,
    };
  }
};

export default UserReducer;
