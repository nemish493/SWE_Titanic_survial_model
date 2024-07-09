import PredictPage from './PredictPage.vue'

describe('<PredictPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PredictPage)
  })
})