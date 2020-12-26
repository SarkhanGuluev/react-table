import React from 'react'
import './Pagination.css'

export const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={'pagination'}>
            {
                pageNumbers.map(number => (  
                    <a key={number} onClick={() => paginate(number)} href="!#">
                        {number}
                    </a>                    
                ))
            }
        </div>
    )
} 