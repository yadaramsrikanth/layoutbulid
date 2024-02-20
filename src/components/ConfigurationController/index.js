// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div>
          <h1>Layout</h1>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
