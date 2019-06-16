<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="mb-0">
          <p class="google-font mb-0 mt-0" style="font-size:200%;color:#616161">
            About {{ ChapterDetails.ChapterName }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-about-community />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5 pt-5 pb-1">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-about-contact-info />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5 py-2 pt-0">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-about-code-of-conduct />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5 py-2">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <!-- <app-anti-harassment-policy /> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ChapterDetails from '~/assets/data/chapterDetails.json'
import AppAboutCommunity from '~/components/about/AppAboutCommunity'
import AppAboutContactInfo from '~/components/about/AppAboutContactInfo'
import AppAboutCodeOfConduct from '~/components/about/AppAboutCodeOfConduct'
// import AppAntiHarassmentPolicy from '~/components/about/AppAboutAntiHarassmentPolicy'
export default {
  components: {
    AppAboutCommunity,
    AppAboutContactInfo,
    AppAboutCodeOfConduct
    // AppAntiHarassmentPolicy
  },
  data() {
    return {
      ChapterDetails: ChapterDetails
    }
  }
}
</script>
