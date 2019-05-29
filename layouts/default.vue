<template>
  <v-app>
    <v-content>
      <app-toolbar />
      <app-drawer />
      <v-container> <nuxt /> </v-container>
      <app-footer />
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/common/AppToolbar'
import AppFooter from '~/components/common/AppFooter'
import AppDrawer from '~/components/common/AppDrawer'

export default {
  components: {
    AppToolbar,
    AppFooter,
    AppDrawer
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
