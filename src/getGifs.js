export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=MTfGHXxO8BFb4vRNfBGI0SgnJ7bGBMnT&q=${category}&limit=1`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,

    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
