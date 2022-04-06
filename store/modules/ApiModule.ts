import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface DataIndex {
    count: string;
    next: string;
    previous: string;
    result: Array<string>;
}

export interface PokemonDetails {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<string>;
    forms: Array<string>;
    game_indices: Array<string>;
    held_items: Array<string>;
    location_area_encounters: string;
    moves: Array<string>;
    past_types: Array<string>;
    sprites: any,
    species: {
        name: string
    };
    types: Array<string>;
}

@Module({
    name: 'apimodule',
    stateFactory: true,
    namespaced: true,
})
class ApiModule extends VuexModule {
    nextUrl = '';
    prevUrl = '';
    pokemons = {} as DataIndex;
    pokemon = {} as PokemonDetails;
    urlPage = 'pokemon';

    /**
    * Get current pokemons object
    * @returns Pokemons
    */
    get allPokemons(): DataIndex {
        return this.pokemons;
    }

    /**
    * Get current pokemons next object
    * @returns Pokemons
    */
    get nextPokemons() {
        return this.nextUrl;
    }

    /**
    * Get current pokemons previous object
    * @returns Pokemons
    */
    get prevPokemons() {
        return this.prevUrl;
    }

    /**
    * Get current pokemons object
    * @returns Pokemons
    */
    get pokemonDetail(): PokemonDetails {
        return this.pokemon;
    }

    @Action
    [Actions.GET_ALL_POKEMON](payload: any) {
        console.log('this start');
        const { urlPage, params } = payload;
        return ApiService.queryAll(urlPage, {params})
        .then(({ data }) => {
            this.context.commit(Mutations.SET_VALUE_POKEMONS, data);
            const pokemons = data;
            const foo: string[] = [];
            pokemons.results.forEach((pokemon: any) => {
                pokemon.id = pokemon.url
                    .split("/")
                    .filter((part: any) => {
                        return !!part;
                    })
                    .pop();
                foo.push(pokemon);
            })
        })
        .catch(({ response }) => {
            this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    }

    @Action
    [Actions.GET_DETAIL_POKEMON](payload: any) {
        const { pokemonId } = payload;
        return ApiService.getDetail(this.urlPage, pokemonId)
        .then(({ data }) => {
            this.context.commit(Mutations.SET_VALUE_POKEMON, data);
        })
        .catch(({ response }) => {
            this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    }

    @Mutation
    [Mutations.SET_VALUE_POKEMONS](pokemons: any) {
        this.pokemons = pokemons;
        this.nextUrl = pokemons.next;
        this.prevUrl = pokemons.previous;
    }

    @Mutation
    [Mutations.SET_VALUE_POKEMON](pokemon: any) {
        this.pokemon = pokemon;
    }
}

export default ApiModule;