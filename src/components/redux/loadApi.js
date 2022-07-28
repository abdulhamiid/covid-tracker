import axios from 'axios';

// Actions
const LOAD_DATA = 'LOAD_DATA';

const data = [];
// reducer
export default function loadDataReducer(state = data, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetchAction = (payload) => ({
  type: LOAD_DATA,
  payload,
});

/* eslint-disable camelcase */

// mission api
const url = 'https://disease.sh/v3/covid-19/countries';

export const fetchLoadedData = () => async (dispatch) => {
  const response = await axios.get(url);
  const { data } = response;
  const result = data.map((obj) => {
    const {
      country, continent, population, recovered, deaths, cases, countryInfo,
    } = obj;
    return {
      country,
      continent,
      population,
      recovered,
      deaths,
      cases,
      flag: countryInfo.flag,
    };
  });
  dispatch(fetchAction(result));
};
