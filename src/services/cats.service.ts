interface CatFactDTO {
  fact: string;
  length: number;
}

export async function getCatFact() {
  return fetch('https://catfact.ninja/fact')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((data: CatFactDTO) => data.fact);
}
