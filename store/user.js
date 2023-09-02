import { USERS_ENDPOINT } from "~/utils/store/endpoints";
import {
  SIGNIN,
  GET_TOKEN_FROM_LOCAL_STORE,
  PROFILE,
} from "../utils/store/action.names";
import {
  SET_TOKEN_ERROR,
  SET_TOKEN,
  SET_PROFILE,
} from "../utils/store/mutation.names";
import {
  GET_PROFILE,
  GET_AUTH_HEADER,
  GET_TOKEN,
} from "../utils/store/getter.names";

import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const state = () => ({
  user: {
    token: null,
    profile: null,
  },
  error: false,
});

export const getters = {
  [GET_PROFILE](state) {
    return state.user.profile;
  },
  [GET_TOKEN](state) {
    return state.user.token;
  },
  [GET_AUTH_HEADER](state) {
    if (state.user.token == null) return null;
    return { Authorization: `Token ${state.user.token}` };
  },
};

export const actions = {
  async [SIGNIN]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/affiliate_signin/`, payload)
        .then(({ data }) => {
          commit(SET_TOKEN, data.token);
          commit(SET_PROFILE, data);
          resolve(data);
        })
        .catch((e) => {
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        });
    });
  },
  async [GET_TOKEN_FROM_LOCAL_STORE]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      const localToken = this.$cookies.get("FLAGEDU_AFFILIATE_TOKEN");
      if (localToken != null) {
        commit(SET_TOKEN, localToken);
        resolve(localToken);
      } else {
        console.log("TOKEN FROM LOCAL STORE ERROR");
        reject();
      }
    });
  },
  async [PROFILE]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${USERS_ENDPOINT}/profile/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          if (data.user_type != 1) {
            commit(SET_TOKEN_ERROR);
          } else {
            commit(SET_PROFILE, data);
          }
          resolve(data);
        })
        .catch((e) => {
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        });
    });
  },
};

export const mutations = {
  [SET_TOKEN](state, token) {
    state.user.token = token;
    state.error = false;
    this.$cookies.set("FLAGEDU_AFFILIATE_TOKEN", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  },
  [SET_TOKEN_ERROR](state) {
    state.user.token = null;
    state.user.profile = null;
    state.error = true;
    this.$cookies.remove("FLAGEDU_AFFILIATE_TOKEN");
  },
  [SET_PROFILE](state, data) {
    state.user.profile = data;
  },
};
