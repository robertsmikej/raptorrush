<template>
    <header class="header">
        <div class="header__inner" >
            <!-- <div class="site__nav">
                <div class="nav__icon" @click="navToggle(); navBarsToX();" :class="{navchanger: navChanged}">
                    <div class="nav__lines">
                        <div class="nav__line nav__line--1"></div>
                        <div class="nav__line nav__line--2"></div>
                        <div class="nav__line nav__line--3"></div>
                        <div class="nav__line nav__line--4"></div>
                        <div class="nav__line nav__line--5"></div>
                        <div class="nav__line nav__line--6"></div>
                    </div>
                </div>
                <nav class="nav__container">
                    <div class="nav__items" @click="navToggle(false); navBarsToX();">
                        <div v-for="(item, index) in navItems" :key="index" class="nav__item">
                            <nuxt-link :to="item.link" v-if="item.status && item.link && item.title !== 'Contact'">
                                <h2 class="nav__link">{{ item.title }}</h2>
                                <p class="nav__para">{{ item.para }}</p>
                            </nuxt-link>
                        </div>
                    </div>
                </nav>
            </div> -->
            <div @click="navToggle(false)">
                <nuxt-link to="/" class="header__logo__and__name">
                    <div class="site__logo__container">
                        <img class="site__logo" :src="sitewide.company_logo" :alt="sitewide.company_name + ' Logo'">
                    </div>
                    <h5 class="header__name"><span>{{ boldName(sitewide.company_name) }}</span>{{ notBoldName(sitewide.company_name) }}</h5>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>

// import VueScrollTo from '~/plugins/vue-scrollto.js';

export default {
    data () {
        return {
            navChanged: false   
        }
    },
    components: {
        
    },
    props: {
        sitewide: Object,
        navItems: Array
    },
    methods: {
        boldName: function (name) {
            return name.split(" ")[0];
        },
        notBoldName: function (name) {
            return name.split(" ")[1];
        },
        navStrip: function (name) {
            return name.replace(" ", "-").toLowerCase();
        },
        navBarsToX: function() {
            this.navChanged = !this.navChanged;
        },
        navToggle: function(toggle) {
            this.$nuxt.$emit("navShow", toggle);
        }
    }
}
</script>

<style>
    .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        padding: 0;
        z-index: 20;
        transition: all .7s;
        background-color: #FFF;
        color: var(--text-color);;
    }
    .header__inner {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
        padding: 0;

    }
    .header__logo__and__name {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        order: 1;
        text-decoration: none;
        z-index: 2;
    }
    .header__name {
        margin: 0;
        align-self: center;
        text-align: left;
        transition: color .4s;
        line-height: 1em;
    }
    .header__name span:nth-of-type(1) {
        font-weight: 600;
    }
    .header__name span {
        margin-right: 2px;
    }

    .site__logo__container {
        padding: 8px 8px 6px;
        display: flex;
        flex-direction: column;
        justify-content: center; 
    }
    .site__logo {
        max-height: 36px;
        align-self: center;
        object-fit: contain;
        transition: transform 2.3s ease-in-out;
        transition: all .4s;
    }
    .site__nav {
        margin-left: auto;
        align-self: center;
        order: 2;
        padding-right: 10px;
    }

    .nav__icon {
        width: 24px;
        height: 26px;
        padding: 5px 0;
        box-sizing: border-box;
        z-index: 20;
        cursor: pointer;
    }
    .nav__lines {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .nav__line {
        width: 24px;
        height: 2px;
        align-self: center;
        background-color: var(--text-color);
        position: absolute;
        top: 0;
        left: 0;
        transition: all .6s;
    }
    .nav__line--1 {
        top: 0;
    }
    .nav__line--2 {
        top: 0;
    }
    .nav__line--3 {
        top: 50%;
    }
    .nav__line--4 {
        top: 50%;
    }
    .nav__line--5 {
        top: 100%;
    }
    .nav__line--6 {
        top: 100%;
    }
    .navchanger .nav__line--1 {
        top: -2px; 
    }
    .navchanger .nav__line--2 {
        top: -2px;        
    }
    .navchanger .nav__line--3 {
        top: calc(50%);
        transform: rotate(-45deg);
        width: 20px;
        left: 2px;
    }
    .navchanger .nav__line--4 {
        top: calc(50%);
        transform: rotate(45deg);
        width: 20px;
        left: 2px;
    }
    .navchanger .nav__line--5 {
        top: calc(100% + 2px);
    }
    .navchanger .nav__line--6 {
        top: calc(100% + 2px);
    }
    .nav__container {
        width: 100vw;
        height: 100vh;
        background-color: var(--light-orange);
        position: fixed;
        top: 0;
        left: -100vw;
        z-index: -1;
        transition: left .4s;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .navShow .nav__container {
        left: 0;
    }
    .nav__items {
        align-self: center;
    }
    .nav__items .nav__item:nth-of-type(1) {
        margin-top: 0;
    }
    .nav__item {
        margin: 30px 0;
        cursor: pointer;
    }
    .nav__item a {
        text-decoration: none;
        display: block;
    }
    .nav__link {
        
        font-size: 3em;
        line-height: 1em;
        font-weight: 300;
        margin: 0;
        transition: all .6s;
    }
    .nav__para {
        margin: 0px 0 0;
        font-size: 1.8em;
        color: var(--dark-grey);
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 1000px) {
        .site__logo__container {
            padding-right: 4px;
        }
        .site__logo {
            height: 30px;
        }

    }
</style>