import React , {Component} from 'react';
import { connect } from 'react-redux'

class Header extends Component {
    renderContent() {
      switch(this.props.auth){
        case null:
          return 'Loading'
        case false:
          return 'not logged in'
        default:
          return 'logged in'
          
      }
    }
  
    render(){
      console.log(this.props)
        return(
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Emaily</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header);