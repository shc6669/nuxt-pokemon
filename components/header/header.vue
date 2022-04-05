<template>
    <!-- Start Header -->
    <header class="rn-header haeder-default header--sticky">
        <div class="container">
            <div class="header-inner">
                <div class="header-left">
                    <div class="logo-thumbnail logo-custom-css">
                        <a class="logo-light">
                            <img src="~/assets/images/logo/nuxtjs-icon.svg" alt="nuxtjs-icon">
                        </a>
                        <a class="logo-dark">
                            <img src="~/assets/images/logo/nuxtjs-icon.svg" alt="nuxtjs-icon">
                        </a>
                    </div>
                    <div class="mainmenu-wrapper">
                        <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
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

                <div class="header-right">
                    <div class="setting-option mobile-menu-bar d-block d-xl-none">
                        <div class="hamberger">
                            <button class="hamberger-button">
                                <i class="feather-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- End Header Area -->
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Header',
    setup () {

    }
})
</script>