<template>
  <main class="bg-main">
    <div class="container mx-auto">
      <div class="py-12">
        <router-link class="py-2 px-8 text bg-header shadow" to="/"
          ><i class="fa-solid fa-arrow-left"></i>
          <span class="mx-1">Back</span></router-link
        >
      </div>
      <div
        class="flex flex-col md:flex-row items-center justify-between"
        v-if="country"
      >
        <div class="p-4 img-container md:w-2/6 lg:w-2/5">
          <img src="" alt="" /><img :src="flag" alt="" />
        </div>
        <div class="w-2/4 py-12 text">
          <h2>{{ this.$route.params.name }}</h2>
          <div class="flex flex-col md:flex-row md:gap-8">
            <ul>
              <li><strong class="mr-1">Native Name: </strong>{{ native }}</li>
              <li>
                <strong class="mr-1">Population: </strong> {{ population }}
              </li>
              <li><strong class="mr-1">Region: </strong>{{ region }}</li>
              <li><strong class="mr-1">Sub Region: </strong>{{ subRegion }}</li>
              <li><strong class="mr-1">Capital: </strong>{{ capital }}</li>
            </ul>
            <ul>
              <li><strong class="mr-1">Top Level Domain: </strong>{{ tld }}</li>
              <li>
                <strong>Currencies: </strong>
                <span
                  class="mr-1"
                  v-for="currency in currencies"
                  :key="currency.name"
                  >{{ currency.name }}</span
                >
              </li>
              <li>
                <strong class="mr-1">Languages: </strong>
                <span v-for="language in languages" :key="language.name">
                  {{ language.name }}
                </span>
              </li>
            </ul>
          </div>
          <div
            v-for="border in borders"
            :key="border"
            class="inline-block m-2 bg-header shadow py-2 px-4"
          >
            <router-link
              :to="{ name: 'countryInfo', params: { name: border } }"
            >
              {{ border }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "CountryInfo",
  data() {
    return {
      country: [],
      flag: null,
      native: null,
      population: null,
      region: null,
      subRegion: null,
      capital: [],
      tld: [],
      currencies: [],
      languages: [],
      borders: [],
    };
  },
  watch: {
    $route: {
      handler: "fetchCountry",
      immediate: true,
    },
  },
  methods: {
    fetchCountry() {
      axios
        .get("https://restcountries.com/v2/alpha/" + this.$route.params.name)
        .then((resp) => {
          this.country = resp.data;
          this.flag = this.country.flags.svg;
          this.native = this.country.name.official;
          this.population = this.country.population.toLocaleString();
          this.region = this.country.region;
          this.subRegion = this.country.subregion;
          this.capital = this.country.capital;
          this.tld = this.country.topLevelDomain[0];
          this.currencies = this.country.currencies;
          this.languages = this.country.languages;
          this.borders = this.country.borders;
        });
    },
  },
  mounted() {
    this.country = [];
    this.fetchCountry();
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
h2 {
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}
li {
  font-size: 1.2rem;
  margin: 0.8rem 0;
}

img {
  max-width: 100%;
}
ul {
  width: 50%;
}
</style>
