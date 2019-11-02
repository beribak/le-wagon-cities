import React, { Component } from 'react';

class City extends Component {

	render() {

		if (this.props.city)
			return(
				<div>
					<h2>{this.props.city.name}</h2>
					<h5>{this.props.city.address}</h5>
				</div>
		);
		return null;
	}
}


export default City;