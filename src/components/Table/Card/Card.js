import React, {useContext} from 'react'
import styles from './Card.module.css'
import {Context} from '../../../context/context'

export const Card = () => {
    const {card} = useContext(Context)

    const hideCard = () => {
        card.setShowCard(prev => !prev)
    }

    return (
        <>        
            {
                card.showCard ?
                <div className={styles.card_overlay}>
                <div className={styles.card}>
                    <p>Выбран пользователь: <b>{card.user.firstName} {card.user.lastName}</b></p>
                    <p>Описание:</p>
                    <textarea disabled value={card.user.description}/>
                    <p>Адрес проживания: <b>{card.user.address.streetAddress}</b></p>
                    <p>Город: <b>{card.user.address.city}</b></p>
                    <p>Провинция/штат: <b>{card.user.address.state}</b></p>
                    <p>Индекс: <b>{card.user.address.zip}</b></p>
                    <button className='button' onClick={hideCard}>Закрыть</button>
                </div>
                </div>
                : null
            }
        </>
    )
}
