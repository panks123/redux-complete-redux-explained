import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { depositMoney, withdrawMoney } from '../state/action-creators'

// Here we'll be dispatching the actions to change the state using the reducers

const Shop = () => {
    const dispatch = useDispatch()
    const actions = bindActionCreators({depositMoney, withdrawMoney}, dispatch)

    // Wherever we want to use the state from the redux store we have to use it using tyhe useSelector hook
    const balance = useSelector(state => state.amount)
  return (
    <div>
      <h3>Current balance: {balance}</h3>
      <h4>Withdraw/Deposit</h4>
      {/* <button className='btn btn-primary mx-2' onClick={()=>{ dispatch(withdrawMoney(100)) }}>-</button> */}
      {/* Using the bindActionCreators we can reduce it as below */}
      <button className='btn btn-primary mx-2' onClick={()=>{ actions.withdrawMoney(100) }}>-</button>
      Update balance
      <button className='btn btn-primary mx-2' onClick={()=>{ dispatch(depositMoney(100)) }}>+</button>
    </div>
  )
}

export default Shop
