import React from 'react';
import { connect } from 'react-redux';
// import { selectCity } from '../actions';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city col-sm-8">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city col-sm-8 p-4 text-center">
      <h1>{props.activeCity.name}</h1>
      <h4>{props.activeCity.address}</h4>
      <img src={url} className="image" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);