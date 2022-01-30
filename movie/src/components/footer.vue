<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="pink white--text text-center">
        <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem
          repellendus in porro corrupti obcaecati neque provident aut debitis?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>AA</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

