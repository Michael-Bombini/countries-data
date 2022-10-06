<template>
  <main class="bg-main">
    <div class="container mx-auto">
      <div class="py-12">
        <router-link class="py-2 px-8 text bg-header shadow" to="/"
          ><i class="fa-solid fa-arrow-left"></i>
          <span class="mx-1">Back</span></router-link
        >
      </div>
      <div class="flex justify-between" v-if="country">
        <div class="w-2/5"><img src="" alt=""><img :src="country[0].flags.svg" alt=""></div>
        <div class="w-2/4 py-12 text">
          <h2>{{country[0].name.common}}</h2>
          <ul>
            <li><strong class="mr-1">Native Name: </strong>{{country[0].name.nativeName.isl.official}}</li>
            <li><strong class="mr-1">Population: </strong>{{country[0].population.toLocaleString('en')}}</li>
            <li><strong class="mr-1">Region: </strong>{{country[0].region}}</li>
            <li><strong class="mr-1">Sub Region: </strong>{{country[0].subregion}}</li>
            <li><strong class="mr-1">Capital: </strong>{{country[0].capital[0]}}</li>
          </ul>
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
      country : [],
    };
  },
  methods: {
    fetchCountry() {
      axios
        .get("https://restcountries.com/v3.1/name/" + this.$route.params.name)
        .then((resp) => {
          console.log(resp.data);
          this.country = resp.data;
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
</style>
