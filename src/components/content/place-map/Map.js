import React from 'react';
import { connect } from 'react-redux';
import DG from '../../../map';
import { setView } from '../../../map';
import { changeCoords, clearDataFromContainer } from '../../../redux/actions';
// import DG from '2gis-maps';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    a: 5,
  };
  componentDidMount() {
    const changeCoords = this.props.changeCoords;
    DG(changeCoords, this.props.clearDataFromContainer, this.props.coords);
  }
  componentDidUpdate() {
    setView(this.props.coords);
  }
  render() {
    console.log();
    return <div className="map" id="map"></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    coords: state.app.viewCoords,
  };
};
export default connect(mapStateToProps, { changeCoords, clearDataFromContainer })(Map);
