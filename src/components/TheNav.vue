<template>
  <header class="bg-header shadow">
    <nav class="container mx-auto justify-between py-4 flex items-center text">
      <h1>Where in the world?</h1>

      <button class="text font-semibold" @click="darkMode()">
        <span class="mr-1"> &#9790; </span>
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
.bg-header {
  @apply bg-white dark:bg-elementDark;
}

.text {
  @apply text-textLight dark:text-darkTextLightEl;
}

* {
  transition: background-color ease 0.5s, color ease 0.4s;
}

h1 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
