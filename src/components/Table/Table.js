import React, {useState, useContext, useReducer} from 'react'
import { Datatables } from './Datatables'
import {Pagination} from '../Pagination/Pagination';
import {Context} from '../../context/context'
import './Table.css'


export const Table = () => {

    const {state, dispatch} = useContext(Context)

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, ] = useState(50)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = state.data.slice(indexOfFirstItem, indexOfLastItem)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Search
    const [searchInputValue, setSearchInputValue] = useState('')
    const search = (data) => {
        const keys = data[0] && Object.keys(state.data[0])
        return data.filter(item => {
            return keys.some(key => item[key].toString().toLowerCase().indexOf(searchInputValue.toString().toLowerCase()) > -1)
        })
    }
    
    return (
        <div className='table-container'>
            <input className='input'
                type='text'
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder='Поиск...'
            />
            <button className='button' onClick={() => setSearchInputValue('')}>Сброс</button>
            <Datatables data={search(currentItems)} />
            <Pagination paginate={paginate} itemsPerPage={itemsPerPage} totalItems={state.data.length}/>
        </div>
)
}