import { connect } from 'react-redux'
import RequestView from './RequestView'
/*You can import some functions from your redux module for add functionality to you container
  *for example:
  *
  *import { Function } from '../../redux/modules/<ReduxModule>'
  */
import { getRequest, addSelection, addSelectionAll, validateRequest, rejectedRequest, informateRequest } from "redux/modules/Request";
import { getUser } from "redux/modules/UserState";
/*
  *Here you send the status that the container will handle.
  */
export default connect(
  // pass through the view, recibed by props
  (state) => ({
    user: state.user.user,
    isLoading: state.request.isLoading,
    data: state.request.data,
    selection: state.request.selection,
    selectAll: state.request.selectAll,
    error: state.request.error,
    //name: state.reduxState.propertyName,
  }),
  //Here goes functions that you want to inyect into container
  //{ Funcion },
  { getRequest, addSelection, addSelectionAll, validateRequest, rejectedRequest, informateRequest, getUser },
)(RequestView)