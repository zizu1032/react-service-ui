import React from "react";
import { statusBadges } from "helpers/constants";
import { Badge } from "./Badge";

export default function StatusBadges(props) {
  const {value} = props;
  const register = statusBadges.find( val => String(val.badgeStatus) === String(value))

  if(register) {

    const {badgeStatus, badgeColor, badgeIcon} = register;

    return (
        <table>
          <tbody>
            <tr>
              <td>
                <Badge status={badgeStatus} color={badgeColor} icon={badgeIcon} /> 
              </td>
              <td>
                {badgeStatus}
              </td>
            </tr>
          </tbody>
        </table>
    );
  } else {
    return <div>{"Add in constants file"}</div>
  }
}

