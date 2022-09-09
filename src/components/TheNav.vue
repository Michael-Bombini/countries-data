<template>
  <header class="bg-primary">
    <nav class="container mx-auto justify-between p-6 flex items-center">
      <h1>Where in the world?</h1>
      <img  alt="">
      <button class="" @click="darkMode()">
        clickclick
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
      html.classList.add("dark");
    },
  },
};
</script>

<style lang="scss" scoped>

.bg-primary {
  @apply bg-white dark:bg-elementDark;
}

h1 {
    font-size: 1.2rem;
    font-weight: bold;
}

</style>
