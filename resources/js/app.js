/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vue 2
//window.Vue = require('vue').default;

// Vue 3
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue 2
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue 3
import ExampleComponent from './components/ExampleComponent';
import EmployeeFrormComponent from './components/employee/EmployeeForm';
const app = createApp({})

app.component('example-component', ExampleComponent)
app.component('employee-form', EmployeeFrormComponent)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// Vue 2
// const app = new Vue({
//     el: '#app',
// });

// Vue 3
app.use(ElementPlus)
app.mount('#app')