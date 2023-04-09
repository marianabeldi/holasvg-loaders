import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../../components/global/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Codes: () => import('../../components/Codes.vue' /* webpackChunkName: "components/codes" */).then(c => wrapFunctional(c.default || c)),
  Effects: () => import('../../components/Effects.vue' /* webpackChunkName: "components/effects" */).then(c => wrapFunctional(c.default || c)),
  FillColor: () => import('../../components/FillColor.vue' /* webpackChunkName: "components/fill-color" */).then(c => wrapFunctional(c.default || c)),
  LoaderContainer: () => import('../../components/LoaderContainer.vue' /* webpackChunkName: "components/loader-container" */).then(c => wrapFunctional(c.default || c)),
  Shapes: () => import('../../components/Shapes.vue' /* webpackChunkName: "components/shapes" */).then(c => wrapFunctional(c.default || c)),
  Share: () => import('../../components/Share.vue' /* webpackChunkName: "components/share" */).then(c => wrapFunctional(c.default || c)),
  Styles: () => import('../../components/Styles.vue' /* webpackChunkName: "components/styles" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
