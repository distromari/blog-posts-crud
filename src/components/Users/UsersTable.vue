<template>
    <section class="max-w-screen-xl mx-auto px-3 py-2 md:py-2">
        <div class="flex items-center justify-between mb-10">
            <h1 class="text-3xl font-bold text-gray-800">
                Todos os usuários
            </h1>
            <router-link to="/add-user">
                <button class="bg-orange-600 text-white rounded-lg px-4 py-2">
                    Adicionar um novo usuário
                </button>
            </router-link>
        </div>
        <div>
            <main>
                <data-table v-bind="parameters" @actionTriggered="handleAction"/>
            </main>
        </div>
        <ModalDelete v-show="showModal" @close-modal="showModal = false" @delete-user="deleteUser()" />
    </section>
</template>

<script>
import UsersService from "../../services/UsersService";
import ModalDelete from "../ModalDelete.vue"
import Vue from 'vue'

export default {
    name: "UsersTable",
    components: {
        ModalDelete
    },
    data() {
        return {
            users: [],
            showModal: false,
            deletedUser: ""
        };
    },
    mounted() {
        this.GetAllUsers();
    },
    computed: {
        parameters() {
        return {
            data: this.users,
            lang: "pt-br",
            actionMode: "single",
            deleteUser: false,
            actions: [
                "edit",
                "delete",
                "view"
             ],
            columns: [
            {
                key: "name",
                title: "Nome"
            },
            {
                key: "email",
                title: "E-mail"
            },
            {
                key: "gender",
                title: "Gênero",
                sortable: false
            },
            {
                key: "status",
                title: "Status"
            },
            ]
        };
        }
    },
    methods: {
        handleAction(action, payload) {
            switch(action) {
                case "edit":
                    this.$router.push(`/add-post/${payload.id}`)
                    break;
                case "delete":
                    this.deletedUser = payload.id;
                    this.showModal = true
                    break;
                case "view":
                    this.$router.push(`/users/${payload.id}`)
                    break;
            }
        },
        GetAllUsers(){
            UsersService.getUsers()
            .then(response => {
                this.users = response.data;
            })
            .catch(e => {
                console.log(e);
            })
        },
        deleteUser() {
            UsersService.deleteUser(this.deletedUser)
            .then(response => {
                if(response.status == 204){
                    Vue.$toast.success('Usuário deletado com sucesso!', {
                        position: 'top'
                    })
                    this.user = response.data;
                }
                const index = this.users.findIndex(post => post.id === this.deletedUser)
                // se o usuário existe no array
                   if (~index) {
                        this.users.splice(index, 1) //deletar o usuário
                        this.showModal = false
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
            })
        }
    }
}
</script>

