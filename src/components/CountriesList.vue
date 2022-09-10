<template>
  <div class="container mx-auto py-12 text">
    <div class="columns-4">
      <div v-for="(country, i) in countries" :key="i" class="m-4">
        <TheCountry :country="country"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TheCountry from "./TheCountry.vue";

export default {
  name: "CountriesList",
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    fetchData() {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        this.countries = resp.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
  components: { TheCountry },
};
</script>

<style lang="scss" scoped></style>
