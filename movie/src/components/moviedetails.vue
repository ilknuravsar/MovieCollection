<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              width="410"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <router-link :to="`/movie/${movie.id}`">
                <v-img :src="posterPath" alt="" class="" />
              </router-link>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <h1 class="grey--text text-darken-3 mt-5">{{ this.movie.title }}</h1>

          <div class="mt-5">
            <div class="">
              <h3>Rating</h3>

              <span class="ml-1">
                {{ movie.vote_average * 10 }}%
                <span
                  ><v-rating
                    :value="movie.vote_average / 2"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  >
                  </v-rating
                ></span>
              </span>
            </div>
          </div>

          <div class="mt-5">
            <div class="">
              <h3>Relase Date</h3>
              {{ movie.release_date }}
            </div>
          </div>

          <div class="mt-5">
            <div class="">
              <h3>Categories</h3>
              <span
                v-for="(item, index) in movie.genres"
                :key="index"
                class="ml-1"
              >
                {{ item.name }}
                <span v-if="movie.genres.length - 1 != index">,</span>
              </span>
            </div>
          </div>

          <div class="mt-5">
            <div>
              <div>
                <h3>Movie Desc.</h3>
                <p class="mt-5 grey--text text--darken-3 subheader">
                  {{ this.movie.overview }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <div class="">
              <h3>Production Countries</h3>
              <span
                v-for="(item, index) in movie.production_countries"
                :key="index"
                class="ml-1"
              >
                {{ item.name }}
              </span>
            </div>
          </div>

          <div class="mt-5">
            <div class="">
              <h3>Language</h3>
              <span
                v-for="(item, index) in movie.spoken_languages"
                :key="index"
                class="ml-1"
              >
                {{ item.name }}
              </span>
            </div>
          </div>
          <v-dialog v-model="dialog" persistent max-width="800px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ this.movie.title }}</span>
              </v-card-title>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>

      <v-divider class="mt-2"></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false,
    };
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" +
          movieId +
          "?append_to_response=credits,videos,images,videos,spoken_languages,production_countries"
      );
      this.movie = response.data;
    },
    openYouTubeModel() {
      this.mediaURL = this.youtubeVideo();
      this.isVideo = true;
    },
    openImageModel() {
      this.isVideo = false;
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    },
  },
};
</script>

