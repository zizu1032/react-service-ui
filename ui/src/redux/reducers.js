import { combineReducers } from 'redux';

import user from './modules/UserState';
import request from './modules/Request';
import request_batch from './modules/RequestBatch'
// import batch from 'components/BatchTable/BatchState'
import catalogs from './modules/Catalogs';

export default combineReducers({ 
  user,
  catalogs,
  request,
  request_batch,
  // batch
});