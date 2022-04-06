import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ApiModule from "@/store/modules/ApiModule"

let apiStore: ApiModule

function initialiseStores(store: Store<any>): void {
    apiStore = getModule(ApiModule, store)
}

export { initialiseStores, apiStore }