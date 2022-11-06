// Here we are creating our reducer which is a function taking two arguments initial state (i.e. state here) and action
// based on the action.type it will change the state
const amountReducer = (state = 0, action)=>{
    if(action.type === 'deposit')
    {
        return state + action.payload
    }
    else if(action.type === 'withdraw')
    {
        return state - action.payload
    }
    else{
        return state;
    }
} 

export default amountReducer