import { EVEST_ENDPOINT } from "~/utils/store/endpoints";
import { EVEST_SIGNUP } from "../utils/store/action.names";

import { namespaced, buildParams } from "../utils/utils";

export const actions = {
  async [EVEST_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EVEST_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          // Check if the API response contains a login_url
          if (data && data.login_url) {
            // Redirect to the login_url
            window.location.href = data.login_url;
          } else {
            // Handle the case where login_url is not present in the response
            reject(new Error("Login URL not found in the API response"));
          }
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
};
