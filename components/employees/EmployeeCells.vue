<template>
    <section class="page__section employee__section">
        <SectionHeader :header="pageInfo.sections.meet_us.header" :para="pageInfo.sections.meet_us.section_text[0].text"/>
        <div class="page__section__inner employee__cells__inner">
            <Employee v-for="(employee, index) in employees" :key="index" :employee="employee"/>
        </div>
    </section>
</template>

<script>
import Employee from '~/components/employees/Employee.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';

export default {
    components: {
        Employee,
        SectionHeader
    },
    props: {
        pageInfo: Object,
        employees: Array
    }
}
</script>

<style>
.employee__cells__inner {
    width: 100%;
    max-width: 1100px;
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 650px) {
    .employee__cells__inner {
        margin: 14px auto 0;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
    }
}
</style>
