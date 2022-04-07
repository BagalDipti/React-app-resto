import React, { Component } from 'react'
import { Navbar, NavbarBrand, jumbotron} from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Crazy Taste</NavbarBrand>
          </div>
        </Navbar>
        <jumbotron>
        <div className="container-fluid">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>

        </jumbotron>
      </React.Fragment>
    )
  }
}

export default HeaderComponent
