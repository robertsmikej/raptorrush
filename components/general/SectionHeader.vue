<template>
    <div class="section__header__container">
        <h2 v-if="header" class="page__section__header">{{ header }}</h2>
        <h2 v-if="header_2" class="page__section__header page__section__header--sub">{{ header_2 }}</h2>
        <h2 v-if="header_3" class="page__section__header page__section__header--sub">{{ header_3 }}</h2>
        <p v-if="para" class="page__section__header__para">{{ para }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        header: String,
        header_2: String,
        header_3: String,
        subheader: String,
        para: String
    }
}
</script>

<style>
    .section__header__container {
        margin: 0 auto;
        display: block;
    }
    .page__section__header {
        max-width: 810px;
        position: relative;
        z-index: 1;
        text-transform: capitalize;
    }
    .page__section__header__para {
        max-width: 720px;
        margin: 20px auto 6px;
    }
</style>
