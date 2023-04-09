import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="config-con">
            <li className="config-children">
              <input
                type="checkbox"
                id="content"
                onChange={() => onToggleShowContent()}
                checked={showContent}
              />
              <label htmlFor="content" className="labelProps">
                Content
              </label>
            </li>
            <li className="config-children">
              <input
                type="checkbox"
                id="leftNavBar"
                onChange={() => onToggleShowLeftNavbar()}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavBar" className="labelProps">
                Left NavBar
              </label>
            </li>
            <li className="config-children">
              <input
                type="checkbox"
                id="rightNavBar"
                onChange={() => onToggleShowRightNavbar()}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavBar" className="labelProps">
                Right NavBar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
