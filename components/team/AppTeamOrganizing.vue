<template>
  <v-container class="pa-0 mb-5">
    <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
      <v-flex xs12 class="mb-3">
        <p class="google-font" style="font-size:130%;">
          Core Organizing Team Members
        </p>
        <v-divider></v-divider>
      </v-flex>
      <v-flex v-for="(item, i) in TeamDetails" :key="i" xs12 md3 lg3>
        <v-list three-line class="pa-2">
          <template>
            <v-list-tile :key="item.name" avatar>
              <v-list-tile-avatar>
                <img :src="getImgUrl(item.profileImage)" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title class="google-font">
                  {{ item.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title
                  ><span class="google-font">{{
                    item.designation
                  }}</span></v-list-tile-sub-title
                >
                <v-list-tile-sub-title>
                  <v-btn
                    v-if="item.twitter.length > 0"
                    class="mt-0 mx-0"
                    icon
                    :href="item.twitter"
                    target="_blank"
                  >
                    <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
                  </v-btn>

                  <v-btn
                    v-if="item.linkedin.length > 0"
                    class="mt-0 mx-0"
                    icon
                    :href="item.linkedin"
                    target="_blank"
                  >
                    <v-icon small style="color:#0077b5"
                      >fab fa-linkedin-in</v-icon
                    >
                  </v-btn>

                  <v-btn
                    v-if="item.github.length > 0"
                    class="mt-0 mx-0"
                    icon
                    :href="item.github"
                    target="_blank"
                  >
                    <v-icon small style="color:#333">fab fa-github</v-icon>
                  </v-btn>
                  <!-- <v-btn class="mt-0 mx-0" icon v-if="(item.website).length>0" :href="item.website" target="_blank">
                                    <v-icon style="color:#333">link</v-icon>
                                </v-btn> -->
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TeamDetails from '~/assets/data/organizingTeam.json'
export default {
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + '..'
    }
  },
  data() {
    return {
      TeamDetails: TeamDetails,
      showLoader: true,
      showData: false
    }
  },
  mounted() {},
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return `/team/'${pic}`
      } else {
        return `/team/avatar.png`
      }
    }
  }
}
</script>
