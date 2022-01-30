<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view/>
    </v-main>
    <footer />
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';
export default {
  name: 'App',
  components: {
    navbar,
    footer
  },

  data: () => ({
    //
  }),
};
</script>
