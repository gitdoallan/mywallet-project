const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export async function fetchApi() {
  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return result;
}

export async function fetchApiKey() {
  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return Object.keys(result);
}

export async function fetchApiFiltered() {
  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return Object.keys(result).filter((e) => e !== 'USDT');
}
