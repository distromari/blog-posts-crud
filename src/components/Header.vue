<template>
    <header class="border-b border-gray-100 drop-shadow-sm sticky top-0 bg-white z-10">
        <div class="max-w-screen-xl mx-auto py-3 px-3 md:px-0">
            <div class="flex items-center justify-between">
                <div>
                    <router-link to="/">
                        <h1 class="text-3xl font-bold text-gray-800">Blog</h1>
                    </router-link>
                </div>
                <div class="block">
                    <ul class="flex items-center space-x-5 text-gray-500 font-semibold mb-0">
                        <li>
                            <router-link to="/">
                                Posts
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/users">
                                Usuários
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
}
</script>