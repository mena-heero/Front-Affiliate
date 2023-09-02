import { CREATIVE_ENDPOINT, BRAND_ENDPOINT } from "~/utils/store/endpoints";
import {
  FETCH_CREATIVES,
  FETCH_BRANDS,
  FETCH_CREATIVE_DETAILS,
} from "../utils/store/action.names";
import {} from "../utils/store/mutation.names";
import {} from "../utils/store/getter.names";

import {} from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const actions = {
  async [FETCH_CREATIVES]({ commit, dispatch }, payload = {}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${CREATIVE_ENDPOINT}/${buildParams(payload)}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_BRANDS]({ commit, dispatch }, payload = {}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${BRAND_ENDPOINT}/`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_CREATIVE_DETAILS]({ commit, dispatch }, payload = {}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${CREATIVE_ENDPOINT}/get_creative/${buildParams(payload)}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
};
