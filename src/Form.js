import React from "react"

const Form = ({addItem, inputIsEmpty, handleChange, value, noItemsFound, deleteLastItem}) => {
  
  const addItemFunc = (event) => {
   return addItem(event)
  }
  
  const handleChangeFunc = (event) => {
   return handleChange(event)
  }
  
  const noItemsFoundFunc = (event) => {
   return noItemsFound
  }
  
  const deleteLastItemFunc = (event) => {
   return deleteLastItem(event)
  }
  
  const inputIsEmptyFunc = () => {
   return inputIsEmpty
  }
  
  
  return (
    <div>
  <form onSubmit={addItemFunc}>
          <input
            type="text"
            placeholder="Enter  Item"
            value={value}
            onChange={handleChangeFunc}
          />
          <button disabled={inputIsEmptyFunc()}>Add</button>
  </form>
  <button onClick={deleteLastItemFunc} disabled={noItemsFoundFunc()}>
          Delete Last Item
        </button>
                                                 </div>
 )
}

export default Form;