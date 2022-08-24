<template>
    <section class="max-w-screen-xl mx-auto px-3 py-2 md:py-2">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center justify-between mb-10">
            <h1 class="text-3xl font-bold text-gray-800">
                Últimos posts
            </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 text-left">
            <a
                v-for="(post, index) in posts"
                :key="index"
                class="group"
            >
                <div class="overflow-hiddent rounded-lg drop-shadow-log">
                    <img
                        src="../../assets/images/post-image1.jpg"
                        alt="Imagem do post"
                        class="opacity-1 group-hover:opacity-90 duration-800 transition ease-in rounded-lg h-96 w-96 object-cover"
                    />
                </div>
                <div class="flex items-center text-sm mt-2">
                    <p class="text-orange-600">Tecnologia</p>
                    <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                    <p>5 min de leitura</p>
                </div>
                <h1 class="text-2xl text-gray-800 font-medium break-all">
                    {{ post.title }}
                </h1>
                <router-link :to="{ name: 'post-details', params: {id: post.id}}">
                    <p class="text-orange-700 hover:underline mt-1 underline">
                        Ver post
                    </p>
                </router-link>
            </a>
        </div>
    </section>
</template>

<script>
import PostsService from "../../services/PostsService";
import Vue from 'vue'

export default {
    name: "posts-list",
    data() {
        return {
            posts: [],
            post: null,
            title: ""
        };
    },
    methods: {
        retrievePosts() {
            PostsService.getAll()
            .then(response => {
                if(response.status == 200){
                    Vue.$toast.success('Todos os posts carregados!', {
                        position: 'top'
                    })
                    this.posts = response.data;
                }
            })
            .catch(e => {
                if(e.response.status == 400){
                    Vue.$toast.error('Bad Request.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 401){
                    Vue.$toast.error('A autenticação falhou.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 404){
                    Vue.$toast.error('O recurso solicitado não existe.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 415){
                    Vue.$toast.error('Tipo de media ou carácter não suportado.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 422){
                    Vue.$toast.error('Falha na validação de dados.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 429){
                    Vue.$toast.error('Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.', {
                        position: 'top-right'
                    })
                }
                if(e.response.status == 500){
                    Vue.$toast.error('Erro interno do servidor.', {
                        position: 'top-right'
                    })
                }
            });
        }
        // viewPost() {
        //     PostsService.get()
        // }
    },
    created() {
        this.retrievePosts();
    }
}
</script>