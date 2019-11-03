import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from '../containers/city';
import CityList from '../containers/city_list';

import ActiveCity from '../containers/active_city';

class App extends Component {
  

	render() {
	  // let thisCity = "";
	  // if (this.props.city) {
	  // 	thisCity = this.props.city
	  // }

	  return (
	    <div className="row">
	    	<CityList className="col-sm-4" />
	    	<ActiveCity className="col-sm-4" />     
	    </div>
	  );
	}
}

// function mapStateToProps(state) {
// 	return {
// 		city: state.selectedCity
// 	};
// }
export default App;
