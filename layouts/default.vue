<template>
    <div>
        <Header />
        <HeaderMobile />
        <PageTitle />
        <Nuxt />
        <Footer />
        <ToTop />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '~/components/header/header.vue'
import HeaderMobile from '~/components/header/mobile-header.vue'
import PageTitle from '~/components/page-title/title.vue'
import Footer from '~/components/footer/footer.vue'
import ToTop from '~/components/plugin/totop.vue'

export default defineComponent({
    name: 'default-layout',
    components: {
        Footer,
        Header,
        HeaderMobile,
        PageTitle,
        ToTop
    },
    setup () {

    }
})
</script>