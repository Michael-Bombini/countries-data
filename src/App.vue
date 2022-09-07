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



</style>
