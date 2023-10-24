export const LOGIN = 'LOGIN';

export const login = (user: { name: string, password: string }) => ({
  type: LOGIN,
  payload: user,
});
