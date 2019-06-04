const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
const apiURI = _isDev ? 'http://localhost:8083/api/' : `/api/`;

export const environment = {

  production: false,
  apiKey: "51c4d4824dbf0cd82bbf67911cfe7c14",
  apiUrl: "https://developers.zomato.com/api/v2.1/cuisines?city_id=280&",
  BASE_URI: getHost(),
  BASE_API: apiURI
 
};