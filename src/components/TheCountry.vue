<template>
  <div class="shadow">
    <div class="flag">
      <img :src="country.flags.svg" alt="" />
    </div>
    <div class="p-6 bg-header">
      <h2>{{ country.name.common }}</h2>
      <div class="mt-1">
        <strong>Population: </strong>{{ country.population }}
      </div>
      <div class="mt-1"><strong>Region: </strong>{{ country.region }}</div>

      <strong class="mt-1">Capital: </strong>
      <div
        v-for="capital in country.capital"
        :key="capital"
        class="inline-block"
      >
        {{ capital }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCountry",
  props: {
    country: Object,
  },
};
</script>

<style lang="scss" scoped>
.flag {
  height: 200px;
  width: 100%;
}
h2 {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
