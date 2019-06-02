<template>
  <v-content class="pa-0 ma-0">
    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10>
          <app-home-start-screen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-home-what-we-do />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#4C4A78">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-home-about-chapter />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-home-event-show-case />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="py-5" style="background-color:#F9F9F9">
      <v-layout wrap align-start justify-start row fill-height>
        <v-flex xs12 md10 offset-md1 offset-lg1>
          <p class="google-font mb-2" style="font-size:150%">
            Our Feature Event & Meetup
          </p>
        </v-flex>
        <v-flex xs12 md10 offset-md1 offset-lg1>
          <app-home-feature-event />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <app-home-partners />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import AppHomeWhatWeDo from '~/components/home/AppHomeWhatWeDo'
import AppHomeStartScreen from '~/components/home/AppHomeStartScreen'
import AppHomeAboutChapter from '~/components/home/AppHomeAboutChapter'
import AppHomeEventShowCase from '~/components/home/AppHomeEventShowCase'
import AppHomePartners from '~/components/home/AppHomePartners'
import AppHomeFeatureEvent from '~/components/home/AppHomeFeatureEvent'

export default {
  components: {
    AppHomeStartScreen,
    AppHomeWhatWeDo,
    AppHomeAboutChapter,
    AppHomeEventShowCase,
    AppHomePartners,
    AppHomeFeatureEvent
  }
}
</script>
