import Home from './components/Home.vue'
import Reserve from './components/Reserve.vue'
import About from './components/About.vue'
import Pricing from './components/Pricing.vue'

export const routes = [
  { path: "",
    name: 'home',
    component: Home},
  { path: "/reserve",
    name: 'reserve',
    component: Reserve},
  { path: "/about",
    name: 'about',
    component: About},
  { path: "/pricing",
    name: 'pricing',
    component: Pricing}
]
