// import moment from "moment";

/* This is the API key that is used to access the weather API. */
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.VUE_APP_API_KEY,
    "X-RapidAPI-Host": process.env.VUE_APP_API_HOST,
  },
};

const state = {
  data: {},
};

const getters = {
  getLocation: (state) =>
    Object.entries(state.data).length === 0 ? "" : state.data.data.location,
  getConfirmed: (state) =>
    Object.entries(state.data).length === 0 ? 0 : state.data.data.confirmed,
  getDeaths: (state) =>
    Object.entries(state.data).length === 0 ? 0 : state.data.data.deaths,
  getChecked: (state) =>
    Object.entries(state.data).length === 0 ? "" : state.data.data.lastChecked,
  getReported: (state) =>
    Object.entries(state.data).length === 0 ? "" : state.data.data.lastReported,
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
        `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${location}`,
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
