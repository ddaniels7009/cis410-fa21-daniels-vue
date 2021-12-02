import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    pictures: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storePictures(state, pictures) {
      state.pictures = pictures;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getPictures({ commit }) {
      axios.get("/pictures").then((aResponse) => {
        //console.log("response in /pictures", aResponse);
        commit("storePictures", aResponse.data[0]);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/person/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          localStorage.clear("token");
          localStorage.clear("expiration");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in loggins out");
        });
    },
    tryAutoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      if (now >= expirationDate) {
        return;
      }

      axios
        .get("/comments/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((theResponse) => {
          commit("storeUserInApp", theResponse.data);
          commit("storeTokenInApp", token);
          this.dispatch("setLogoutTimer");
        })
        .catch(() => {
          myRoutes.replace("/");
        });
    },
    setLogoutTimer({ dispatch }) {
      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      let timeLeft = expirationDate - now;
      setTimeout(() => {
        dispatch("logout");
      }, timeLeft);
    },
  },
});