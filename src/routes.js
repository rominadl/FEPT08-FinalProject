import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Buscador from './views/Buscador.vue'
import MiPerfil from './views/MiPerfil.vue'
import MiLista from './views/MiLista.vue'
import Kanban from './views/Kanban.vue'
import NotFound from './views/NotFound.vue'

const routes = [
     { path: "/:path(.*)",
        name:"NotFound",
        component:NotFound
    },

    { path:"/",
        name:"Home",
        component:Home
    },

    { path:"/Buscador",
        name:"Buscador",
        component:Buscador
    },

    { path:"/MiPerfil",
        name:"MiPerfil",
        component:MiPerfil
    },

    { path:"/MiLista",
        name:"MiLista",
        component:MiLista
    },

    { path:"/Kanban",
        name:"Kanban",
        component:Kanban
    },


];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router