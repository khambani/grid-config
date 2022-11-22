import { mount } from '@cypress/react18'
import Header from '../../components/Header'

describe('<DataGrid>', () => {
  it('mounts', () => {
    mount(<Header />)
  })
})