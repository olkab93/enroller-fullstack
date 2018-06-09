import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = '/api';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

new Vue({
    el: '#app',
    render: h => h(App),
    http: {
        root: '/api',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }

});

