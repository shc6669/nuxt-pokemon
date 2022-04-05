<template>
    <div class="popup-mobile-menu">
        <div class="inner">
            <div class="header-top">
                <div class="logo logo-custom-css">
                    <a class="logo-light">
                        <img src="~/assets/images/logo/nuxtjs-icon.svg" alt="nuxtjs-icon">
                    </a>
                    <a class="logo-dark">
                        <img src="~/assets/images/logo/nuxtjs-icon.svg" alt="nuxtjs-icon">
                    </a>
                </div>
                <div class="close-menu">
                    <button class="close-button">
                        <i class="feather-x"></i>
                    </button>
                </div>
            </div>
            <nav>
                <!-- Start Mainmanu Nav -->
                <ul class="mainmenu">
                    <li>
                        <a>
                            Dashboard
                        </a>
                    </li>
                </ul>
                <!-- End Mainmanu Nav -->
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Header-Mobile',
    setup() {
        
    },
})
</script>
