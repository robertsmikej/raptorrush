<template>
    <div class="employee__cell">
        <div class="employee__image__container">
            <img :src="employee.headshot" :alt="employee.name + ' -  Boise - Headshot'" class="employee__image">
        </div>
        <div class="employee__text__container">
            <h4 class="employee__name">{{ employee.name }}</h4>
            <h5 class="employee__title">{{ employee.title }}</h5>
            <h6 class="employee__speciality">{{employee.speciality }}</h6>
            <a :href="employee.email" class="employee__email">{{ employee.email }}</a>
            <p class="employee__small__para">{{ employee.short_text }}</p>
        </div>
    </div>
</template>

<script>


export default {
    components: {
        
    },
    props: {
        employee: Object
    }
}
</script>

<style>
.employee__cell {
    flex: 1;
    margin: 20px 0;
}
.employee__image__container {
    width: 100%;    
}
.employee__image {
    max-width: 280px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 10px;
}
.employee__text__container {
    padding: 8px 4vw;
}
.employee__name {
    
}
.employee__title {
    
}
.employee__speciality {
    margin: 2px 0;
}
.employee__email {
    color: #FFF;
}
.employee__small__para {
    font-weight: 300;
    text-align: left
}

</style>
