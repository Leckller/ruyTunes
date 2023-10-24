import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { GlobalState } from '../types';
import { reducer } from '../redux';

function renderWithRedux(
  component: JSX.Element,
  state: GlobalState | undefined = undefined,
  store = legacy_createStore(
    reducer,
    state,
    applyMiddleware(thunk),
  ),
) {
  const user = userEvent.setup();
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
    user,
  };
}

export default renderWithRedux;
