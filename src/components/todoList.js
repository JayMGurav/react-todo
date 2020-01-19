import React from 'react'

function TodoList({ list,toggleDoneState }) {
    return (
        <div className="container-fluid ">
            <table className="table table-hover p-4">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Item</th>
                    <th scope="col">done</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,index) => (
                        <tr key={index} onClick={(e)=>toggleDoneState(item.action)}  >
                            <th scope="row">{index+1}</th>
                            <td style={{
                                textDecoration: item.done ? "line-through" : "none" 
                            }}>{item.action}</td>
                            <td><input type="checkbox" checked={item.done}/><span> &nbsp;{item.done ? "Done" : "todo"}</span></td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    )
}

export default TodoList;