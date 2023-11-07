import { AlbumType, SongType } from '../types';

const getMusics = async (id: string): Promise<[AlbumType, ...SongType[]]> => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  console.log(requestJson.results);
  const replaceImage = requestJson.results.map((
    e:[AlbumType, ...SongType[]],
    i: number,
  ) => {
    if (i === 0) {
      return { ...e, artworkUrl100: e.artworkUrl100.replace('100x100', '200x200') };
    } return e;
  });
  return replaceImage;
};

export default getMusics;
