import { mount } from '@cypress/react18'
import Header from '../../../components/header/Header'

describe('<Header>', () => {
  it('header component mounted', () => {
    mount(<Header />)
  })
  it('should have default text', () => {
    mount(<Header />)
    cy.get("p").should('have.text','This is header component changed');
  })
})