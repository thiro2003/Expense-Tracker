import React,{useState,useContext} from "react";
import GlobalContext from "../context/GlobalState";
export default function AddTransaction() {

  let [text,setText]=useState('')
  let [amount,setAmount]=useState('')
  const {addTransaction}=useContext(GlobalContext);
  const onSubmit=(e)=>{

    e.preventDefault()
    const newTransaction={
      id:Math.floor(Math.random()*1000000000),
      text,
      amount,
    }

    addTransaction(newTransaction)

  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." 
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} placeholder="Enter amount..." 
          onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
