import axios from 'utils/axios';
import { batchToRequest } from './Request'

export const initialState = {
  batchName: '',
};

export const BATCH_NAME = "Request/BATCH_NAME";

export const setBatchName = (batchName) => ({
  type: BATCH_NAME,
  batchName
});

export const updateBatchName = (name) => dispatch => {
    dispatch(setBatchName(name));
};

export const batchRequest = (requests, description) => async dispatch => {
    //TODO: This is preparate to many requests
    await axios.post('/sample-batch', { 
      post_sample_batch: {
          description,
          requests: [
            { id: requests[0] } 
          ]
      }
    }).then(response => {
      const res = response.data.post_sample_batch.data[0];
      dispatch(updateBatchName(res.code));
      dispatch(batchToRequest(requests));
    })
};

export default function RequestReducer(state = initialState, { type, batchName }) {
  switch (type) {

    case BATCH_NAME:
      return {
        ...state,
        batchName
      };

    default:
      return state;
  }
}