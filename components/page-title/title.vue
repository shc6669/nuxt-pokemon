<template>
    <!-- start page title area -->
    <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h5 class="title text-center text-md-start">
                        Page Title Goes Here
                    </h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item">
                            <a href="/">Home</a>
                        </li>
                        <li class="separator">
                            <i class="feather-chevron-right"></i>
                        </li>
                        <li class="item current">Page Title Details Goes Here</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Page-Title',
    setup() {
        
    },
})
</script>
