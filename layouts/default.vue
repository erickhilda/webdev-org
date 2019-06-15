<template>
  <v-app>
    <v-content>
      <app-toolbar />
      <v-container> <nuxt /> </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/common/AppToolbar'

export default {
  components: {
    AppToolbar
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
