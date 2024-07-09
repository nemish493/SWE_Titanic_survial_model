import Landing_page from './landing_page.vue'

describe('<Landing_page />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Landing_page)
  })
})