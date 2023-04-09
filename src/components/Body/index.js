import ConfigurationContext from '../../context/ConfigurationContext'
import LeftNavBarMenu from '../LeftNavbarMenu'
import RightBarMenu from '../RightBarMenu'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body displayProps">
          {showLeftNavbar && <LeftNavBarMenu />}
          {showContent && (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p className="body-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && <RightBarMenu />}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
