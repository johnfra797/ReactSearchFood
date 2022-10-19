const baseUrl = "https://apisearch.vcservices-cfapis.net/";

export const searchFoodByValue = (value:string) => {
  return fetch(`${baseUrl}/search?value=${value}`)
    .then((res) => res.json());
};