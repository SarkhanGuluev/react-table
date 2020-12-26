import React, {useState, useContext} from 'react'
import styles from './AddUserForm.module.css'
import {Context} from '../../context/context'

export const AddUserForm = () => {    
    const {dispatch, addUser} = useContext(Context)
    
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const addNewUser = () => {
        dispatch({
            type: 'add',
            payload: {
                id,
                firstName,
                lastName,
                email,
                phone
            }
        })
        setId('')
        setLastName('')
        setFirstName('')
        setPhone('')
        setEmail('')
        addUser.setShowForm(prev => !prev)
    }

    const hideForm = () => {
        addUser.setShowForm(prev => !prev)
    }
    
    return (
        <>
            {
                addUser.showForm ?
                <div className={styles.add_form_overlay}>
                    <div className={styles.add_form}>
                        <h3>Введите данные</h3>
                        <div>
                            <label>ID:</label>
                            <input  type="text" value={id} placeholder="ID" onChange={(e) => setId(e.target.value)}/>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input  type="text" value={firstName} placeholder="name" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input  type="text" value={lastName} placeholder="last name" onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input  type="text" value={email} placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input  type="text" value={phone} placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div>
                            <button className={styles.add_form_button} onClick={addNewUser}>Добавить</button>
                            <button className={styles.add_form_button} onClick={hideForm}>Закрыть</button>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}
