<template lang="html">
    <div>
        <Header/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Header from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./islider.vue"
import Service from "./service.vue"
import Welfare from "./welfare.vue"
export default {
    components: {
        Header,
        Slider,
        Footer,
        Navbar,
        Service,
        Welfare,
    },
}
</script>

<style lang="scss" module>

</style>
