import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <div className="bg-container">
    <div className="flex-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
