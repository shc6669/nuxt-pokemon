<template>
    <div>
        <!-- start pokemon detail -->
            <div class="product-details-area rn-section-gapTop">
                <div class="container">
                    <div class="row g-5 rn-section-gapBottom">
                        <!-- product image area -->
                        <div class="col-lg-7 col-md-12 col-sm-12">
                            <div class="product-tab-wrapper rbt-sticky-top-adjust">
                                <div class="pd-tab-inner">
                                    <div class="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                            <span class="rn-pd-sm-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl + pokemon.id +'.png'" :alt="pokemon.name" />
                                            </span>
                                        </button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                            <span class="rn-pd-sm-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl2 + pokemon.id +'.png'" :alt="pokemon.name" />
                                            </span>
                                        </button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                            <span class="rn-pd-sm-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl3 + pokemon.id +'.svg'" :alt="pokemon.name" />
                                            </span>
                                        </button>
                                    </div>

                                    <div class="tab-content rn-pd-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div class="rn-pd-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl + pokemon.id +'.png'" :alt="pokemon.name" />
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div class="rn-pd-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl2 + pokemon.id +'.png'" :alt="pokemon.name" />
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <div class="rn-pd-thumbnail">
                                                <img v-if="pokemon.id" :src="imagePreviewUrl3 + pokemon.id +'.svg'" :alt="pokemon.name" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- product image area end -->

                        <div class="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                            <div class="rn-pd-content-area">
                                <div class="pd-title-area">
                                    <h4 class="title" v-if="pokemon.name">
                                        {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
                                    </h4>
                                </div>
                                <h6 class="title-name">
                                    Types
                                </h6>
                                <div class="catagory-collection">
                                    <div class="catagory" v-for="(info, index) in pokemon.types" :key="index">
                                        <div class="top-stats-inner-one">
                                            <div class="top-stats-wrapper">
                                                <div class="thumbnail">
                                                    <a href="#">
                                                        <img v-if="info.type.name === 'bug'" src="~/assets/images/icons/duotune/abstract/abs041.svg" alt="bug">
                                                        <img v-if="info.type.name === 'fairy'" src="~/assets/images/icons/duotune/abstract/abs024.svg" alt="fairy">
                                                        <img v-if="info.type.name === 'fire'" src="~/assets/images/icons/duotune/abstract/abs002.svg" alt="fire">
                                                        <img v-if="info.type.name === 'fighting'" src="~/assets/images/icons/duotune/abstract/abs037.svg" alt="fighting">
                                                        <img v-if="info.type.name === 'flying'" src="~/assets/images/icons/duotune/abstract/abs025.svg" alt="flying">
                                                        <img v-if="info.type.name === 'electric'" src="~/assets/images/icons/duotune/abstract/abs023.svg" alt="electric">
                                                        <img v-if="info.type.name === 'grass'" src="~/assets/images/icons/duotune/abstract/abs047.svg" alt="grass">
                                                        <img v-if="info.type.name === 'ghost'" src="~/assets/images/icons/duotune/abstract/abs014.svg" alt="ghost">
                                                        <img v-if="info.type.name === 'ground'" src="~/assets/images/icons/duotune/abstract/abs027.svg" alt="ground">
                                                        <img v-if="info.type.name === 'ice'" src="~/assets/images/icons/duotune/abstract/abs052.svg" alt="ice">
                                                        <img v-if="info.type.name === 'normal'" src="~/assets/images/icons/duotune/abstract/abs015.svg" alt="normal">
                                                        <img v-if="info.type.name === 'poison'" src="~/assets/images/icons/duotune/abstract/abs012.svg" alt="poison">
                                                        <img v-if="info.type.name === 'psychic'" src="~/assets/images/icons/duotune/abstract/abs013.svg" alt="psychic">
                                                        <img v-if="info.type.name === 'rock'" src="~/assets/images/icons/duotune/abstract/abs050.svg" alt="rock">
                                                        <img v-if="info.type.name === 'steel'" src="~/assets/images/icons/duotune/abstract/abs010.svg" alt="steel">
                                                        <img v-if="info.type.name === 'water'" src="~/assets/images/icons/duotune/abstract/abs017.svg" alt="water">
                                                    </a>
                                                </div>
                                                <div class="top-stats-content">
                                                    <a href="#">
                                                        <h6 class="name">
                                                            {{ info.type.name.charAt(0).toUpperCase() + info.type.name.slice(1) }}
                                                        </h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rn-bid-details">
                                    <div class="tab-wrapper-one">
                                        <nav class="tab-button-one">
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button class="nav-link" id="nav-stats-tab" data-bs-toggle="tab" data-bs-target="#nav-stats" type="button" role="tab" aria-controls="nav-stats" aria-selected="false">Stats</button>
                                                <button class="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-details" aria-selected="true">Details</button>
                                                <button class="nav-link" id="nav-moves-tab" data-bs-toggle="tab" data-bs-target="#nav-moves" type="button" role="tab" aria-controls="nav-moves" aria-selected="false">Moves</button>
                                            </div>
                                        </nav>
                                        <div class="tab-content rn-bid-content" id="nav-tabContent">
                                            <div class="tab-pane fade" id="nav-stats" role="tabpanel" aria-labelledby="nav-stats-tab">
                                                <!-- start stats tab -->
                                                <div class="top-stats-inner-one" v-for="(state, i) in pokemon.stats" :key="i">
                                                    <div class="top-stats-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#">
                                                                <img src="~/assets/images/icons/duotune/abstract/abs052.svg" alt="stats-thumbnail">
                                                            </a>
                                                        </div>
                                                        <div class="top-stats-content">
                                                            <span>
                                                                <a href="#">
                                                                    {{ state.stat.name }}
                                                                </a>
                                                            </span>
                                                            <span class="count-number">
                                                                {{ state.base_stat }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end stats tab -->
                                            </div>
                                            <div class="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                                                <!-- start details tab -->
                                                <div class="rn-pd-bd-wrapper">
                                                    <div class="top-stats-inner-one" v-if="pokemon.species">
                                                        <h6 class="name-title">
                                                            Species
                                                        </h6>
                                                        <div class="top-stats-wrapper">
                                                            <div class="thumbnail">
                                                                <a href="#">
                                                                    <img src="~/assets/images/icons/duotune/abstract/abs049.svg" alt="species">
                                                                </a>
                                                            </div>
                                                            <div class="top-stats-content">
                                                                <a href="#">
                                                                    <h6 class="name">
                                                                        {{pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}}
                                                                    </h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- start property -->
                                                    <div class="rn-pd-sm-property-wrapper">
                                                        <h6 class="pd-property-title">
                                                            Property
                                                        </h6>
                                                        <div class="property-wrapper">
                                                            <!-- single property start -->
                                                            <div class="pd-property-inner" v-if="pokemon.height">
                                                                <span class="color-body type">HEIGHT</span>
                                                                <span class="color-white value">{{pokemon.height}} (cm)</span>
                                                            </div>
                                                            <!-- single property end -->
                                                            <!-- single property start -->
                                                            <div class="pd-property-inner" v-if="pokemon.weight">
                                                                <span class="color-body type">WEIGHT</span>
                                                                <span class="color-white value">{{pokemon.weight}} (gram)</span>
                                                            </div>
                                                            <!-- single property end -->
                                                        </div>
                                                    </div>
                                                    <!-- end property  -->
                                                    <!-- start abilities -->
                                                    <div class="rn-pd-sm-property-wrapper">
                                                        <h6 class="pd-property-title">
                                                            Abilities
                                                        </h6>
                                                        <div class="catagory-wrapper">
                                                            <div class="pd-property-inner" v-for="(list, index) in pokemon.abilities" :key="index">
                                                                <span class="color-body type">ABILITY</span>
                                                                <span class="color-white value">{{list.ability.name.charAt(0).toUpperCase() + list.ability.name.slice(1)}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- end abilities -->
                                                </div>
                                                <!-- end details tab -->
                                            </div>
                                            <div class="tab-pane fade" id="nav-moves" role="tabpanel" aria-labelledby="nav-moves-tab">
                                                <!-- start moves tab -->
                                                <div class="top-stats-inner-one" v-for="(move, i) in pokemon.moves" :key="i">
                                                    <div class="top-stats-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#">
                                                                <img src="~/assets/images/icons/duotune/abstract/abs051.svg" alt="moves-thumbnail">
                                                            </a>
                                                        </div>
                                                        <div class="top-stats-content">
                                                            <span>
                                                                <a href="#">
                                                                    {{ move.move.name }}
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end moves tab -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <!-- end pokemon detail -->
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, useFetch, useStore, useContext, useAsync, ref } from '@nuxtjs/composition-api';
import { Actions } from "@/store/enums/StoreEnums"
import { createStore } from '~/store'

export default defineComponent({
    name: 'Page-Details',
    setup() {
        // const store = useStore();
        const { $axios, params } = useContext();
        const imagePreviewUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
        const imagePreviewUrl2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
        const imagePreviewUrl3 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
        const url = `/api/pokemon/${params.value.id}`;
        const pokemon = ref({});
        
        useFetch(async () => {
            pokemon.value = await $axios.$get(url);
        })

        // const pokemon = computed(() => {
        //     return store.getters.pokemonDetail;
        // });

        // useFetch(async () => {
        //     store.dispatch(Actions.GET_DETAIL_POKEMON, {
        //         pokemonId: props.id
        //     })
        // })
        
        return {
            imagePreviewUrl,
            imagePreviewUrl2,
            imagePreviewUrl3,
            pokemon
        }
    },
})
</script>
