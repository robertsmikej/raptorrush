<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';

export default {
    scrollToTop: true,
    components: {
        Hero
    },
    transition: 'bounce',
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.home
        }
    },
    methods: {

    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
            title: "Raptor Rush ",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: ""
                },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
            ]
        };
    }
}
</script>

<style>

</style>