import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav>
            <ul className="pagination">
                <h1>Pages: </h1>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a className="page-link" href="#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination