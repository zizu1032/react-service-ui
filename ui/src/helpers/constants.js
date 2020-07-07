
// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import ReplayIcon from "@material-ui/icons/Replay";
// import CardTravel from "@material-ui/icons/CardTravel";

const status = [
    {
        id : 1,
        status: "New"
    },
    {
        id : 2,
        status: "Approved"
    },
    {
        id : 3,
        status: "Rejected"
    },
    {
        id : 4,
        status: "In Batch"
    },
 ]

const statusBadges = [
    {
        badgeStatus: "New",
        badgeColor: "info",
        badgeIcon: AddIcon,
    },
    {
        badgeStatus: "Approved",
        badgeColor: "success",
        badgeIcon: DoneIcon,
    },
    {
        badgeStatus: "Rejected",
        badgeColor: "danger",
        badgeIcon: ClearIcon,
    },
    {
        badgeStatus: "In Batch",
        badgeColor: "warning",
        badgeIcon: ReplayIcon,
    },
    {
        badgeStatus: "On Hold",
        badgeColor: "primary",
        // badgeIcon: CardTravel,
    }
]

export {
    // status
    status,
    //batches status
    statusBadges
};

