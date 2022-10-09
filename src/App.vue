<template>
  <div id="app">
    <TheNav/>
    <!-- <nav>
     <router-link to="/">Home</router-link> | 
    <h1 class="dark:text-3xl font-bold underline bg-red-800 text-center text-white">Hello world!</h1> 
    </nav> -->
    
    <router-view />
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue';
export default{
    components: { TheNav }
}

</script>

<style>
html , body {overflow-x: hidden;}
* {
  transition: background 0.8s ease;

}

.bg-header {
  @apply bg-white dark:bg-elementDark;
}

.bg-main {
  @apply bg-backgroundLight dark:bg-backgroundDark;
}

.text {
  @apply text-textLight dark:text-darkTextLightEl;
}

/* * {
  transition: background-color ease 0.5s, color ease 0.4s;
} */


</style>
