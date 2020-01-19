import React from 'react'

function TodoForm({newItem,updateNewItem,createNewTodo}) {
    return (
        <div className="container-fluid mt-4 mb-4">
                    <form>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Add Item"
                                    value={newItem}
                                    name="newItem"
                                    onChange={updateNewItem}/>
                            </div>
                        </div>
                         <button type="submit" className="btn btn-primary mt-1"  onClick={(e)=>createNewTodo(e)}>Add New Item</button>
                    </form>
                </div>
    )
}

export default TodoForm;