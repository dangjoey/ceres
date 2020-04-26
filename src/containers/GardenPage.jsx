import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Garden from '../components/Garden';

const GardenPage = props => {

  const [crops, setCrops] = useState([]);

  useEffect(() => {
    setCrops(props.crops);
  });

  return (
    <Garden
      crops={crops}
      week={props.week}
      gardenName={props.gardenName}
      locationName={props.locationName}
    />
  );
}

const mapStateToProps = state => ({
  crops: state.crops.crops,
  potatoes: state.crops.potatoes,
  tomatoes: state.crops.tomatoes,
  onions: state.crops.onions,
  cabbages: state.crops.cabbages,
  carrots: state.crops.carrots,
  bellPeppers: state.crops.bellPeppers,
  week: state.crops.currentWeek,
  gardenName: state.profile.name,
  locationName: state.profile.location
})

export default connect(
  mapStateToProps,
  { }
)(GardenPage);
