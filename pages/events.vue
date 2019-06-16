<template>
  <v-content class="pa-2">
    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
          <p class="google-font mb-0" style="font-size:200%;color:#0277bd">
            {{ ChapterDetails.ChapterName }}'s Events
          </p>
          <p class="google-font mt-0 mb-0" style="font-size:110%">
            Questions? Please contact {{ ChapterDetails.ChapterEmail }}.
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-event-upcoming />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <app-event-past />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ChapterDetails from '~/assets/data/chapterDetails.json'
import AppEventUpcoming from '~/components/event/AppEventUpcoming'
import AppEventPast from '~/components/event/AppEventPast'
export default {
  components: {
    AppEventUpcoming,
    AppEventPast
  },
  data() {
    return {
      ChapterDetails: ChapterDetails
    }
  }
}
</script>
