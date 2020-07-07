import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table"

// core components
import Pagination from "components/molecules/Pagination/Pagination"

// import catalogs

export default function EntitiesTable(props) {
  const {list} = props;

  const getColumnsName = (sample)  => {
    const columns = [];

    Object.keys(sample).forEach(key => {
      let header = '';

      if (key !== "_id") {
        switch (key) {
          case 'seed_lot':
              header = 'Seed Lot'
              break;
          case 'unit':
              header = 'Unit'
              break;
          case 'designation':
              header = 'Designation'
              break;
          case 'parentage':
              header = 'Parentage'
              break;
          case 'quantity':
              header = 'Quantity'
              break;
          case 'origin':
              header = 'Origin'
              break;
          case 'previous_samples':
              header = 'Previus Samples'
              break;
          default:
              break;
          }
      }

      // if have some header content previous show it
      if(header){
        columns.push({
          accessor: key,
          id: key,
          Header: header || key,
        })
      }

    })

    return columns;
  } 

 const columns = getColumnsName(list.data[0]);

 return (
          <ReactTable
              noDataText="text"
              //ref={r => (this.checkboxTable = r)}
              //filterable
              data={list.data}
              columns={columns}
              //loading={loading}
              PaginationComponent={Pagination}
              defaultPageSize={5}
              className="-striped -highlight"
              // defaultSorted={[
              // {
              //     id: "date_submitted",
              //     desc: false
              // }
              // ]}
          />
  );
}