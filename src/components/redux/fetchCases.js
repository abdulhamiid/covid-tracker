import axios from 'axios';

// Actions
const FETCH_CASE = 'FETCH_CASE';

const cases = [];
// reducer
export default function countryCasesReducer(state = cases, action) {
  switch (action.type) {
    case FETCH_CASE: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetchCase = (payload) => ({
  type: FETCH_CASE,
  payload,
});

/* eslint-disable camelcase */

// mission api
const url = 'https://disease.sh/v3/covid-19/countries';

export const fetchCountry = (continent, id) => async (dispatch) => {
  const response = await axios.get(url);
  const data = response.data.filter((item) => item.continent === continent);
  const getCountryData = data[id];
  function display() {
    const {
      country, continent, population, recovered, deaths, cases, countryInfo,
    } = getCountryData;
    return {
      country,
      continent,
      population,
      recovered,
      deaths,
      cases,
      flagURL: countryInfo.flag,
    };
  }
  dispatch(fetchCase(display()));
};
