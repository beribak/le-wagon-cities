import React from 'react';

import City from '../containers/city';
import CityList from '../containers/city_list';

const App = () => {
  return (
    <div className="app row">
    	<CityList className="col-sm-4" />
    	<div className="col-sm-8">
    		<City />      
    	</div>
    </div>
  );
};

export default App;
