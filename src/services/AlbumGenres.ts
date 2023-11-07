import { AlbumType } from '../types';

const albumGenres = async (artist: string): Promise<AlbumType[]> => {
  const artistNameURL = encodeURI(artist);

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=allTrack&term=${artistNameURL}&attribute=genreIndex`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results }: { results: AlbumType[] } = await APIResponse.json();

  const response = results.map((artistInfo) => ({ ...artistInfo }));
  const replacePhotos = response.map((e) => ({
    ...e, artworkUrl100: e.artworkUrl100.replace('100x100', '200x200') }));
  console.log(replacePhotos);
  return replacePhotos;
};

export default albumGenres;
