<template>
    <section class="max-w-screen-xl mx-auto px-3 py-5 md:py-2">
        <router-link to="/">
            <p class="text-orange-700 hover:underline mt-1 mb-4 underline">Voltar</p>
        </router-link>
        <div>
            <img src="../../assets/images/post-image1.jpg" alt="Banner post" class="w-screen h-96 rounded-lg object-cover" />
        </div>
        <div v-for="(post, index) in post" :key="index">
            <div class="mb-10 mt-10">
                <h1 class="text-3xl font-bold text-gray-800 mb-3">{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <div class="bg-orange-200 px-20 py-10 rounded-md">
            <h1 class="text-2xl font-bold text-gray-800 mb-8">Comentários</h1>
            <div v-for="(comment, index) in comments" :key="index" class="group bg-white rounded p-4 mb-2"
            >
                <div class="flex items-center gap-1">
                    <img class="inline-block h-14 w-14 rounded-full ring-2 ring-purple mr-2" src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                    <p class="font-bold mb-b">{{ comment.name }}</p>
                    <p class="mb-b">&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                    <p class="text-orange-600 mb-b">{{ comment.email }}</p>
                </div>
                <p class="mt-3 mb-0">{{ comment.body }}</p>
            </div>
            <div class="bg-orange-100 px-20 py-10 rounded-md mt-10">
                <h1 class="text-2xl font-bold text-gray-800 mb-8">
                    Adicione um comentário:
                </h1>
                <div class="flex items-center gap-5">
                    <div>
                        <label for="name" class="font-bold">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            v-model="postComment.name"
                            required
                            class="
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                    </div>
                    <div>
                        <label for="name" class="font-bold">E-mail:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="E-mail"
                            v-model="postComment.email"
                            required
                            class="
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                    </div>
                </div>
                <div class="mt-3">
                    <label for="comment" class="font-bold">Comentário:</label>
                    <textarea
                        type="text"
                        id="comment"
                        v-model="postComment.body"
                        required
                        class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        rows="3"
                        placeholder="Seu comentário"
                    ></textarea>
                </div>
                <button class="bg-orange-600 text-white rounded-lg px-4 py-2 mt-3" @click="createComment()">Enviar</button>
            </div>
        </div>
    </section>
</template>

<script>
import PostsService from "../../services/PostsService"
import CommentsService from "../../services/CommentsService"
import Vue from 'vue'

export default {
    name: "post-details",
    data() {
        return {
            post: null,
            title: "",
            postComment: {
                name: "",
                email: "",
                body: ""
            },
            comment: null,
            comments: [],
            name: "",
            email: "",
            body: ""
        }
    },
    methods: {
        retrievePost(id) {
            PostsService.get(id)
            .then(response => {
                this.post = response.data;
                JSON.parse(JSON.stringify(this.post));
                console.log(JSON.parse(JSON.stringify(this.post)));
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
        },
        createComment() {
            var data = {
                name: this.postComment.name,
                email: this.postComment.email,
                body: this.postComment.body
            };
            CommentsService.createComment(this.post[0].id, data)
            .then(response => {
                this.postComment.id = response.data.id;
                this.comments.push(response.data)
                Vue.$toast.success('Comentario adicionado com sucesso!', {
                    position: 'top'
                })
                this.postComment.name = "";
                this.postComment.email = "";
                this.postComment.body = "";
            })
            .catch(e => {
                if(e.response.status == 422){
                    Vue.$toast.error(`Falha na validação de dados.
                        Campo:${e.response.data[0].field} - Message: ${e.response.data[0].message}`, {
                        position: 'top-right'
                    });
                }
            });
        },
        retrieveComments(id) {
            CommentsService.getComments(id)
            .then(response => {
                this.comments = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
        },
    },
    mounted(){
        this.retrievePost(this.$route.params.id);
        this.retrieveComments(this.$route.params.id);
    }
}
</script>