import { connect } from "react-redux";

import RequestBatchView from "./RequestBatch";
import { batchRequest, updateBatchName } from "redux/modules/RequestBatch";

export default connect(
  state => ({
    batchName: state.request_batch.batchName,
  }),
  { batchRequest, updateBatchName },
)(RequestBatchView);