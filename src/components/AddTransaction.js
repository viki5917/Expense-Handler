import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);

    const {addTransactions}=useContext(GlobalContext);

    const[formErrors,setFormErrors]=useState({});

    const onsubmit=e=>{
        e.preventDefault();
      
        const newTransaction={
          id:Math.floor(Math.random()*1000000000),
          text,
          amount:+amount
        }


        if(error(newTransaction)){
          addTransactions(newTransaction)
          setText('')
          setAmount(0)
        }

        
    }
    

    const error=(values,e)=>{
      const errors={};

      //namefield validation
      if(!values.text){
          errors.name="*This field cannot be empty";
      }

      //email field validation
      if(!values.amount){
          errors.amount="*amount is required";
      }
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
  }


    

  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
          <small>{formErrors.name}</small>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
          <small>{formErrors.amount}</small>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction