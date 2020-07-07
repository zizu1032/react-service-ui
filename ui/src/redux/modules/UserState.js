export const initialState = {
  isAuthenticated: !!localStorage.getItem("id_token"),
  user: JSON.parse(localStorage.getItem("id_user"))
};

export const GET_USER = "User/GET_USER";
export const GET_USER_FAIL = "User/GET_USER_FAIL";

export const obtainUser = () => ({
  type: GET_USER
});

export const obtainUserFail = () => ({
  type: GET_USER_FAIL
});

export const getUser = () => (dispatch, getState) => {
  // console.log('getUser function -->')

  const userState = getState().user
  // console.log(userState)

  if ( userState.isAuthenticated && !!userState.user ) {
   dispatch(obtainUser());
  }else {
   dispatch(obtainUserFail());
  }
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER:
      return {
        ...state,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
