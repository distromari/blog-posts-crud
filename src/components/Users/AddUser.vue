<template>
    <section class="max-w-screen-xl mx-auto px-3 py-2 md:py-2">
        <div class="mb-10 mt-3">
            <router-link to="/users">
                <p class="text-orange-700 hover:underline mt-1 underline">Voltar</p>
            </router-link>
            <h1 class="text-3xl font-bold text-gray-800">
                Novo usuário
            </h1>
        </div>
        <form @submit.prevent="createUser">
            <div class="form-group mb-6">
                <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    v-model.trim="$v.name.$model"
                    placeholder="Nome do usuário"
                    :class="{ 'is-invalid': $v.name.$error, 'is-valid': !$v.name.$error }"
                />
                <div class="invalid-feedback">
                    <span v-if="!$v.name.required">Este campo é necessário!</span>
                    <span v-if="!$v.name.minLength">O nome deve conter pelo menos 3 caracteres!</span>
                </div>
            </div>
            <div class="form-group mb-6">
                <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    v-model.trim="$v.email.$model"
                    placeholder="E-mail do usuário"
                    :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$error }"
                />
                <div class="invalid-feedback">
                    <span v-if="!$v.email.required">Este campo é necessário!</span>
                    <span v-if="!$v.email.email">Coloque um email correto!</span>
                </div>
            </div>
            <div class="form-group mb-6 grid-cols-1 md:grid-cols-2 gap-x-2">
                <select v-model.trim="$v.gender.$model" :class="{ 'is-invalid': $v.gender.$error, 'is-valid': !$v.gender.$error }" name="gender" class="form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value="" selected disabled>Selecione um gênero</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                </select>
                <div class="invalid-feedback">
                    <span v-if="!$v.gender.required">Este campo é necessário!</span>
                </div>
                <select v-model.trim="$v.status.$model" :class="{ 'is-invalid': $v.status.$error, 'is-valid': !$v.status.$error }" name="status" class="form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value="" selected disabled>Selecione um status</option>
                    <option value="active">Ativo</option>
                    <option value="inactive">Inativo</option>
                </select>
                <div class="invalid-feedback">
                    <span v-if="!$v.status.required">Este campo é necessário!</span>
                </div>
            </div>

            <button
                class="px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                Criar usuário
            </button>
        </form>
    </section>
</template>

<script>
import { required, minLength, email } from'vuelidate/lib/validators'
import UsersService from "../../services/UsersService"
import Vue from 'vue'

export default {
    name: "AddUser",
    data() {
        return {
            id: "",
            name: "",
            email: "",
            gender: "",
            status: "",
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3)
        },
        email: {
            required,
            email
        },
        gender: {
            required
        },
        status: {
            required
        }
    },
    methods: {
        createUser() {
            this.$v.$touch();
            var data = {
                name: this.name,
                email: this.email,
                gender: this.gender,
                status: this.status
            };
            UsersService.createUser(data)
            .then(response => {
                if(response.status == 201){
                    Vue.$toast.success('Usuário criado!', {
                        position: 'top'
                    })
                    window.location.reload();
                }
            })
            .catch(e => {
                    if(e.response.status == 422){
                    Vue.$toast.error(`Falha na validação de dados.
                    Campo:${e.response.data[0].field} - Mensagem: ${e.response.data[0].message}`, {
                        position: 'top-right'
                    })
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
                }
            });
        }
    }
}
</script>