import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('')

    const {addTransaction} = useContext(GlobalContext);

    const onSubmitFunction = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount,
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitFunction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => {setText(e.target.value)}} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /><span>(negative - expense, positive - income)</span></label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
