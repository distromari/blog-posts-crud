(function(){"use strict";var t={1463:function(t,e,o){var s=o(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderApp"),e("router-view")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"border-b border-gray-100 drop-shadow-sm sticky top-0 bg-white z-10"},[e("div",{staticClass:"max-w-screen-xl mx-auto py-3 px-3 md:px-0"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",[e("router-link",{attrs:{to:"/"}},[e("h1",{staticClass:"text-3xl font-bold text-gray-800"},[t._v("Blog")])])],1),e("div",{staticClass:"block"},[e("ul",{staticClass:"flex items-center space-x-5 text-gray-500 font-semibold mb-0"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(" Posts ")])],1),e("li",[e("router-link",{attrs:{to:"/users"}},[t._v(" Usuários ")])],1)])])])])])},n=[],l={name:"Header"},d=l,u=o(1001),c=(0,u.Z)(d,i,n,!1,null,null,null),p=c.exports,m={name:"App",components:{HeaderApp:p}},g=m,v=(0,u.Z)(g,r,a,!1,null,null,null),f=v.exports,b=o(2631),h=function(){var t=this,e=t._self._c;return e("section",{staticClass:"px-5 py-10"},[e("PostsList")],1)},x=[],$=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-2 md:py-2"},[t._m(0),e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 text-left"},t._l(t.posts,(function(o,s){return e("a",{key:s,staticClass:"group"},[t._m(1,!0),t._m(2,!0),e("h1",{staticClass:"text-2xl text-gray-800 font-medium break-all"},[t._v(" "+t._s(o.title)+" ")]),e("router-link",{attrs:{to:{name:"post-details",params:{id:o.id}}}},[e("p",{staticClass:"text-orange-700 hover:underline mt-1 underline"},[t._v(" Ver post ")])])],1)})),0)])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 items-center justify-between mb-10"},[e("h1",{staticClass:"text-3xl font-bold text-gray-800"},[t._v(" Últimos posts ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-hiddent rounded-lg drop-shadow-log"},[e("img",{staticClass:"opacity-1 group-hover:opacity-90 duration-800 transition ease-in rounded-lg h-96 w-96 object-cover",attrs:{src:o(1291),alt:"Imagem do post"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center text-sm mt-2"},[e("p",{staticClass:"text-orange-600"},[t._v("Tecnologia")]),e("p",[t._v("  •  ")]),e("p",[t._v("5 min de leitura")])])}],C=o(6265),w=o.n(C),_=w().create({baseURL:"https://gorest.co.in/public/v2/",headers:{"Content-type":"application/json",Authorization:""}});class P{getAll(){return _.get("posts")}get(t){return _.get(`/posts?id=${t}`)}createPost(t,e){return _.post(`users/${t}/posts`,e)}}var Z=new P,k={name:"posts-list",data(){return{posts:[],post:null,title:""}},methods:{retrievePosts(){Z.getAll().then((t=>{200==t.status&&(s.ZP.$toast.success("Todos os posts carregados!",{position:"top"}),this.posts=t.data)})).catch((t=>{400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),422==t.response.status&&s.ZP.$toast.error("Falha na validação de dados.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"})}))}},created(){this.retrievePosts()}},U=k,A=(0,u.Z)(U,$,y,!1,null,null,null),O=A.exports,M={name:"Home",components:{PostsList:O},data(){return{title:"Home"}}},q=M,D=(0,u.Z)(q,h,x,!1,null,null,null),N=D.exports,j=function(){var t=this,e=t._self._c;return e("AddPost")},E=[],T=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-2 md:py-2"},[e("div",{staticClass:"mb-10 mt-3"},[e("router-link",{attrs:{to:"/"}},[e("p",{staticClass:"text-orange-700 hover:underline mt-1 mb-4 underline"},[t._v("Voltar")])]),e("h1",{staticClass:"text-3xl font-bold text-gray-800"},[t._v(" Novo post ")])],1),e("form",{on:{submit:function(e){return e.preventDefault(),t.createPost.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.title.$model,expression:"$v.title.$model",modifiers:{trim:!0}}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700",class:{"is-invalid":t.$v.title.$error,"is-valid":!t.$v.title.$error},attrs:{type:"text",id:"title",placeholder:"Título do post"},domProps:{value:t.$v.title.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.title,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"invalid-feedback"},[t.$v.title.required?t._e():e("span",[t._v("Este campo é necessário!")]),t.$v.title.minLength?t._e():e("span",[t._v("O título deve conter pelo menos 5 caracteres!")])])]),e("div",{staticClass:"form-group mb-6"},[e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.body.$model,expression:"$v.body.$model",modifiers:{trim:!0}}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",class:{"is-invalid":t.$v.body.$error,"is-valid":!t.$v.body.$error},attrs:{id:"body",rows:"3",placeholder:"Descrição do post"},domProps:{value:t.$v.body.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.body,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"invalid-feedback"},[t.$v.body.required?t._e():e("span",[t._v("Este campo é necessário!")]),t.$v.body.maxLength?t._e():e("span",[t._v("O comentário deve conter menos de 500 caracteres!")])])]),e("button",{staticClass:"px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._v(" Criar post ")])])])},B=[],S=o(5795),F={name:"add-post",data(){return{id:"",title:"",body:"",submitted:!1}},validations:{title:{required:S.C1,minLength:(0,S.Ei)(5)},body:{required:S.C1,maxLength:(0,S.BS)(500)}},methods:{createPost(){this.$v.$touch();var t={title:this.title,body:this.body};Z.createPost(this.$route.params.id.replace(/\s|:/g,""),t).then((t=>{201==t.status&&(s.ZP.$toast.success("Post criado!",{position:"top"}),this.submitted=!0,window.location.reload())})).catch((t=>{400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top"}),422==t.response.status&&s.ZP.$toast.error("Falha na validação de dados.",{position:"top"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top"})}))}}},L=F,H=(0,u.Z)(L,T,B,!1,null,null,null),R=H.exports,I={name:"NewPost",components:{AddPost:R}},V=I,z=(0,u.Z)(V,j,E,!1,null,null,null),G=z.exports,J=function(){var t=this,e=t._self._c;return e("PostDetails")},W=[],Y=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-5 md:py-2"},[e("router-link",{attrs:{to:"/"}},[e("p",{staticClass:"text-orange-700 hover:underline mt-1 mb-4 underline"},[t._v("Voltar")])]),t._m(0),t._l(t.post,(function(o,s){return e("div",{key:s},[e("div",{staticClass:"mb-10 mt-10"},[e("h1",{staticClass:"text-3xl font-bold text-gray-800 mb-3"},[t._v(t._s(o.title))]),e("p",[t._v(t._s(o.body))])])])})),e("div",{staticClass:"bg-orange-200 px-20 py-10 rounded-md"},[e("h1",{staticClass:"text-2xl font-bold text-gray-800 mb-8"},[t._v("Comentários")]),t._l(t.comments,(function(o,s){return e("div",{key:s,staticClass:"group bg-white rounded p-4 mb-2"},[e("div",{staticClass:"flex items-center gap-1"},[e("img",{staticClass:"inline-block h-14 w-14 rounded-full ring-2 ring-purple mr-2",attrs:{src:"https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",alt:""}}),e("p",{staticClass:"font-bold mb-b"},[t._v(t._s(o.name))]),e("p",{staticClass:"mb-b"},[t._v("  •  ")]),e("p",{staticClass:"text-orange-600 mb-b"},[t._v(t._s(o.email))])]),e("p",{staticClass:"mt-3 mb-0"},[t._v(t._s(o.body))])])})),e("div",{staticClass:"bg-orange-100 px-20 py-10 rounded-md mt-10"},[e("h1",{staticClass:"text-2xl font-bold text-gray-800 mb-8"},[t._v(" Adicione um comentário: ")]),e("div",{staticClass:"flex items-center gap-5"},[e("div",[e("label",{staticClass:"font-bold",attrs:{for:"name"}},[t._v("Nome:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.postComment.name,expression:"postComment.name"}],staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",id:"name",placeholder:"Nome",required:""},domProps:{value:t.postComment.name},on:{input:function(e){e.target.composing||t.$set(t.postComment,"name",e.target.value)}}})]),e("div",[e("label",{staticClass:"font-bold",attrs:{for:"name"}},[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.postComment.email,expression:"postComment.email"}],staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",id:"email",placeholder:"E-mail",required:""},domProps:{value:t.postComment.email},on:{input:function(e){e.target.composing||t.$set(t.postComment,"email",e.target.value)}}})])]),e("div",{staticClass:"mt-3"},[e("label",{staticClass:"font-bold",attrs:{for:"comment"}},[t._v("Comentário:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postComment.body,expression:"postComment.body"}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",id:"comment",required:"",rows:"3",placeholder:"Seu comentário"},domProps:{value:t.postComment.body},on:{input:function(e){e.target.composing||t.$set(t.postComment,"body",e.target.value)}}})]),e("button",{staticClass:"bg-orange-600 text-white rounded-lg px-4 py-2 mt-3",on:{click:function(e){return t.createComment()}}},[t._v("Enviar")])])],2)],2)},K=[function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"w-screen h-96 rounded-lg object-cover",attrs:{src:o(1291),alt:"Banner post"}})])}];o(7658);class Q{createComment(t,e){return _.post(`/posts/${t}/comments`,e)}getComments(t,e){return _.get(`/posts/${t}/comments`,e)}}var X=new Q,tt={name:"post-details",data(){return{post:null,title:"",postComment:{name:"",email:"",body:""},comment:null,comments:[],name:"",email:"",body:""}},methods:{retrievePost(t){Z.get(t).then((t=>{this.post=t.data,JSON.parse(JSON.stringify(this.post)),console.log(JSON.parse(JSON.stringify(this.post)))})).catch((t=>{400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),422==t.response.status&&s.ZP.$toast.error("Falha na validação de dados.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"})}))},createComment(){var t={name:this.postComment.name,email:this.postComment.email,body:this.postComment.body};X.createComment(this.post[0].id,t).then((t=>{this.postComment.id=t.data.id,this.comments.push(t.data),s.ZP.$toast.success("Comentario adicionado com sucesso!",{position:"top"}),this.postComment.name="",this.postComment.email="",this.postComment.body=""})).catch((t=>{422==t.response.status&&s.ZP.$toast.error(`Falha na validação de dados.\n                        Campo:${t.response.data[0].field} - Message: ${t.response.data[0].message}`,{position:"top-right"})}))},retrieveComments(t){X.getComments(t).then((t=>{this.comments=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.retrievePost(this.$route.params.id),this.retrieveComments(this.$route.params.id)}},et=tt,ot=(0,u.Z)(et,Y,K,!1,null,null,null),st=ot.exports,rt={name:"DetailsPost",components:{PostDetails:st}},at=rt,it=(0,u.Z)(at,J,W,!1,null,null,null),nt=it.exports,lt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-gray-50 px-5 py-10"},[e("UsersTable")],1)},dt=[],ut=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-2 md:py-2"},[e("div",{staticClass:"flex items-center justify-between mb-10"},[e("h1",{staticClass:"text-3xl font-bold text-gray-800"},[t._v(" Todos os usuários ")]),e("router-link",{attrs:{to:"/add-user"}},[e("button",{staticClass:"bg-orange-600 text-white rounded-lg px-4 py-2"},[t._v(" Adicionar um novo usuário ")])])],1),e("div",[e("main",[e("data-table",t._b({on:{actionTriggered:t.handleAction}},"data-table",t.parameters,!1))],1)]),e("ModalDelete",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1},"delete-user":function(e){return t.deleteUser()}}})],1)},ct=[];class pt{getUsers(){return _.get("users")}createUser(t){return _.post("users",t)}getUserDetails(t){return _.get(`users/${t}`)}updateUserDetails(t,e){return _.put(`users/${t}`,e)}deleteUser(t){return _.delete(`users/${t}`)}}var mt=new pt,gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto",attrs:{id:"exampleModalCenter",tabindex:"-1","aria-labelledby":"exampleModalCenterTitle","aria-modal":"true",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered relative w-auto pointer-events-none"},[e("div",{staticClass:"modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},[t._m(0),t._m(1),e("div",{staticClass:"modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"},[e("button",{staticClass:"inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$emit("close-modal")}}},[t._v(" Cancelar ")]),e("button",{staticClass:"inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete-user")}}},[t._v(" Excluir ")])])])])])},vt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[e("h5",{staticClass:"text-xl font-medium leading-normal text-gray-800",attrs:{id:"exampleModalScrollableLabel"}},[t._v(" Excluir usuário ")]),e("button",{staticClass:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-body relative p-4"},[e("p",[t._v("Deseja excluir esse usuário?")])])}],ft={name:"ModalDelete"},bt=ft,ht=(0,u.Z)(bt,gt,vt,!1,null,null,null),xt=ht.exports,$t={name:"UsersTable",components:{ModalDelete:xt},data(){return{users:[],showModal:!1,deletedUser:""}},mounted(){this.GetAllUsers()},computed:{parameters(){return{data:this.users,lang:"pt-br",actionMode:"single",deleteUser:!1,actions:["edit","delete","view"],columns:[{key:"name",title:"Nome"},{key:"email",title:"E-mail"},{key:"gender",title:"Gênero",sortable:!1},{key:"status",title:"Status"}]}}},methods:{handleAction(t,e){switch(t){case"edit":this.$router.push(`/add-post/${e.id}`);break;case"delete":this.deletedUser=e.id,this.showModal=!0;break;case"view":this.$router.push(`/users/${e.id}`);break}},GetAllUsers(){mt.getUsers().then((t=>{this.users=t.data})).catch((t=>{console.log(t)}))},deleteUser(){mt.deleteUser(this.deletedUser).then((t=>{204==t.status&&(s.ZP.$toast.success("Usuário deletado com sucesso!",{position:"top"}),this.user=t.data);const e=this.users.findIndex((t=>t.id===this.deletedUser));~e&&(this.users.splice(e,1),this.showModal=!1)})).catch((t=>{400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),422==t.response.status&&s.ZP.$toast.error("Falha na validação de dados.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"})}))}}},yt=$t,Ct=(0,u.Z)(yt,ut,ct,!1,null,null,null),wt=Ct.exports,_t={name:"Users",components:{UsersTable:wt}},Pt=_t,Zt=(0,u.Z)(Pt,lt,dt,!1,null,null,null),kt=Zt.exports,Ut=function(){var t=this,e=t._self._c;return e("AddUser")},At=[],Ot=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-2 md:py-2"},[e("div",{staticClass:"mb-10 mt-3"},[e("router-link",{attrs:{to:"/users"}},[e("p",{staticClass:"text-orange-700 hover:underline mt-1 underline"},[t._v("Voltar")])]),e("h1",{staticClass:"text-3xl font-bold text-gray-800"},[t._v(" Novo usuário ")])],1),e("form",{on:{submit:function(e){return e.preventDefault(),t.createUser.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",class:{"is-invalid":t.$v.name.$error,"is-valid":!t.$v.name.$error},attrs:{type:"text",id:"name",placeholder:"Nome do usuário"},domProps:{value:t.$v.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"invalid-feedback"},[t.$v.name.required?t._e():e("span",[t._v("Este campo é necessário!")]),t.$v.name.minLength?t._e():e("span",[t._v("O nome deve conter pelo menos 3 caracteres!")])])]),e("div",{staticClass:"form-group mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",class:{"is-invalid":t.$v.email.$error,"is-valid":!t.$v.email.$error},attrs:{type:"email",id:"email",placeholder:"E-mail do usuário"},domProps:{value:t.$v.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.email,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"invalid-feedback"},[t.$v.email.required?t._e():e("span",[t._v("Este campo é necessário!")]),t.$v.email.email?t._e():e("span",[t._v("Coloque um email correto!")])])]),e("div",{staticClass:"form-group mb-6 grid-cols-1 md:grid-cols-2 gap-x-2"},[e("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.gender.$model,expression:"$v.gender.$model",modifiers:{trim:!0}}],staticClass:"form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",class:{"is-invalid":t.$v.gender.$error,"is-valid":!t.$v.gender.$error},attrs:{name:"gender","aria-label":"Default select example"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.gender,"$model",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Selecione um gênero")]),e("option",{attrs:{value:"male"}},[t._v("Masculino")]),e("option",{attrs:{value:"female"}},[t._v("Feminino")])]),e("div",{staticClass:"invalid-feedback"},[t.$v.gender.required?t._e():e("span",[t._v("Este campo é necessário!")])]),e("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.status.$model,expression:"$v.status.$model",modifiers:{trim:!0}}],staticClass:"form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",class:{"is-invalid":t.$v.status.$error,"is-valid":!t.$v.status.$error},attrs:{name:"status","aria-label":"Default select example"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.status,"$model",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Selecione um status")]),e("option",{attrs:{value:"active"}},[t._v("Ativo")]),e("option",{attrs:{value:"inactive"}},[t._v("Inativo")])]),e("div",{staticClass:"invalid-feedback"},[t.$v.status.required?t._e():e("span",[t._v("Este campo é necessário!")])])]),e("button",{staticClass:"px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"},[t._v(" Criar usuário ")])])])},Mt=[],qt={name:"AddUser",data(){return{id:"",name:"",email:"",gender:"",status:""}},validations:{name:{required:S.C1,minLength:(0,S.Ei)(3)},email:{required:S.C1,email:S.Do},gender:{required:S.C1},status:{required:S.C1}},methods:{createUser(){this.$v.$touch();var t={name:this.name,email:this.email,gender:this.gender,status:this.status};mt.createUser(t).then((t=>{201==t.status&&(s.ZP.$toast.success("Usuário criado!",{position:"top"}),window.location.reload())})).catch((t=>{422==t.response.status&&(s.ZP.$toast.error(`Falha na validação de dados.\n                    Campo:${t.response.data[0].field} - Mensagem: ${t.response.data[0].message}`,{position:"top-right"}),400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"}))}))}}},Dt=qt,Nt=(0,u.Z)(Dt,Ot,Mt,!1,null,null,null),jt=Nt.exports,Et={name:"add-user-view",components:{AddUser:jt}},Tt=Et,Bt=(0,u.Z)(Tt,Ut,At,!1,null,null,null),St=Bt.exports,Ft=function(){var t=this,e=t._self._c;return e("section",{staticClass:"px-5 py-10"},[e("UserDetails")],1)},Lt=[],Ht=function(){var t=this,e=t._self._c;return e("section",{staticClass:"max-w-screen-xl mx-auto px-3 py-2 md:py-2"},[e("div",{staticClass:"mb-10 mt-3"},[e("router-link",{attrs:{to:"/users"}},[e("p",{staticClass:"text-orange-700 hover:underline mt-1 underline"},[t._v("Voltar")])]),e("h1",{staticClass:"text-3xl font-bold text-gray-800 mt-5"},[t._v(" Detalhes do usuário ")])],1),e("form",[e("div",{staticClass:"form-group mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",id:"name",placeholder:"Nome do usuário",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),e("div",{staticClass:"form-group mb-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"email",id:"email",placeholder:"E-mail do usuário",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),e("div",{staticClass:"form-group mb-6 flex gap-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.gender,expression:"user.gender"}],staticClass:"form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{name:"gender","aria-label":"Default select example"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"gender",e.target.multiple?o:o[0])}}},[e("option",{attrs:{selected:""}},[t._v("Selecione um gênero")]),e("option",{attrs:{value:"male"}},[t._v("Masculino")]),e("option",{attrs:{value:"female"}},[t._v("Feminino")])]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.status,expression:"user.status"}],staticClass:"form-select block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{name:"status","aria-label":"Default select example"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"status",e.target.multiple?o:o[0])}}},[e("option",{attrs:{selected:""}},[t._v("Selecione um status")]),e("option",{attrs:{value:"active"}},[t._v("Ativo")]),e("option",{attrs:{value:"inactive"}},[t._v("Inativo")])])]),e("button",{staticClass:"px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out",on:{click:t.updateUser}},[t._v(" Atualizar informações ")])])])},Rt=[],It={name:"user",data(){return{user:{id:"",name:"",email:"",gender:"",status:""}}},methods:{retrieveUser(t){mt.getUserDetails(t).then((t=>{200==t.status&&(s.ZP.$toast.success("Informações carregadas!",{position:"top"}),this.user=t.data)})).catch((t=>{400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),422==t.response.status&&s.ZP.$toast.error("Falha na validação de dados.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"})}))},updateUser(){mt.updateUserDetails(this.user.id,this.user).then((t=>{200==t.status&&(s.ZP.$toast.success("Informações atualizadas!",{position:"top"}),this.user=t.data),console.log(t.data),console.log("Informações atualizadas!")})).catch((t=>{422==t.response.status&&s.ZP.$toast.error(`Falha na validação de dados.\n                    Campo:${t.response.data[0].field} - Message: ${t.response.data[0].message}`,{position:"top-right"}),400==t.response.status&&s.ZP.$toast.error("Bad Request.",{position:"top-right"}),401==t.response.status&&s.ZP.$toast.error("A autenticação falhou.",{position:"top-right"}),404==t.response.status&&s.ZP.$toast.error("O recurso solicitado não existe.",{position:"top-right"}),415==t.response.status&&s.ZP.$toast.error("Tipo de media ou carácter não suportado.",{position:"top-right"}),429==t.response.status&&s.ZP.$toast.error("Muitos pedidos. O pedido foi rejeitado devido à limitação da taxa.",{position:"top-right"}),500==t.response.status&&s.ZP.$toast.error("Erro interno do servidor.",{position:"top-right"})}))}},mounted(){this.retrieveUser(this.$route.params.id)}},Vt=It,zt=(0,u.Z)(Vt,Ht,Rt,!1,null,null,null),Gt=zt.exports,Jt={name:"UserDetailsView",components:{UserDetails:Gt}},Wt=Jt,Yt=(0,u.Z)(Wt,Ft,Lt,!1,null,null,null),Kt=Yt.exports;s.ZP.use(b.Z);const Qt=[{path:"/",name:"home",component:N},{path:"/add-post/:id",name:"add-post",component:G},{path:"/posts/:id",name:"post-details",component:nt},{path:"/users",name:"users",component:kt},{path:"/add-user",name:"add-user",component:St},{path:"/users/:id",name:"user-details",component:Kt}],Xt=new b.Z({mode:"history",base:"/blog-users-crud/",routes:Qt});var te=Xt,ee=o(79),oe=o.n(ee),se=o(4659),re=o(6215),ae=o.n(re);s.ZP.config.productionTip=!1,s.ZP.use(se.ZP),s.ZP.use(ae()),s.ZP.component("data-table",oe()),new s.ZP({router:te,DataTable:oe(),render:t=>t(f)}).$mount("#app")},1291:function(t,e,o){t.exports=o.p+"img/post-image1.46d56686.jpg"}},e={};function o(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,r,a){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],a=t[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(n=!1,a<i&&(i=a));if(n){t.splice(u--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/blog-users-crud/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,i=s[0],n=s[1],l=s[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)o.o(n,r)&&(o.m[r]=n[r]);if(l)var u=l(o)}for(e&&e(s);d<i.length;d++)a=i[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},s=self["webpackChunkposts_crud"]=self["webpackChunkposts_crud"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(1463)}));s=o.O(s)})();
//# sourceMappingURL=app.18b95a0a.js.map