import { connect } from 'react-redux';
import Node from '../../components/Node/Node';
import * as actions from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Node);
