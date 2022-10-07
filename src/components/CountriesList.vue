<template>
  <section class="container mx-auto">
    <div class="flex justify-between py-5">
      <div class="relative inline-block">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name=""
          id=""
          v-model="countryName"
          class="bg-header shadow text rounded-sm"
          placeholder="Search for a country..."
        />
      </div>

      <select
        name="region"
        class="bg-header text py-2 px-5 rounded-sm"
        id="region"
        v-model="countryRegion"
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>

    <div class="container mx-auto py-12 text">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div v-for="(country, i) in countriesList" :key="i" class="">
          <router-link
            :to="{ name: 'countryInfo', params: { name: country.cca3 } }"
          >
            <TheCountry :country="country" />
          </router-link>
        </div>
      </div>
      <div v-if="countriesList.length === 0 && loading" class="text-center text-4xl">
        No results found!
      </div>
      <div v-else-if="loading===false" class="LOADER">Loading data...</div>
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
      loading : false,
    };
  },
  methods: {
    fetchData() {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        this.countries = resp.data;
        this.loading = true;
      });
    },
  },
  computed: {
    countriesList() {
      if (this.countryName.trim().length === 0 && this.countryRegion === "")
        return this.countries;
      else
        return this.countries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .includes(this.countryName.toLowerCase()) &&
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

<style lang="scss" scoped>
input {
  width: 400px;
  height: 20px;
  padding: 1.6rem 2.5rem;
}

i {
  position: absolute;
  top: 15px;
  left: 15px;
}

.LOADER {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50% , -50%);
}

</style>
