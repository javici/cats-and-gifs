const API_URL = new URL('https://api.giphy.com/v1/gifs/search');
interface GifDTO {
  data: {
    images: {
      downsized: {
        url: string;
      };
    };
  }[];
}

export async function getGifUrl(query: string) {
  const searchParams = new URLSearchParams({
    api_key: import.meta.env.GIPHY_API_KEY,
    q: query,
    limit: '1',
  });

  return fetch(`${API_URL}?${searchParams}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(({ data }: GifDTO) => data[0].images.downsized.url);
}
