import React, {useContext, useState} from 'react'
import { Card } from './Card/Card'
import {Context} from '../../context/context'

export const Datatables = ({data}) => {

    const {dispatch, card} = useContext(Context)

    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => dispatch({
                        type: 'sort',
                        payload: 'id'
                    })}>ID </th>
                    <th onClick={() => dispatch({
                        type: 'sort',
                        payload: 'firstName'
                    })}>First Name</th>
                    <th onClick={() => dispatch({
                        type: 'sort',
                        payload: 'lastName'
                    })}>Last Name</th>
                    <th onClick={() => dispatch({
                        type: 'sort',
                        payload: 'email'
                    })}>E-mail</th>
                    <th onClick={() => dispatch({
                        type: 'sort',
                        payload: 'phone'
                    })}>Phone</th>
                </tr>
            </thead>
            <tbody>
                { data.map((el, i) =>{
                    let key = Math.floor(Math.random() * 100)
                    return (
                        <tr key={i} onClick={() => card.openCard(el)} style={{cursor: 'pointer',}}>
                            <td>{el.id}</td>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.email}</td>
                            <td>{el.phone}</td>
                        </tr>
                )})}
            </tbody>
        </table>
        </>
    )
}
