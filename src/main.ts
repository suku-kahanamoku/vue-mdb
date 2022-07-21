import { createApp } from 'vue';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import router from '@/router';
import { HttpService } from '@/plugins/service/http.service';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.provide('HttpService', new HttpService());
app.mount('#app');
