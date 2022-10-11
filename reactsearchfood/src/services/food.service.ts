const baseUrl = "http://209.172.47.156";

export const searchFoodByValue = (value:string) => {
  return fetch(`${baseUrl}/search?value=${value}`)
    .then((res) => res.json());
};
