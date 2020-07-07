import React, { Component } from "react";
// time
import moment from "moment";
// react component for creating dynamic tables
import "react-table/react-table.css";
import "assets/scss/material-dashboard-pro-react/plugins/_plugin-react-table.css";
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
// core components
import GridContainer from "components/molecules/Grid/GridContainer.js";
import GridItem from "components/molecules/Grid/GridItem.js";
import Card from "components/molecules/Card/Card.js";
import CardBody from "components/molecules/Card/CardBody.js";
import CardHeader from "components/molecules/Card/CardHeader.js";
import { FormattedMessage } from 'react-intl'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// other components
import RequestBatch from "components/organisms/RequestBatch";
import StatusBadges from "components/molecules/StatusBadges/StatusBadges";
import StatusActions from "components/molecules/StatusActions/StatusActions";
import Pagination from "components/molecules/Pagination/Pagination"

// import Authentication from "components/atoms/Authentication";

//HOC for checkboxes
const CheckboxTable = checkboxHOC(ReactTable);

export default class RequestTable extends Component {
    constructor(props) {
        super(props)
        this.state = { data_l: [], columns_l : [] };
        this.checkboxTable = React.createRef()
    }

    componentDidMount() {
        const { getRequest, getUser } = this.props;
        getUser();
        getRequest();
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
        if (this.props.data !== nextProps.data) {
            const dataActions = this.getDataActions(nextProps.data)
            this.setState({
                data_l: dataActions, 
                columns_l: this.getColumns(dataActions[0])
            });
        }
    }

    toggleSelection = (key, shift, row) => {
        /*
        Implementation of how to manage the selection state is up to the developer.
        This implementation uses an array stored in the component state.
        Other implementations could use object keys, a Javascript Set, or Redux... etc.
        */

        // start off with the existing state
        let selection = [...this.props.selection];
        const keyIndex = selection.indexOf(row.sr_id);
        // check to see if the key exists
        if (keyIndex >= 0) {
            // it does exist so we will remove it using destructing
            selection = [
                ...selection.slice(0, keyIndex),
                ...selection.slice(keyIndex + 1)
            ];
        } else {
            // it does not exist so add it
            selection.push(row.sr_id);
        }
        // bussines rules
        if (row.status === 'Approved' && selection.length <= 1)
            this.props.addSelection(selection);
    };

    toggleAll = () => {
        /*
        'toggleAll' is a tricky concept with any filterable table
        do you just select ALL the records that are in your data?
        OR
        do you only select ALL the records that are in the current filtered data?
        
        The latter makes more sense because 'selection' is a visual thing for the user.
        This is especially true if you are going to implement a set of external functions
        that act on the selected information (you would not want to DELETE the wrong thing!).
        
        So, to that end, access to the internals of ReactTable are required to get what is
        currently visible in the table (either on the current page or any other page).
        
        The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
        ReactTable and then get the internal state and the 'sortedData'. 
        That can then be iterrated to get all the currently visible records and set
        the selection state.
        */

        const selectAll = this.props.selectAll ? false : true;
        const selection = [];
        if (selectAll) {
            // we need to get at the internals of ReactTable
            const wrappedInstance = this.checkboxTable.getWrappedInstance();
            // the 'sortedData' property contains the currently accessible records based on the filter and sort
            const currentRecords = wrappedInstance.getResolvedState().sortedData;
            // we just push all the IDs onto the selection array
            currentRecords.forEach(item => {
                if (item._original.status === 'Approved')
                    selection.push(item._original.sr_id);
            });
        }

        this.props.addSelectionAll(selectAll, selection);
    };

    toggleColumnChooser = (value) => {
        let index = value -1;
        
        this.setState(
            prevState => {
                const columns1 = [];
                columns1.push(...this.state.columns_l);
                console.log(columns1);
                columns1[index].show = !columns1[index].show;
                if (columns1[index].columns) {
                columns1[index].columns.forEach(item => {
                    item.show = !item.show
                })
                }

                return {
                    columns: columns1,
                };
            }, () => {
            console.log(this.state.columns_l)
            }
        );
    };

    isSelected = (key) => {
        /*
        Instead of passing our external selection state we provide an 'isSelected'
        callback and detect the selection state ourselves. This allows any implementation
        for selection (either an array, object keys, or even a Javascript Set object).
        */

        return this.props.selection.includes(key);
    };

    logSelection = () => {
        console.log("selection:", this.props.selection);
    }

    /*
       Define rules apply for each row per column
       We have row actions null but here we put what actions must be there
    */
    getColumns = (sample) => {
        // const ignoreColumns = ['phone1','phone2','web','email','_id'];
        const columns = [];
        Object.keys(sample).forEach(key => {
            // if (ignoreColumns.includes(key)) continue;
            let confColumns = {}
            if (key !== "_id") {
                if (key === "sr_id" || key === "sr_type" || key === "crop" || key === "quantity" || key === "entities") {
                    confColumns = {
                        minWidth: 60,
                        width: 80,
                        maxWidth: 100,
                        style: {
                            textAlign: "center",
                        }
                    }
                }
                if (key === "service_provider" || key === "requester") {
                    confColumns = {
                        minWidth: 80,
                        width: 100,
                        maxWidth: 120,
                    }
                }
                /*Important: We fill here actions row with this values*/
                if (key === "actions") {
                    confColumns = {
                        sortable: false,
                        filterable: false,

                        Cell: row => <StatusActions
                            row={row}
                            valid={this.props.validateRequest}
                            info={this.props.informateRequest}
                            reject={this.props.rejectedRequest}
                        />,
                        minWidth: 120,
                        width: 150,
                        maxWidth: 160,
                    }
                }
                if (key === "service") {
                    confColumns = {
                        minWidth: 80,
                        width: 120,
                        maxWidth: 160,
                    }
                }
                if (key === "status") {
                    confColumns = {
                        Cell: ({ value }) => <StatusBadges value={value} />,
                        minWidth: 100,
                        width: 120,
                    }
                }

                if (key === "date_submitted") {
                    // necessary to sort by date
                    confColumns = {
                        id: key,
                        accessor: ({ date_submitted }) => moment(date_submitted, "YYYY-MM-DD"),
                        Cell: ({ value }) => <span>{moment(value, "DD-MM-YYYY").format("DD-MM-YYYY")}</span>,
                        minWidth: 90,
                        width: 110,
                    }
                }

                if (key === "complete_by") {
                    // necessary to sort by date
                    confColumns = {
                        id: key,
                        accessor: ({ complete_by }) => moment(complete_by, "YYYY-MM-DD"),
                        Cell: ({ value }) => <span>{moment(value, "DD-MM-YYYY").format("DD-MM-YYYY")}</span>,
                        minWidth: 90,
                        width: 110,
                    }
                }

                if (key === "status") {
                    confColumns = {
                        ...confColumns,
                        id: "status",
                        filterMethod: (filter, row) => {

                            if (filter.value === "all") {
                                return true;
                            }
                            if (filter.value === "New") {
                                return row[filter.id] === "New";
                            }
                            if (filter.value === "Approved") {
                                return row[filter.id] === "Approved";
                            }
                            if (filter.value === "Rejected") {
                                return row[filter.id] === "Rejected";
                            }

                            if (filter.value === "In Batch") {
                                return row[filter.id] === "In Batch";
                            }
                        },
                        Filter: ({ filter, onChange }) =>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter ? filter.value : "all"}
                                onChange={event => onChange(event.target.value)}
                            >
                                <MenuItem value="all"><FormattedMessage id={'sm.req.tbl.filter.all'} defaultMessage={"Show All"} /></MenuItem>
                                <MenuItem value="New"><FormattedMessage id={'sm.req.tbl.filter.new'} defaultMessage={"New"} /></MenuItem>
                                <MenuItem value="Approved"><FormattedMessage id={'sm.req.tbl.filter.approved'} defaultMessage={"Approved"} /></MenuItem>
                                <MenuItem value="Rejected"><FormattedMessage id={'sm.req.tbl.filter.rejected'} defaultMessage={"Rejected"} /></MenuItem>
                                <MenuItem value="In Batch"><FormattedMessage id={'sm.req.tbl.filter.batch'} defaultMessage={"In Batch"} /></MenuItem>
                            </Select>
                    }
                }

                let header = '';
                switch (key) {
                    case 'sr_id':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.srid'} defaultMessage={'SR ID'} />
                        break;
                    case 'actions':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.act'} defaultMessage={'Actions'} />
                        break;
                    case 'sr_type':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.type'} defaultMessage={'SR Type'} />
                        break;
                    case 'crop':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.crop'} defaultMessage={'Crop'} />
                        break;
                    case 'status':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.status'} defaultMessage={'Status'} />
                        break;
                    case 'quantity':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.quantity'} defaultMessage={'Quantity'} />
                        break;
                    case 'service_provider':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.servprov'} defaultMessage={'Service Provider'} />
                        break;
                    case 'entities':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.entities'} defaultMessage={'Entities'} />
                        break;
                    case 'service':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.service'} defaultMessage={'Service'} />
                        break;
                    case 'requester':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.requester'} defaultMessage={'Requester'} />
                        break;
                    case 'date_submitted':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.subdate'} defaultMessage={'Submit Date'} />
                        break;
                    case 'complete_by':
                        header = <FormattedMessage id={'sm.req.tbl.hdr.completeby'} defaultMessage={'Complete By'} />
                        break;
                    default:
                        break;
                }

                columns.push({
                    accessor: key,
                    id: key,
                    Header: header || key,
                    ...confColumns,
                    show: true
                });
            }
        });

        return columns;
    }

    getDataActions = (testData) => {
        const dataActions = testData.map(item => {
            const actions = null;
            return {
                _id: item.sr_id,
                actions,
                ...item,
            };
        });

        return dataActions;
    }


    getTrProps = (state, rowInfo, column, instance) => {
        // Maybe I wasn't clear. getTrProps is used inside the code in a number of places and, in at least one of those places, rowInfo is passed as undefined. So, if you are going to use the data from rowInfo you have to check it first. If it is undefined, then just return {} otherwise you should be fine with the return statement you have - assuming your row has a status element on it (note: row is the displayed row and original is your original data - which will have everything, not just the data you are displaying).
        // So, there is nothing wrong with your concept. You just have to ensure that rowInfo is defined before trying to acecss it. e.g.
        // if(rowInfo) /* your return here */
        // else return {}
        if (rowInfo) {
            const selected = this.isSelected(rowInfo.original.sr_id);

            //     return {
            //       onMouseEnter: e =>
            //         console.log("Cell - onMouseEnter", {
            //           state,
            //           rowInfo,
            //           column,
            //           instance,
            //           event: e
            //         })
            //     }

            if (rowInfo.original.status === "Approved") {
                return {
                    style: {
                        backgroundColor: selected ? "lightgreen" : "inherit"
                    }
                }
            }
        }
        return {};
    }


    render() {
        const { toggleSelection, toggleAll, isSelected, getTrProps } = this;
        // const { user, data, isLoading, selection, selectAll } = this.props;
        const { data, isLoading, selection, selectAll } = this.props;

        // default initial state
        if(!data.length && !isLoading) return null

        const checkboxProps = {
            selectAll,
            isSelected,
            toggleSelection,
            toggleAll,
            selectType: "checkbox",
            getTrProps
        };

        return (
            <>
                {/* 
                    <Authentication
                        role={this.props.user.user.role}
                        perform="dashboard-page:visit"
                        yes={() => (
                        <div>
                            <h1>Permissions</h1>
                        </div>
                        )}
                        no={() => <h2>Denied!</h2>}
                    />  
                */}
                   
                <GridContainer>
                    <GridItem xs={12}>
                        <Card>
                            <CardHeader>
                                <RequestBatch requests={selection} />
                            </CardHeader>
                            <CardBody>
                                <CheckboxTable
                                    noDataText="Loading..."
                                    ref={r => (this.checkboxTable = r)}
                                    filterable
                                    PaginationComponent={Pagination}
                                    data={this.state.data_l}
                                    columns={this.state.columns_l}
                                    onColumnUpdate={this.toggleColumnChooser}
                                    loading={isLoading}
                                    {...checkboxProps}
                                    defaultPageSize={5}
                                    // style={{
                                    //     height: "480px" // This will force the table body to overflow and scroll, since there is not enough room
                                    // }}
                                    className="-striped -highlight"
                                    defaultSorted={[
                                        {
                                            id: "sr_id",
                                            desc: true
                                        }
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </>
        );
    }
}