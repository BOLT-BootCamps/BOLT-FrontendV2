export const state = () => ({
  email: '',
  password: '',
  /* Aside */
  isAsideVisible: true,
  isAsideMobileExpanded: false,
  isNavBarVisible: true,
  isFooterBarVisible: true
})

export const mutations = {
  SET_EMAIL (state, userData) {
    state.email = userData
  },
  SET_PASSWORD (state, userData) {
    state.password = userData
  },
}
