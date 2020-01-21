<template>
    <section class="platforms__section">
        <div class="platforms__section__inner">
            <div v-for="(platform, index) in platforms" :key="index">
                <a :href="platform.website" class="platform__cell">
                    <div class="platform__image__container">
                        <img :src="platform.logo" :alt="platform.name + ' Logo'" class="platform__image">
                    </div>
                    <div class="platform__text__container">
                        <h6>{{ platform.name }}</h6>
                    </div>
                </a>
            </div>
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
        platforms: Array
    }
}
</script>

<style>
.platforms__section {
    width: 100%;
    background-color: var(--light-blue);
}
.platforms__section__inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2vh 16px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
}
.platform__cell {
    flex: 1;
    margin: 6px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    text-decoration: none;
}
.platform__image__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 40px;
}
.platform__image {
    align-self: center;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    max-width: 120px;
    max-height: 32px;
}
.platform__text__container {

}
</style>
