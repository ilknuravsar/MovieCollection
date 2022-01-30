<template>
  <v-card class="mx-auto" shaped max-width="480" dark>
    <router-link :to="`/movie/${movie.id}`">
      <v-img :src="posterPath" alt="" class="" height="440px"></v-img>
    </router-link>
    <v-card-title class="subtitle-2">{{ movie.title }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="movie.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        >
        </v-rating>
        <div class="grey--text ml-2 mt-1">
          {{ movie.release_date }}
        </div>

        <div class="dark--text ml-2 mt-1">
          <v-btn v-on:click="addMovie()">
            <v-icon left>mdi-heart</v-icon>Favorite
          </v-btn>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    addMovie() {
      alert("Added Favorites");
    },
  },
};
</script>





