<template>
    <div>
        <img :src="country.flags.svg" alt="">
        <h2>{{country.name.common}}</h2>
        <div>{{country.population}}</div>
        <div>{{country.region}}</div>
        <div>{{country.capital}}</div>
    </div>
</template>

<script>
    export default {
        name : "TheCountry",
        props: {
            country : Object,
        }
    }
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
    aspect-ratio: 3/2;
    object-fit: contain;
}
</style>