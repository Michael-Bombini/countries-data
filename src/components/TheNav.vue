<template>
  <header class="bg-header shadow">
    <nav class="container mx-auto justify-between py-4 flex items-center text">
      <h1>Where in the world?</h1>

      <button class="text font-semibold" @click="darkMode()">
        <span class="mr-1"> <i class="fa-solid fa-moon"></i></span>
        Dark Mode
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {};
  },
  methods: {
    darkMode() {
      const html = document.querySelector("html");
      html.classList.toggle("dark");
    },
  },
};
</script>

<style lang="scss" scoped>

h1 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
