<template>
    <!-- Start Footer Area -->
    <div class="copy-right-one ptb--20 bg-color--1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="copyright-left">
                        <span>{{year}} © Chandrayana Putra. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Footer Area -->
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Footer',
    setup() {
        const year = new Date().getFullYear();

        return {
            year
        }
    },
})
</script>
