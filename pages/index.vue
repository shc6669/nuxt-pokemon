<template>
    <div class="rn-product-area rn-section-gapTop">
        <div class="container">
            <div class="row g-5 rn-section-gapBottom">
                <!-- start pokemons -->
                <div v-for="(pokemon, index) in pokemons.results" :key="index" 
                    data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" 
                    class="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                >
                    <div class="product-style-one no-overlay">
                        <div class="card-thumbnail">
                            <n-link :to="`/details/${pokemon.id}`">
                                <img :src="imagePreviewUrl + pokemon.id +'.png'" :alt="pokemon.name">
                            </n-link>
                        </div>
                        <n-link :to="`/details/${pokemon.id}`">
                            <span class="product-name">
                                {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
                            </span>
                        </n-link>
                    </div>
                </div>
                <!-- end pokemons -->
            </div>

            <!-- start pagination -->
            <div class="row rn-section-gapBottom">
                <div class="col-lg-12" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800">
                    <nav class="pagination-wrapper" aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" v-if="pokemons.previous" @click="previousButton">
                                    Previous
                                </a>
                            </li>
                            <!-- <li class="page-item"><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                            <li class="page-item">
                                <a class="page-link" href="#" v-if="pokemons.next" @click="nextButton">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- end pagination  -->
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, useFetch, useStore, useContext, useAsync, ref } from '@nuxtjs/composition-api';
import { Actions } from "@/store/enums/StoreEnums"
import { createStore } from '~/store'

export default defineComponent({
    name: 'Page-Index',
    setup() {
        const imagePreviewUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
        const url = '/api/pokemon?limit=30&offset=0';
        
        const { $axios } = useContext();
        // const store = useStore();
        const pokemons = ref(null)
        useFetch(async () => {
            pokemons.value = await $axios.$get(url)
            .then((pokemons) => {
                const foo = [];
                pokemons.results.forEach((pokemon) => {
                    pokemon.id = pokemon.url
                        .split("/")
                        .filter((part) => {
                            return !!part;
                        })
                        .pop();
                    foo.push(pokemon);
                })

                return pokemons;
            })
        })

        // const pokemons = computed(() => {
        //     return apiStore.getters.allPokemons;
        // });

        // useFetch(async () => {
        //     store.dispatch(Actions.GET_ALL_POKEMON, {
        //         urlPage: url,
        //         params: queryParams
        //     })
        // })

        // const nextButton = () => {
        //     const nextUrl = store.getters.nextPokemons;
        //     store.dispatch(Actions.GET_ALL_POKEMON, {
        //         urlPage: nextUrl,
        //         params: null
        //     });
        // }

        // const previousButton = () => {
        //     const prevUrl = store.getters.prevPokemons;
        //     store.dispatch(Actions.GET_ALL_POKEMON, {
        //         urlPage: prevUrl,
        //         params: null
        //     });
        // }

        return {
            imagePreviewUrl,
            // nextButton,
            pokemons
            // previousButton
        };
    },
})
</script>
