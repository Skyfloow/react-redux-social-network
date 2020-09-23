import { addMessageActionCreator } from "../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { authRedirectComponent } from "../../hoc/authRedirect";
import { compose } from "redux";
import { getDialogsPageSelector } from "../../redux/selectors/dialogs-selectors";

const mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPageSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (MessageName, MessageBody) => {
      dispatch(addMessageActionCreator(MessageName, MessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  authRedirectComponent
)(Dialogs);
