import type  Product  from "@/types/ProductType";
import type  StateFormat  from "@/types/StateFormat";

export const mutations = {
    SET_FASHIONS_DATA(state: StateFormat, payload: Product[]) {
      state.fashions = payload
    },
    // UPDATE_SPECIFIC_DATA(state, { index, payload }) {
    //   Vue.set(state.allData, index, payload)
    // },
  }