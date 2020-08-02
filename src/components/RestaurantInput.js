import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from "react-redux";

class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let info = {
      name: this.state.name, 
      location: this.state.location
    }
    this.props.addNewRestaurant(info)
  }

  render() {
    debugger
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    addNewRestaurant: (info) => {
      dispatch(addRestaurant(info))
    }
  }
}

//connect this component by wrapping RestaurantInput below
export default connect(null, mapDispatchToProps)(RestaurantInput)
