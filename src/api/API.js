const baseUrl = "https://services.surfline.com";
const forcastUrl = `${baseUrl}/kbyg/spots/forecasts`;
const reportUrl = `${baseUrl}/kbyg/spots/reports`;

const createParamString = (params) =>
  Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

export const fetchSpotTides = (spotId, days) => {
  return fetch(
    `${forcastUrl}/tides?${createParamString({ spotId, days })}`
  ).then((resp) => resp.json());
};

export const fetchSpotWaves = (
  spotId,
  days,
  intervalHours,
  maxHeights = false
) => {
  return fetch(
    `${forcastUrl}/wave?${createParamString({
      spotId,
      days,
      intervalHours,
      maxHeights,
    })}`
  ).then((resp) => resp.json());
};
export const fetchSpotWind = (spotId, days, intervalHours) => {
  return fetch(
    `${forcastUrl}/wind?${createParamString({
      spotId,
      days,
      intervalHours,
    })}`
  ).then((resp) => resp.json());
};

export const fetchSpotReport = (spotId) => {
  return fetch(`${reportUrl}?spotId=${spotId}`).then((resp) => resp.json());
};

export const fetchSearchQuery = (query) => {
  return fetch(
    `${baseUrl}/search/site?q=${query}&querySize=50&suggestionSize=50`
  ).then((resp) => resp.json());
};
