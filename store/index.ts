import Vuex from 'vuex'
import ApiModule from '~/store/modules/ApiModule'
import { config } from "vuex-module-decorators"

config.rawError = true

export function createStore() {
    return new Vuex.Store({
        modules: {
            ApiModule,
        }
    })
}