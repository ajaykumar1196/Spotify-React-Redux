export const trackArtists = artists => {
  const trackArtistsObject = artists.map(artist => {
    return {
      name: artist.name,
      id: artist.id
    };
  });
  return trackArtistsObject;
};
