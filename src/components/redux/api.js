import axios from 'axios';

// Actions
const FETCH_DATA = 'FETCH_DATA_FROM_API';

const covidData = [];
// reducer
export default function casesReducer(state = covidData, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetchDataFromApi = (payload) => ({
  type: FETCH_DATA,
  payload,
});

/* eslint-disable camelcase */

// mission api
const url = 'https://disease.sh/v3/covid-19/countries';

export const fetchData = (props) => async (dispatch) => {
  const response = await axios.get(url);
  const data = response.data.filter((item) => item.continent === props);
  const newData = data.map((item) => {
    const { country } = item;
    return {
      country,
    };
  });

  dispatch(fetchDataFromApi(newData));
};
