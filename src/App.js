import React from 'react';
import './App.css';
import TodoForm from './components/todoForm.js'
import TodoList from './components/todoList.js'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "Jay",
            todoItems: [
                { action: "Bring Milk", done: false },
                { action: "meditate", done: true },
                {action:"play",done: true},
            ],
            newItem: "",
            errMessage : ""
        }
    }

    toggleDoneState = (actionName) => {
        this.setState({
            todoItems: this.state.todoItems.map(item => item.action === actionName ?
                {...item,done:!item.done} : item)
        })
    }

    updateNewItem = (event) => {
        this.setState({newItem: event.target.value})
    }

    createNewTodo = (e) => {
        e.preventDefault()
        if (!this.state.todoItems.find(item => item.action === this.state.newItem)) {
            this.setState({
                todoItems:[...this.state.todoItems,{action: this.state.newItem,done: false}],
                newItem: ""
            })
        }
        else {
            this.setState({errMessage: "There is already an item with same action in the list"})
        }
    }

    render() {
        return (
            <>
            <h4 className="bg-primary text-white text-center p-2">{this.state.username}'s Todo List</h4>
                <TodoForm
                    newItem={this.state.newItem}
                    updateNewItem={this.updateNewItem}
                    createNewTodo={this.createNewTodo} 
                    
                />
                <TodoList list={this.state.todoItems} toggleDoneState={this.toggleDoneState}/>
            </>
            
        )
        
    }
}

export default App;
