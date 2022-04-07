import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { render } from '@testing-library/react';
import {DISHES} from "../Shared/dishes";
import DishDetails from './DishDetails';
import Menu from './Menu';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish: null

    };
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
  render(){
    
    return (
      <div>
        <HeaderComponent />
       
        <Menu  dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetails dish ={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
       );
     }
  }
 

export default Main;
