import { connect } from "react-redux";
import Detail from "Shared/Detail";

const mapStateToProps = ({ coinDetail }) => ({
  detail: coinDetail.detail
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

export default DetailContainer;
