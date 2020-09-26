import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.style.css';

const Pagination = ({handlePageClick, movies}) => (
    <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={movies.total_pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
    />
)

export default Pagination;
