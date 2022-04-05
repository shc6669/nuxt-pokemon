import Vuex from "vuex";
import { config } from "vuex-module-decorators"

import ApiModule from "@/store/modules/ApiModule"

config.rawError = true;

const store = new Vuex.Store({
    modules: {
        ApiModule
    },
});
  
// export default store;