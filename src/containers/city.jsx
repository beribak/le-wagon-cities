import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';



class City extends Component {

	handleClick = () => {
		this.props.selectCity(this.props.city);
	}

	render() {

		let style = "card"

		if (this.props.city)
			if(this.props.city === this.props.selectedCity) {
				style += " active"
			}

			return(
				<div className={style} onClick={this.handleClick} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}')` }}>
					<h2>{this.props.city.name}</h2>
					<h5>{this.props.city.address}</h5>
				</div>
		);
		return null;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectCity },
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		selectedCity: state.selectedCity
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(City);