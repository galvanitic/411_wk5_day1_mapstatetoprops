import { connect } from "react-redux";
import Car from '../components/Car';
import state from "../redux/state";

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Car)