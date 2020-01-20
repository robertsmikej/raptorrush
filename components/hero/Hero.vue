<template>
    <div class="hero">
        <div v-if="hero" class="hero__inner">
            <div v-if="hero.hero_background_image" class="hero__background__container">
                <img :src="hero.hero_background_image" alt="Landscape Header Photo" class="hero__background__image">
            </div>
            <div class="hero__text__container">
                <h1 v-if="hero.hero_header" class="hero__header"><span >{{ hero.hero_header }}</span><span v-if="hero.hero_header_2">{{ hero.hero_header_2 }}</span></h1>
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
    background: #FFF;
}
.hero span {
    display: block;
}
.hero__background__container {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
.hero__background__image {
    width: 100%;
    object-fit: contain;
    align-self: center;
}
.hero__inner {
    z-index: 3;
    width: 100%;
    max-width: 1600px;
    max-height: 840px;
    padding: 14vh 6vw 14vh;
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
    max-width: 570px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    text-align: left;
    z-index: 1;
}
.hero__header {
    color: #FFF;
}
.hero__para {
    font-weight: 400;
    text-align: left;
    color: #FFF;
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
@media screen and (max-width: 1400px) {
    .hero__text__container {
        max-width: 490px;
    }
}
/* ----------------- MEDIA QUERY ------------------ */
@media screen and (max-width: 1000px) {
    .hero__inner {
        padding: 0;
    }
    .hero__background__container {
        position: relative;
        bottom: inherit;
        left: inherit;
    }
    .hero__text__container {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 8px;
    }
    .hero__background__image {
        width: 114%;
    }

}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 700px) {
    
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .hero__text__container {
        padding: 0 7vw;
    }
    .hero__text__container, .hero__para {
       /* text-align: center; */
    }
    .hero__button__container {

    }
    .hero__header {
        margin-top: 0px;
    }
    .hero__para {
        margin-top: 6px;
        font-weight: 300;
    }
}
</style>
