<template>
  <ul class="nav-list">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
        <a href="#" class="waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/components/filters/localize.filter';

export default {
  name: 'Navigation',
  props: ['value'],
  data: () => ({
    links: [
      { title: localizeFilter('Menu_Bill'), url: '/', exact: true },
      { title: localizeFilter('Menu_History'), url: '/history' },
      { title: localizeFilter('Menu_Planning'), url: '/planning' },
      { title: localizeFilter('Menu_NewRecord'), url: '/record' },
      { title: localizeFilter('Menu_Category'), url: '/categories' },
    ],
  }),
};
</script>

<style lang="scss">
  .nav-list {
    margin-right: auto;
    margin-left: 74px;

    & .active {
      background-color: transparent;
      border-bottom: 2px solid red;
      height: 64px;
    }
  }

  li a {
    color: black !important
  }
</style>
