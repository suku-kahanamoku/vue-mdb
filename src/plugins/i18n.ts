import { createI18n } from 'vue-i18n';
import en from '@/assets/en.json';
import cs from '@/assets/cs.json';

export default createI18n({
    locale: 'cs',
    fallbackLocale: 'en',
    messages: { en: en, cs: cs }
});