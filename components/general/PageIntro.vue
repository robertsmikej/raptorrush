<template>
    <section v-if="intro.status" class="page__section page__intro">
        <div class="page__section__inner">
            <SectionHeader :header="intro.page_intro_header" :header_2="intro.page_intro_header_2" :header_3="intro.page_intro_header_3" :para="intro.page_intro_para"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';

export default {
    components: {
        SectionHeader
    },
    props: {
        intro: Object
    }
}
</script>

<style>

</style>
