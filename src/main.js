import Vue from 'vue'
import App from './App'
import router from './router'
import VueTheMask from 'vue-the-mask'
import VeeValidate from 'vee-validate'
import Meta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueTheMask)
Vue.use(VeeValidate)
Vue.use(Meta)

function formatNumber(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d === undefined ? '.' : d,
    t = t === undefined ? ',' : t,
    s = n < 0 ? '-' : '',
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}

Vue.filter('formatCurrency', function (value) {
  return formatNumber(value, 2, ',', '.');
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
