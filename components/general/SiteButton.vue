<template>
    <div class="site__button">
        <nuxt-link v-if="buttonLink && buttonLink !== '#contact-us'" :to="buttonLink" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" class="site__button__inner">
            {{ buttonText }}
        </nuxt-link>
        <div v-if="!buttonLink" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" class="site__button__inner">
            {{ buttonText }}
        </div>
        <a v-if="buttonLink && buttonLink === '#contact-us'" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" :href="buttonLink" class="site__button__inner">
            {{ buttonText }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        buttonLink: String,
        buttonText: String,
        backgroundColor: Number,
        color: Number
    },
    computed: {
        backgroundcolor: function () {
            let dataBack = this.backgroundColor;
            let back;
            if (dataBack === 1) {
                back = "var(--light-orange)";
            } else if (dataBack === 2) {
                back = "var(--lightest-grey)";
            } else if (dataBack === 3) {
                back = "var(--logo-orange)";
            } else if (dataBack === 4) {
                back = "var(--turkish-blue";
            }
            return back;
        },
        textcolor: function () {
            let dataColor = this.color;
            let color;
            if (dataColor === 1) {
                color = "#FFF";
            } else if (dataColor === 2) {
                color = "var(--dark-grey)";
            }
            return color;
        }
    }
}
</script>

<style>
.site__button {
    margin: 16px auto;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    align-content: center;
    flex: 0 1 auto;
    z-index: 1;
}
.site__button__inner {
    width: 100%;
    font-size: .9em;
    padding: 10px 24px;
    margin: 0 auto;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .5s;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
}
.site__button__inner:hover {
    background-color: var(--light-red) !important;
    border-color: var(--light-red) !important;
    color: #FFF !important;
    font-size: 1.1em !important;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .site__button__inner {
        font-size: .8em;
        padding: 6px 14px;
    }
}
</style>
