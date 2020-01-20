<template>
    <div class="site__logo__container">
        <img class="site__logo" :src="img" :alt="alt">
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        alt: String
    }
}
</script>

<style>
    
</style>
