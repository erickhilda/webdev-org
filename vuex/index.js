import getters from './getters'
import mutations from './mutations'
// import actions from './actions'

const state = () => ({
  drawer: false,
  items: [
    { text: 'Home', to: '/', icon: 'home' },
    { text: 'Events', to: '/events', icon: 'rounded_corner' },
    { text: 'Team', to: '/team', icon: 'group' },
    { text: 'About', to: '/about', icon: 'toc' },
    { text: 'Contact', to: '/contact', icon: 'person' }
  ]
})

export default {
  state,
  getters,
  mutations
  // actions
}
