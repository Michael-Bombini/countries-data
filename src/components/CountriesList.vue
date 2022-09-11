<template>
  <section class="container mx-auto">
    <input type="text" name="" id="" v-model="countryName" @keyup="filterCountry()" class="border-red-500 border" placeholder="Search country">
    <div class="container mx-auto py-12 text">
      <div class="grid grid-cols-4 gap-12" v-if="countriesFilter.length === 0">
        <div v-for="(country, i) in countries" :key="i" class="">
          <TheCountry :country="country" />
        </div>
      </div>

      <div class="grid grid-cols-4 gap-12" v-else>
        <div v-for="(country, i) in countriesFilter" :key="i" class="">
          <TheCountry :country="country" />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import axios from "axios";
import TheCountry from "./TheCountry.vue";

export default {
  name: "CountriesList",
  data() {
    return {
      countries: [],
      countryName : "",
      countriesFilter : [],
    };
  },
  methods: {
    fetchData() {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        this.countries = resp.data;
      });
    },
    filterCountry() {
      this.countriesFilter = []
      let countrySearched = this.countryName.trim().toLowerCase();

      this.countries.forEach(element => {
        let countryName = element.name.common.toLowerCase();

        if(countryName.includes(countrySearched))
          this.countriesFilter.push(element);

      });

    }
  },
  mounted() {
    this.fetchData();
  },
  components: { TheCountry },
};
</script>

<style lang="scss" scoped></style>
