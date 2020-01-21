<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro :intro="pageInfo.page_intro"/>
        <Employees :employees="employees" :pageInfo="pageInfo"/>


        <section id="contact-us" class="page__section contact__section">
            <SectionHeader :header="'Contact Us'" :para="''"/>
            <Contact :contact="sitewide.contact_form"/>
        </section>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Contact from '~/components/contact/Contact.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import Employees from '~/components/employees/EmployeeCells.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        Contact,
        SectionHeader,
        Employees
    },
    transition: 'bounce',
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.home
        },
        employees: function () {
            return this.$store.state.employees
        }
    },
    methods: {

    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
            title: "Raptor Rush ",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: ""
                },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
            ]
        };
    }
}
</script>

<style>
.contact__section {
    background-color: var(--medium-green);
    scroll-behavior: smooth;
}
.contact__section .page__section__header {
    color: #FFF;
}
.employee__section {
    background-color: var(--blue-grey);
    color: #FFF;
}
</style>