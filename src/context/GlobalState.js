import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//initial state

const initialstate={
    transactions:[]
}

//create context

export const GlobalContext=createContext(initialstate);

//provider components

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialstate);

    //Actions
    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransactions(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransactions,addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}