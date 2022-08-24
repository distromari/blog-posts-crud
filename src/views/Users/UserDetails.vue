<template>
    <section class="px-5 py-10">
        <UserDetails />
    </section>
</template>

<script>
import UserDetails from "../../components/Users/UserDetails.vue"

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'UserDetailsView',
        components: {
            UserDetails
        },
    }
</script>