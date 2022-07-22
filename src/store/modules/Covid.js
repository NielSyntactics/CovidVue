import moment from "moment";

/* This is the API key that is used to access the weather API. */
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "39a010bd9dmsh633f803ccd87845p1b19b1jsn380f85551861",
    "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

/**
 * If the number is greater than 999 and less than 1 million, divide it by 1000 and add a K. If the
 * number is greater than 1 million, divide it by 1 million and add an M. If the number is less than
 * 900, just return the number
 * @param num - The number to be formatted.
 * @returns the number of followers in a format that is easy to read.
 */
function numFormatter(num) {
  if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
  }else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
  }else if(num < 900){
      return num; // if value < 1000, nothing to do
  }
}

/**
 * It takes a string, capitalizes the first letter, and lowercases the rest
 * @param string - The string to capitalize.
 * @returns The first letter of the string is being capitalized and the rest of the string is being
 * lowercased.
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const state = {
  data: {},
};

const getters = {
  getLocation: (state) =>
    Object.entries(state.data).length === 0 ? "" : state.data.data.location,
  getConfirmed: (state) =>
    Object.entries(state.data).length === 0 ? 0 : numFormatter(state.data.data.confirmed),
  getDeaths: (state) =>
    Object.entries(state.data).length === 0 ? 0 : numFormatter(state.data.data.deaths),
  getChecked: (state) =>
    Object.entries(state.data).length === 0 ? "" : moment(new Date(state.data.data.lastChecked)).format("LL"),
  getReported: (state) =>
    Object.entries(state.data).length === 0 ? "" : moment(new Date(state.data.data.lastReported)).format("LL"),
}

const mutations = {
  /* A mutation that is used to set the data. */
  Load_Covid_Data_API(state, data) {
    state.data = data;
  },
};

const actions = {
  /* This is an action that is used to load the COVID data from the API. */
  async loadCovidDataApi({ commit }, location) {
    try {
      const res = await fetch(
        `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${capitalize(location)}`,
        options
      );
      const data = await res.json();
      if (data.message == "OK") {
        commit("Load_Covid_Data_API", data);
        console.log(data);
      } else {
        commit("Load_Covid_Data_API", {});
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export const covid = {
  state,
  getters,
  mutations,
  actions,
};
