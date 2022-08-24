<template>
    <section class="max-w-screen-xl mx-auto px-3 py-2 md:py-2">
        <div class="mb-10 mt-3">
            <router-link to="/users">
                <p class="text-orange-700 hover:underline mt-1 underline">Voltar</p>
            </router-link>
            <h1 class="text-3xl font-bold text-gray-800 mt-5">
                Detalhes do usuário
            </h1>
        </div>
        <form>
            <div class="form-group mb-6">
                <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    v-model="user.name"
                    placeholder="Nome do usuário"
                    required
                />
            </div>
            <div class="form-group mb-6">
                <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    v-model="user.email"
                    placeholder="E-mail do usuário"
                    required
                />
            </div>
            <div class="form-group mb-6 flex gap-2">
                <select v-model="user.gender" name="gender" class="form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Selecione um gênero</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                </select>
                <select v-model="user.status" name="status" class="form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Selecione um status</option>
                    <option value="active">Ativo</option>
                    <option value="inactive">Inativo</option>
                </select>
            </div>

            <button
                class="px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="updateUser"
            >
                Atualizar informações
            </button>
        </form>
    </section>
</template>

<script>
import UsersService from "../../services/UsersService"
import Vue from 'vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "user",
    data() {
        return {
            user: {
                id: "",
                name: "",
                email: "",
                gender: "",
                status: "",
            }
        }
    },
    methods: {
        retrieveUser(id) {
            UsersService.getUserDetails(id)
            .then(response => {
                if(response.status == 200){
                    Vue.$toast.success('Informações carregadas!', {
                        position: 'top'
                    })
                    this.user = response.data;
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
        },
        updateUser() {
            UsersService.updateUserDetails(this.user.id, this.user)
            .then(response => {
                if(response.status == 200){
                    Vue.$toast.success('Informações atualizadas!', {
                        position: 'top'
                    })
                    this.user = response.data;
                }
                console.log(response.data);
                console.log("Informações atualizadas!")
            })
            .catch(e => {
                if(e.response.status == 422){
                    Vue.$toast.error(`Falha na validação de dados.
                    Campo:${e.response.data[0].field} - Message: ${e.response.data[0].message}`, {
                        position: 'top-right'
                })
                }
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
            })
        }
    },
    mounted(){
        this.retrieveUser(this.$route.params.id);
    }
}

</script>