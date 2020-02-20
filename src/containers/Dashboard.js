import { connect } from "react-redux";
import Dashboard from '../components/Dashboard';
import state from "../redux/state";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Dashboard)