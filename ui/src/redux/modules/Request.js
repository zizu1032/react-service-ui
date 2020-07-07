import ApolloClinet, { gql } from 'apollo-boost';
// import axios from 'utils/axios';
// import { getCatalogs } from 'redux/modules/Catalogs';

export const initialState = {
  isLoading: false,
  data: [],
  selection: [],
  selectAll: false,
  error: null
};

export const START_REQUEST = "Request/START_REQUEST";
export const LOAD_REQUEST = "Request/LOAD_REQUEST";
export const REQUEST_SUCCESS = "Request/REQUEST_SUCCESS";
export const ADD_SELECTION = "Request/ADD_SELECTION";
export const ADD_SELECTION_ALL = "Request/ADD_SELECTION_ALL";
export const VALIDATE_REQUEST = "Request/VALIDATE_REQUEST";
export const INFORMATE_REQUEST = "Request/INFORMATE_REQUEST";
export const REJECTED_REQUEST = "Request/REJECTED_REQUEST";
export const BATCH_REQUEST = "Request/BATCH_REQUEST";

export const startRequest = () => ({
  type: START_REQUEST
});

export const loadRequest = (payload) => ({
  type: LOAD_REQUEST,
  payload
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS
});

export const addToSelection = (payload) => ({
  type: ADD_SELECTION,
  payload
});

export const addToSelectionAll = (payload, isSelectAll) => ({
  type: ADD_SELECTION_ALL,
  payload,
  isSelectAll
});

export const validRequest = (row) => ({
  type: VALIDATE_REQUEST,
  row
});

export const infoRequest = (row) => ({
  type: INFORMATE_REQUEST,
  row
});

export const rejectRequest = (row) => ({
  type: REJECTED_REQUEST,
  row
});

export const batchToRequest = (requests) => ({
  type: BATCH_REQUEST,
  requests
});

export const getRequest = () => async (dispatch, getState) => {

  dispatch(startRequest());
  // await dispatch(getCatalogs());
  // const catalogs = getState().catalogs.data

  let client = new ApolloClinet({
    uri: process.env.REACT_APP_API_URI
  });

  const query = gql`
  {
    requests {
      id
      status
      request_code
      crop
      requester
      services
      requester_adress
      requester_email
      submition_date
      service_provider
    }
  }
  `;

  client.query({
      query,
  })
  .then(response => {
    const {requests} = response.data;

    const dataAdapter = requests.map((request) => {
      return {
        "sr_id": request.id,
        "crop": request.crop,
        "date_submitted": new Date(),
        "status": "New",
        "service": request.services,
        "requester": request.requester,
        "service_provider": request.service_provider  
      }
    })
      
    dispatch(loadRequest(dataAdapter));
    dispatch(requestSuccess());
  })
  .catch(err => {
    // dispatch(requestFailure());
    console.log('service-request')
    console.log(err.message)
    throw new Error(err.message)
  })
};

export const addSelection = (select) => dispatch => {
    dispatch(addToSelection(select));
};

export const addSelectionAll = (selectAll, select) => dispatch => {
    dispatch(addToSelectionAll(select, selectAll));
};

export const validateRequest = (row) => async dispatch => {
  // await axios.put('/service-request', { 
  //     put_service_request: {
  //       id: row.sr_id,
  //       request_status_id: 4,
  //     }
  //   }).then(response => {
  //     dispatch(validRequest(row));
  //   })
};

export const informateRequest = (row) => dispatch => {
    dispatch(infoRequest(row));
};

export const rejectedRequest = (row) =>  async dispatch => {
  // await axios.put('/service-request', { 
  //     put_service_request: {
  //       id: row.sr_id,
  //       request_status_id: 2,
  //     }
  //   }).then(response => {
  //     dispatch(rejectRequest(row));
  //   })
};

export default function RequestReducer(state = initialState, { type, payload, isSelectAll, row, requests }) {
  switch (type) {
    case START_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case LOAD_REQUEST:
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: null
      };
    case ADD_SELECTION:
      return {
        ...state,
        selection: payload
      };
    case ADD_SELECTION_ALL:
      return {
        ...state,
        selection: payload,
        selectAll: isSelectAll
      };
    case VALIDATE_REQUEST:
      let newDataValid = [...state.data];
      const newRowValid = newDataValid.find( e => row.sr_id === e.sr_id) 
      newDataValid = newDataValid.filter( e => row.sr_id !== e.sr_id)
      newRowValid['status'] = 'Approved'
      newDataValid.push(newRowValid);

      return {
        ...state,
        data: newDataValid,
      };

    case REJECTED_REQUEST:
      let newDataReject = [...state.data];
      const newRowReject = newDataReject.find( e => row.sr_id === e.sr_id) 
      newDataReject = newDataReject.filter( e => row.sr_id !== e.sr_id)
      newRowReject['status'] = 'Rejected'
      newDataReject.push(newRowReject);

      return {
        ...state,
        data: newDataReject,
      };

    case BATCH_REQUEST:
      let newDataBatch = [...state.data];

      requests.forEach(request => {
        const newRowBatch = newDataBatch.find( e => request === e.sr_id) 
        newDataBatch = newDataBatch.filter( e => request !== e.sr_id)
        newRowBatch['status'] = 'In Batch'
        newDataBatch.push(newRowBatch);
      });

      return {
        ...state,
        data: newDataBatch,
        selection: []
      };
    default:
      return state;
  }
}
