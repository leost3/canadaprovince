import { Content } from '../components/containers/Content'
import { Header } from '../components/elements/Header'
import { Subheader } from '../components/elements/Subheader'
import { Theme } from '../styles/theme'

const IndexPage = () => (
  <Theme>
    <Header />
    <Subheader links={['Cities','Provinces','three']}/>
    <Content />
  </Theme>
)

export default IndexPage
