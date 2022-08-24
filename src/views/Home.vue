<template>
    <section class="px-5 py-10">
        <PostsList />
    </section>
</template>

<script>
import PostsList from "../components/Posts/PostsList.vue"

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            PostsList
        },
        data () {
            return {
                title: 'Home'
            }
        }
    }
</script>
