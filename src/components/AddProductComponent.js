

import React, { useState } from 'react'
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
function AddProduct(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const [error, setError] = useState("");
    const onHandleTitleChange = e => {
        setTitle(e.target.value)
    }
    const onHandlePriceChange = e => {
        setPrice(e.target.value)
    }

    const addProduct = e => {
        e.preventDefault()
        if (title.length > 3 && price > 0) {
            setError("")
            props.addProduct(title, price, today)
            setTitle("")
            setPrice("")

        } else {
            setError("Invalid!!")
        }

    }
    const cancelProduct = e => {
        setTitle("")
        setPrice("")

    }

    return (
        <div>
            <form className="form-container" >
                <input type='text' placeholder='Enter Name ...' className='input-text' value={title} onChange={onHandleTitleChange} />
                <input type='text' placeholder='Enter Price ...' className='input-text' value={price} onChange={onHandlePriceChange} />


            </form>
            <div className='row'>

                <button onClick={cancelProduct} value="Cancel" className="input-submit" >Cancel</button>
                <button type="submit" onClick={addProduct} value="Submit" className="input-submit">Submit</button>
            </div>

            <p className='errorstyle'>{error}</p>
        </div>
    );

}

export default AddProduct;