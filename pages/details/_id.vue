<template>
    <div>
        <!-- start pokemon detail -->
            <div class="product-details-area rn-section-gapTop">
                <div class="container">
                    <div class="row g-5 rn-section-gapBottom">
                        <!-- product image area -->
                        <!-- {{pokemon}} -->
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
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
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
                                                <div class="top-seller-content">
                                                    <a href="#">
                                                        <h6 class="name">
                                                            {{ info.type.name }}
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
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-3.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by <a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.09wETH by <a href="#">Joe Biden</a></span>
                                                            <span class="count-number">
                                                                1.30 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.07wETH by <a href="#">Sonial mridha</a></span>
                                                            <span class="count-number">
                                                                1.35 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.07wETH by <a href="#">Tribute Dhusra</a></span>
                                                            <span class="count-number">
                                                                1.55 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-7.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.07wETH by <a href="#">Sonia Sobnom</a></span>
                                                            <span class="count-number">
                                                                2 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.02wETH by <a href="#">Sadia Rummon</a></span>
                                                            <span class="count-number">
                                                                2.5 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                            </div>
                                            <div class="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                                                <!-- single -->
                                                <div class="rn-pd-bd-wrapper">
                                                    <div class="top-seller-inner-one">
                                                        <!-- <p class="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                            elit. Doloribus debitis nemo deserunt.</p> -->
                                                        <h6 class="name-title">
                                                            Owner
                                                        </h6>
                                                        <div class="top-seller-wrapper">
                                                            <div class="thumbnail">
                                                                <a href="#"><img src="assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                                            </div>
                                                            <div class="top-seller-content">
                                                                <a href="#">
                                                                    <h6 class="name">Brodband</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- single -->
                                                    <div class="rn-pd-sm-property-wrapper">
                                                        <h6 class="pd-property-title">
                                                            Property
                                                        </h6>
                                                        <div class="property-wrapper">
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">HYPE TYPE</span>
                                                                <span class="color-white value">CALM AF (STILL)</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">BASTARDNESS</span>
                                                                <span class="color-white value">C00LIO BASTARD</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">TYPE</span>
                                                                <span class="color-white value">APE</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">ASTARDNESS</span>
                                                                <span class="color-white value">BASTARD</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">BAD HABIT(S)</span>
                                                                <span class="color-white value">PIPE</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">BID</span>
                                                                <span class="color-white value">BPEYti</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">ASTRAGENAKAR</span>
                                                                <span class="color-white value">BASTARD</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">CITY</span>
                                                                <span class="color-white value">TOKYO</span>
                                                            </div>
                                                            <!-- single property End -->
                                                        </div>
                                                    </div>
                                                    <!-- single -->
                                                    <!-- single -->
                                                    <div class="rn-pd-sm-property-wrapper">
                                                        <h6 class="pd-property-title">
                                                            Catagory
                                                        </h6>
                                                        <div class="catagory-wrapper">
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">ZARY</span>
                                                                <span class="color-white value">APP</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">SOMALIAN</span>
                                                                <span class="color-white value">TRIBUTE</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">TUNA</span>
                                                                <span class="color-white value">PIPE</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">BID</span>
                                                                <span class="color-white value">BPEYti</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">ASTRAGENAKAR</span>
                                                                <span class="color-white value">BASTARD</span>
                                                            </div>
                                                            <!-- single property End -->
                                                            <!-- single property -->
                                                            <div class="pd-property-inner">
                                                                <span class="color-body type">CITY</span>
                                                                <span class="color-white value">TOKYO</span>
                                                            </div>
                                                            <!-- single property End -->
                                                        </div>
                                                    </div>
                                                    <!-- single -->
                                                </div>
                                                <!-- single -->
                                            </div>
                                            <div class="tab-pane fade" id="nav-moves" role="tabpanel" aria-labelledby="nav-moves-tab">
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-3.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one mt--20">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-2.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one mt--20">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one mt--20">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
                                                <!-- single creator -->
                                                <div class="top-seller-inner-one mt--20">
                                                    <div class="top-seller-wrapper">
                                                        <div class="thumbnail">
                                                            <a href="#"><img src="assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                                        </div>
                                                        <div class="top-seller-content">
                                                            <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                                                            <span class="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- single creator -->
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
