import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import VueDragDrop from 'vue-drag-drop'
import App from './App'
import Piece from './Piece'
import ScoreBoard from './ScoreBoard'
import './assets/js/DragDropTouch'

Vue.use(ElementUI, {locale})
Vue.use(VueDragDrop)

Vue.component('piece', Piece)
Vue.component('score-board', ScoreBoard)

new Vue({
  el: '#app',
  render: h => h(App)
})
