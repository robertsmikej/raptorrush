<template>
    <div class="section__header__container">
        <h2 v-if="header" class="page__section__header">{{ header }}</h2>
        <p v-if="para" class="page__section__header__para">{{ para }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        header: String,
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
        margin: 20px auto 24px;
        position: relative;
        z-index: 1;
    }
    .page__section__header__para {
        max-width: 720px;
        margin: 10px auto;
    }
</style>
