<template>
  <section class="container mx-auto">
    <input
      type="text"
      name=""
      id=""
      v-model="countryName"
      class="border-red-500 border"
      placeholder="Search country"
    />
    <select name="region" id="region" v-model="countryRegion">
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
 

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
      countryName: "",
      countryRegion: "",
    };
  },
  methods: {
    fetchData() {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        this.countries = resp.data;
      });
    },
  },
  computed: {
    countriesList() {
      if (this.countryName.trim().length === 0 && this.countryRegion === "" ) return this.countries;
      else
        return this.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.countryName.toLowerCase())
          &&
          country.region.toLowerCase().includes(this.countryRegion)
        );


        
    },

    // checkRegion() {
    //   if (!this.countryRegion) return this.countries;
    //   else
    //     return this.countries.filter((country) =>
    //       country.region
    //         .toLowerCase()
    //         .includes(this.countryRegion)
    //     );
    // }


  },
  mounted() {
    this.fetchData();
  },
  components: { TheCountry },
};
</script>

<style lang="scss" scoped></style>
