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

export type UserType = {
  name: string;
  email: string;
  image: string;
  description: string;
};

export type SongType = {
  trackId: number,
  trackName: string,
  previewUrl: string,
  trackTimeMillis: number,
};

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
