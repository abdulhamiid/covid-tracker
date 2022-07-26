import axios from 'axios';

// Actions
const FETCH_COUNTRY_CASE = 'FETCH_COUNTRY_CASE';

const countryData = [];
// reducer
export default function countryCasesReducer(state = countryData, action) {
  switch (action.type) {
    case FETCH_COUNTRY_CASE: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetchCountryCase = (payload) => ({
  type: FETCH_COUNTRY_CASE,
  payload,
});

/* eslint-disable camelcase */

// mission api
const url = 'https://disease.sh/v3/covid-19/countries';

export const fetchCountry = (props) => async (dispatch) => {
  const response = await axios.get(url);
  const data = response.data[props];
  console.log(data);
  function display() {
    const {
      country, population, recovered, totalDeaths, cases, countryInfo,
    } = data;
    return {
      country,
      population,
      recovered,
      totalDeaths,
      cases,
      countryInfo,
    };
  }
  dispatch(fetchCountryCase(display()));
};
