import { AnyAction } from 'redux';
import { SEARCH_ERROR, SEARCH_ON_OFF } from '../actions/UserActions';

const initialState = {
  loading: false,
  lastSearch: [],
  actualSearch: [],
};

const ApiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_ON_OFF: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case SEARCH_ERROR: {
      return {
        ...state,
        actualSearch: 'error',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default ApiReducer;
