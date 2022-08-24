<template>
    <section class="max-w-screen-xl mx-auto px-3 py-2 md:py-2">
        <div class="mb-10 mt-3">
            <router-link to="/">
                <p class="text-orange-700 hover:underline mt-1 mb-4 underline">Voltar</p>
            </router-link>
            <h1 class="text-3xl font-bold text-gray-800">
                Novo post
            </h1>
        </div>
        <form @submit.prevent="createPost">
            <div class="form-group mb-6">
                <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700"
                    id="title"
                    v-model.trim="$v.title.$model"
                    :class="{ 'is-invalid': $v.title.$error, 'is-valid': !$v.title.$error }"
                    placeholder="Título do post"
                />
                <div class="invalid-feedback">
                    <span v-if="!$v.title.required">Este campo é necessário!</span>
                    <span v-if="!$v.title.minLength">O título deve conter pelo menos 5 caracteres!</span>
                </div>
            </div>
            <div class="form-group mb-6">
                <textarea
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="body"
                    v-model.trim="$v.body.$model"
                    :class="{ 'is-invalid': $v.body.$error, 'is-valid': !$v.body.$error }"
                    rows="3"
                    placeholder="Descrição do post"
                ></textarea>
                <div class="invalid-feedback">
                    <span v-if="!$v.body.required">Este campo é necessário!</span>
                    <span v-if="!$v.body.maxLength">O comentário deve conter menos de 500 caracteres!</span>
                </div>
            </div>
            <button
                type="submit"
                class="px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"        
            >
                Criar post
            </button>
        </form>
    </section>
</template>

<script>
import { required, minLength, maxLength } from'vuelidate/lib/validators'
import PostsService from "../../services/PostsService"
import Vue from 'vue'

export default {
    name: "add-post",
    data() {
        return {
            id: "",
            title: "",
            body: "",
            submitted: false
        }
    },
    validations: {
        title: {
            required,
            minLength: minLength(5)
        },
        body: {
            required,
            maxLength: maxLength(500)
        }
    },
    methods: {
        createPost() {
            this.$v.$touch();
            var data = {
                title: this.title,
                body: this.body
            };
            PostsService.createPost(this.$route.params.id.replace(/\s|:/g,""), data)
            .then(response => {
                if(response.status == 201){
                    Vue.$toast.success('Post criado!', {
                        position: 'top'
                    })
                    // this.id = this.$route.params.id;
                    this.submitted = true;
                    window.location.reload();
                }
            })
            .catch(e => {
                if(e.response.status == 400){
                    Vue.$toast.error('Bad Request.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 401){
                    Vue.$toast.error('A autenticação falhou.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 404){
                    Vue.$toast.error('O recurso solicitado não existe.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 415){
                    Vue.$toast.error('Tipo de media ou carácter não suportado.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 422){
                    Vue.$toast.error('Falha na validação de dados.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 429){
                    Vue.$toast.error('Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.', {
                        position: 'top'
                    })
                }
                if(e.response.status == 500){
                    Vue.$toast.error('Erro interno do servidor.', {
                        position: 'top'
                    })
                }
            });
        }
    }
}
</script>