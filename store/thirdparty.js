import { EVEST_ENDPOINT } from "~/utils/store/endpoints";
import { EVEST_SIGNUP } from "../utils/store/action.names";

import { namespaced, buildParams } from "../utils/utils";

export const actions = {
  async [EVEST_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EVEST_ENDPOINT}/signup/`, payload)
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
