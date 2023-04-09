import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/global/Footer.vue'
export { default as Codes } from '../../components/Codes.vue'
export { default as Effects } from '../../components/Effects.vue'
export { default as FillColor } from '../../components/FillColor.vue'
export { default as LoaderContainer } from '../../components/LoaderContainer.vue'
export { default as Shapes } from '../../components/Shapes.vue'
export { default as Share } from '../../components/Share.vue'
export { default as Styles } from '../../components/Styles.vue'

export const LazyFooter = import('../../components/global/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyCodes = import('../../components/Codes.vue' /* webpackChunkName: "components/codes" */).then(c => wrapFunctional(c.default || c))
export const LazyEffects = import('../../components/Effects.vue' /* webpackChunkName: "components/effects" */).then(c => wrapFunctional(c.default || c))
export const LazyFillColor = import('../../components/FillColor.vue' /* webpackChunkName: "components/fill-color" */).then(c => wrapFunctional(c.default || c))
export const LazyLoaderContainer = import('../../components/LoaderContainer.vue' /* webpackChunkName: "components/loader-container" */).then(c => wrapFunctional(c.default || c))
export const LazyShapes = import('../../components/Shapes.vue' /* webpackChunkName: "components/shapes" */).then(c => wrapFunctional(c.default || c))
export const LazyShare = import('../../components/Share.vue' /* webpackChunkName: "components/share" */).then(c => wrapFunctional(c.default || c))
export const LazyStyles = import('../../components/Styles.vue' /* webpackChunkName: "components/styles" */).then(c => wrapFunctional(c.default || c))
