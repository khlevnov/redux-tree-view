import { connect } from 'react-redux';
import Node from '../../components/Node/Node';
import { addChild, remove } from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  {
    addChild,
    remove
  }
)(Node);
