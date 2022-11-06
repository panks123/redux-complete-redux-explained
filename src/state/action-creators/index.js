// Creating action creators

// action1
export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

// action2
export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}