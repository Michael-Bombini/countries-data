<template>
  <section class="container mx-auto">
    <input type="text" name="" id="" v-model="countryName" class="border-red-500 border" placeholder="Search country">
    <div class="container mx-auto py-12 text">
      <div class="grid grid-cols-4 gap-12">
        <div v-for="(country, i) in countriesList" :key="i" class="">
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
    };
  },
  methods: {
    fetchData() {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        this.countries = resp.data;
      });
    },
  
  },
  computed : {
    countriesList(){
      if(this.countryName.trim().length === 0)
        return this.countries;
      else 
      return this.countries.filter((country) => country.name.common.toLowerCase().includes(this.countryName.toLowerCase()));
        


    }
  },
  mounted() {
    this.fetchData();
  },
  components: { TheCountry },
};
</script>

<style lang="scss" scoped></style>
