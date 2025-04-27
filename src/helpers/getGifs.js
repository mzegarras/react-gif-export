//c32aS6ckKl3ldurBGC8pa6AaDxPDPw9f
  //https://api.giphy.com/v1/gifs/search?api_key=c32aS6ckKl3ldurBGC8pa6AaDxPDPw9f&q=goku&limit=25


  
export const getGifs = async(category) => {
  const limit=5
  const key = 'c32aS6ckKl3ldurBGC8pa6AaDxPDPw9f';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${category}&limit=${ limit }`
  const resp = await fetch(url);
  const {data} = await resp.json();
  
  const gifs1 = data.map( imagen=>({
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.downsized_medium.url
    }));

    return gifs1;
}