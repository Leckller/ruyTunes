import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType, Dispatch, SongType, UserType } from '../../types';

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

export const SEARCH_ON_OFF = 'SEARCH_ON_OFF';

export const searchOnOf = () => ({
  type: SEARCH_ON_OFF,
});

export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchError = (search: string) => ({
  type: SEARCH_ERROR,
  payload: search,
});

export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export const searchComplete = (response: AlbumType[]) => ({
  type: SEARCH_COMPLETE,
  payload: response,
});

export const FETCH_SEARCH = 'FETCH_SEARCH';

export const fetchSearch = (pesquisa: string) => {
  return async (disp: Dispatch) => {
    disp(searchOnOf());
    try {
      const fetch = await searchAlbumsAPI(pesquisa);
      disp(searchComplete(fetch));
    } catch (error: any) {
      disp(searchError(error.message));
    }
  };
};

export const USER_EDIT = 'USER_EDIT';

export const userEdit = (user: UserType, edit: { name: string }) => ({
  type: USER_EDIT,
  payload: { user, edit },
});
