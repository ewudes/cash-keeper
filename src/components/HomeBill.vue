<template>
  <div class="col s12 m6 l4">
    <div class="card bill-card">
      <div class="card-content">
        <span class="card-title">Счет в валюте</span>

        <p
          class="currency-line"
          v-for="cur of currencies"
          :key="cur">
          <span>
            {{getCurrency(cur) | currency(cur)}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['RUB', 'EUR', 'USD'],
  }),
  computed: {
    base() {
      // eslint-disable-next-line dot-notation
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR']);
    },
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency]);
    },
  },
};
</script>
