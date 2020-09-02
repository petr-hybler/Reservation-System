import Home from './components/Home.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Services from './components/services/Services.vue'
import ServiceDetails from './components/services/ServiceDetails.vue'

import Reserve from './components/reserve/Reserve.vue'

import AdminHome from './components/admin/Main.vue'
import AdminLogin from './components/admin/Login.vue'

import NotFound from './components/generic/404.vue'

export const routes = [
// public
  { path: "", name: 'home', component: Home},
  { path: "/reserve", name: 'reserve', component: Reserve},
  { path: "/about", name: 'about', component: About},
  { path: "/gallery", name: 'gallery', component: Gallery},
  { path: "/services", name: 'services', component: Services},
  { path: '/services/:serviceName', name: 'serviceDetail', component: ServiceDetails},

 // private
  { path: "/login", name: 'login', component: AdminLogin},
  { path: "/admin", name: 'admin', component: AdminHome},

 // 404
  { path: "/not-found", name: 'not-found', component: NotFound},
  { path: "*", redirect: { name: 'not-found'}},
]
