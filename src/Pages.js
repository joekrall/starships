import React, { useState } from 'react';

const Pages = (props) => {

  const pages = [];

  const selectPage = (page, event) => {
    event.preventDefault();

    props.setCurrentPage(page);
  }
  // Note that our counter begins at 1,
  // and its limit is 1 + the number of products
  // divided by 10 (the max number of products displayed per page)
    for (let i = 1; i < (props.count/10) + 1; i++) {
      pages.push(<a href='#' onClick={event => selectPage(i, event)}>{i.toString()} </a>);
    }
  
    return (
      <div>
        {pages}
      </div>
    );

}

export default Pages