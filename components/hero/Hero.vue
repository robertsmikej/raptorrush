<template>
    <div class="hero">
        <div v-if="hero" class="hero__inner">
            <div class="hero__text__container">
                <h1 v-if="hero.hero_header" class="hero__header">{{ hero.hero_header }}</h1>
                <p v-if="hero.hero_para" class="hero__para">{{ hero.hero_para }}</p>
                <div v-if="hero.hero_button_text" class="hero__button__container">
                    <SiteButton :buttonLink="hero.hero_button_link" :buttonText="hero.hero_button_text" :backgroundColor="1" :color="1"/>
                </div>
            </div>
            <div v-if="hero.hero_sub_image" class="hero__sub__image__container">
                <img :src="hero.hero_sub_image"/>
            </div>
        </div>
    </div>
</template>

<script>
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SiteButton
    },
    props: {
        hero: Object,
        size: String,
    }
}
</script>

<style>
.hero {
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(to bottom, #79A7B4, #5F828D);
    background: #FFF;
}
.hero__inner {
    z-index: 3;
    width: 100%;
    max-width: 1600px;
    max-height: 840px;
    padding: 80px 6vw 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    box-sizing: border-box;
}
.hero__text__container {
    width: 100%;
    margin: 0;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
}
.hero__para {
    font-weight: 400;
    text-align: left;
}
.hero__button__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start
}
.hero__sub__image__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    margin: 20px 0;
    width: 100%;
}
.hero__sub__image__container img {
    max-width: 600px;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 1000px) {
    .hero__inner {
        padding: 50px 6vw 50px;
    }
    .hero__sub__image__container img {
        max-width: 400px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 700px) {
    .hero__inner {
        padding: 50px 5vw 50px;
    }
    .hero__sub__image__container {
        width: 50%;
    }
    .hero__sub__image__container img {
        max-width: 140px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .hero__sub__image__container img {
        max-width: 90px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 400px) {
    .hero__sub__image__container img {
        max-width: 80px;
    }
}
</style>
