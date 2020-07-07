import React from "react";

import ValidateRequest from "components/molecules/Validate/ValidateRequest";
import RejectRequest from "components/molecules/Reject/RejectRequest";
import InfoRequest from "components/molecules/Information/InfoRequest";

export default function StatusAcions({row, valid, reject, info}) {

  if(row.original) {
    return (
        <table align={'center'} className='test-table'>
            <tbody>
                <tr>
                <td>
                    {/* its a alert to notify validation */}
                    { row.original.status === 'New'? <ValidateRequest data-test='test-validate1' row={row} validation={valid} /> : null }
                    { row.original.status === 'Rejected'? <ValidateRequest data-test='test-validate2' row={row} validation={valid} /> : null 
                    }
                    { row.original.status === 'On Hold'? <ValidateRequest data-test='test-validate3' row={row} validation={valid} /> : null }
                </td>
                <td>
                    {/* its a alert to notify rejection */}
                    { row.original.status === 'New'? <RejectRequest data-test='test-validate4' row={row} rejected={reject} /> : null }
                </td>
                <td>
                    {/* its a alert to show information */}
                    { row.original.status === 'New'? <InfoRequest data-test='test-validate5' row={row} information={info}/> : null }
                    { row.original.status === 'Rejected'? <InfoRequest data-test='test-validate6' row={row} /> : null }
                    { row.original.status === 'Approved'? <InfoRequest data-test='test-validate7' row={row} /> : null }
                    { row.original.status === 'In Batch'? <InfoRequest data-test='test-validate8' row={row} /> : null }
                    { row.original.status === 'On Hold'? <InfoRequest data-test='test-validate9' row={row} /> : null }
                </td>
                </tr>
            </tbody>
        </table>
    );
  } else {
    return <div>{"Add in constants file"}</div>
  }
}
