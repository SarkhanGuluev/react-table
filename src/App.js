import React, {useEffect, useState, useReducer} from 'react'
import './App.css'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import {Table} from './components/Table/Table'
import {Context} from './context/context'
import reducer from './context/reducer'
import { Card } from './components/Table/Card/Card'
import { AddUserForm } from './components/AddUserForm/AddUserForm'


const smallDataUrl = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
const largeDataUrl = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

function App() {
  const [state, dispatch] = useReducer(reducer, {data: [], sort: '', url: smallDataUrl, card: false})
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    (async () => {
      setLoading(true)
      const res  = await axios(state.url)
      dispatch({
        type: 'new_data',
        payload: res.data
      })
      setLoading(false)
    })()
  }, [state.url])

  //Card
  const [user, setUser] = useState({})
  const [showCard, setShowCard] = useState(false)

  const openCard = (el) => {
    setShowForm(false)
    setUser(el)
    setShowCard(prev => !prev)
}

useEffect(() => {
  if(loading){
    setShowCard(false)
    setShowForm(false)
  }
}, [loading])



  //Add User
  const [showForm, setShowForm] = useState(false)

  const openModal = () => {
    setShowCard(false)
    setShowForm(prev => !prev)
  }


console.log(state)
  return (
    <Context.Provider value={{state, dispatch,
      card: {setUser, showCard, setShowCard, openCard, user},
      addUser: {showForm, setShowForm}}} >
      <div  className='App'>
      <Card />
      <AddUserForm />
        <div>
          <div className='button-container'>
            <div>
              <button
                className='button'
                onClick={() => dispatch({
                  type: 'url',
                  payload: smallDataUrl
                })}>Small</button>
              <button
                  className='button'
                  onClick={() => dispatch({
                    type: 'url',
                    payload: largeDataUrl
                  })}>Large</button>
            </div>
            <button onClick={openModal} className='button'>Добавить</button>
          </div>
          { loading ?
            <div style={{display: 'flex', justifyContent: 'center', margin: '150px',}}>
            <Loader type="Oval" color="#00BFFF" height={80} width={80}/>
            </div> :
            <Table/>
          }
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
