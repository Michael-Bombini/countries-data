<template>
  <main class="bg-main">
    <CountriesList/>
  </main>
</template>

<script>
import CountriesList from '@/components/CountriesList.vue';
  export default {
    name: "HomePage",
    components: { CountriesList }
}
</script>

<style lang="scss" scoped>

</style>