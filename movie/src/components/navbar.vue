<template>
  <nav>
    <v-app-bar app dark>
      <v-btn text class="ml-2" to="/">Movies</v-btn>
      <v-btn text class="ml-2" to="/favorite">Favorite </v-btn>

      <v-spacer></v-spacer>
      

      <v-autocomplete
        v-model="search"
        :loading="loading"
        cache-items
        class="mx-4"
        flat
        hide-details
        label="Search for movies"
        solo-inverted
        hide-selected
        color="white"
        :items="movies"
        item-text="title"
        item-value="id"
        id="search"
        clearable
        hide-no-data
      >
        <template v-slot:item="{ item }">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template>

        <v-btn
          class="hidden-sm-and-down"
          slot="append"
          rounded
          @click="searchMovie"
        >
          
          <v-icon class="ml-3"> mdi-magnify </v-icon>
        </v-btn>

        <v-btn
          class="hidden-md-and-up"
          max-height="35px"
          max-width="35px"
          slot="append"
          fab
          @click="searchMovie"
        >
          <v-icon> mdi-magnify </v-icon>
        </v-btn>
      </v-autocomplete>
    </v-app-bar>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    drawer: null,
    model: "",
    search: null,
    movies: [],
  }),
  mounted() {
    this.loadMovies();
  },
  methods: {
    loadMovies: async function () {
      try {
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    actions: {
    searchMovies({ commit, state }, searchKey) {
      axios
        .get(`${state.baseUrl}/?apiKey=${state.apiKey}&s=${searchKey}`)
        .then((res) => {
          commit("fillMovies", res.data.Search);
        })
        .catch((err) => console.error(err));
    }
  }
}
};
</script>
