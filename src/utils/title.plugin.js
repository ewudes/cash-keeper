import localizeFilter from '@/components/filters/localize.filter';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$title = (titleKey) => {
      // TODO: Разобраться, почему undefined вместо названия приложения
      const appName = process.env.VUE_APP_TITLE;
      return `${localizeFilter(titleKey)} | ${appName}`;
    };
  },
};
