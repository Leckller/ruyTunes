import { AnyAction } from 'redux';
import { LOGIN } from '../actions/UserActions';

const INITIAL_STATE = {
  users: [
  ],
};

const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN: {
      if (state.users
        .some((e: { name: string, password: number }) => e.name
        === action.payload.name && e.password === action.payload.password)) {
        return { ...state };
      }
      return {
        users: [...state.users, action.payload],
      };
    }
    default: return {
      ...state,
    };
  }
};

export default UserReducer;
