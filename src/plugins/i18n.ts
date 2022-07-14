import { createI18n } from 'vue-i18n';
import en from '@/assets/lang/translations/en.json';
import cs from '@/assets/lang/translations/cs.json';

export default createI18n({
    locale: 'cs',
    fallbackLocale: 'en',
    messages: { en: en, cs: cs }
});