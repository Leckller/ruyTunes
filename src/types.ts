import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type AlbumType = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
  primaryGenreName: string,
};

export type SongType = {
  trackId: number,
  trackName: string,
  previewUrl: string,
  trackTimeMillis: number,
};

export type AlbumUserType = {
  infos: {
    name: string,
    image: string,
    alt: string,
    path: string,
  },
  songs: SongType[],
};

export type UserType = {
  name: string,
  password: string,
  favoriteSongs: SongType[],
  image: string,
  on: boolean,
  albums: AlbumUserType[],
};

export type GlobalState = {
  UserReducer: {
    users: UserType[]
  },
  ApiReducer: {
    loading: boolean,
    lastSearch: AlbumType[],
    actualSearch: AlbumType[],
  }
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
