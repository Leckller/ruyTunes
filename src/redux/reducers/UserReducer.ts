import { AnyAction } from 'redux';
import { LOGIN } from '../actions/UserActions';

const INITIAL_STATE = {
  users: [
    {
      name: '',
      password: '',
    },
  ],
};

const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN: {
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
