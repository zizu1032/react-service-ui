import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {withStyles} from '@material-ui/core';
import styles from 'assets/jss/material-dashboard-pro-react/components/paginationStyle.js';

// core components
import Button from '@material-ui/core/Button';
import GridContainer from 'components/molecules/Grid/GridContainer.js';
import GridItem from 'components/molecules/Grid/GridItem.js';

// other components
import ColumnChooser from './ColumnChooser';

const defaultButton = (props) => <Button {...props}> {props.children} </Button>;

class Pagination extends Component {
  constructor(props) {
    super();

    this.changePage = this.changePage.bind(this);

    this.state = {
      visiblePages: this.getVisiblePages(null, props.pages),
    };
  }

  static propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    PageButtonComponent: PropTypes.any,
    onPageChange: PropTypes.func,
    previousText: PropTypes.string,
    nextText: PropTypes.string,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(null, nextProps.pages),
      });
    }

    this.changePage(nextProps.page + 1);
  }

  filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter((page) => page <= totalPages);
  };

  getVisiblePages = (page, total) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  changePage(page) {
    const activePage = this.props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });

    this.props.onPageChange(page - 1);
  }

  render() {
    const {PageButtonComponent = defaultButton, classes} = this.props;
    const {visiblePages} = this.state;
    const activePage = this.props.page + 1;

    const paginationLinkDisabled = classes.paginationLink;

    const paginationLinkStyleActive = cx({
      [classes.paginationLink]: true,
      [classes.success]: true,
    });

    return (
      <GridContainer>
        <GridItem xs={6} style={{textAlign: 'left'}}>
          <ul className={classes.pagination}>
            <li className={classes.paginationItem}>
              <ColumnChooser
                columns={this.props.columns}
                onColumnUpdate={this.props.onColumnUpdate}
              />
            </li>
          </ul>
        </GridItem>
        <GridItem xs={6} style={{textAlign: 'right'}}>
          <ul className={classes.pagination}>
            <li className={classes.paginationItem}>
              <PageButtonComponent
                className={paginationLinkDisabled}
                onClick={() => {
                  if (activePage === 1) return;
                  this.changePage(activePage - 1);
                }}
                disabled={activePage === 1}
              >
                {this.props.previousText}
              </PageButtonComponent>
            </li>
            <li className={classes.paginationItem}>
              {visiblePages.map((page, index, array) => {
                return (
                  <PageButtonComponent
                    key={page}
                    className={
                      activePage === page
                        ? paginationLinkStyleActive
                        : paginationLinkDisabled
                    }
                    onClick={this.changePage.bind(null, page)}
                  >
                    {array[index - 1] + 2 < page ? `...${page}` : page}
                  </PageButtonComponent>
                );
              })}
            </li>
            <li className={classes.paginationItem}>
              <PageButtonComponent
                className={paginationLinkDisabled}
                onClick={() => {
                  if (activePage === this.props.pages) return;
                  this.changePage(activePage + 1);
                }}
                disabled={activePage === this.props.pages}
              >
                {this.props.nextText}
              </PageButtonComponent>
            </li>
          </ul>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(Pagination);
