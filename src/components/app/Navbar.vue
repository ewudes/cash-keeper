<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">
        <img class="brand-logo__img" src="@/assets/img/logo.svg" alt="Cash Keeper">
      </a>
      <div class="navbar-left">
        <a href="#"
          data-target="mobile-demo"
          class="sidenav-trigger"
          @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
      </div>
      <Navigation />

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Navigation from '@/components/app/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },

  computed: {
    name() {
      return this.$store.getters.info.name;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
};
</script>

<style lang="scss">
  .nav {
    box-shadow: none;
    border-bottom: 1px solid #E5E5E5;
  }
  .nav-wrapper {
    background-color: #ffffff;

    .brand-logo {
      display: block;
      height: 64px;
      padding: 5px;

      &__img {
        width: 54px;
        height: 54px;
      }
    }
  }

</style>
