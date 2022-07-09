import { createApp } from 'vue';
import CountryFlag from 'vue-country-flag-next';

import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import router from '@/router';

import 'mdb-vue-ui-kit/css/mdb.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(i18n);

app.use(CountryFlag);

app.use(router);

app.mount('#app');
