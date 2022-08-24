<template>
    <section class="bg-gray-50 px-5 py-10">
        <UsersTable />
    </section>
</template>

<script>
import UsersTable from "../../components/Users/UsersTable.vue"

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Users',
        components: {
            UsersTable
        },
    }
</script>