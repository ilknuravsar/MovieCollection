<template>
  <div>
    <popularmovies />
  </div>
</template>

<script>
import popularmovies from "../components/popularmovies.vue";

export default {
  name: "Home",
  components: {
    popularmovies,
  },
};
</script>
