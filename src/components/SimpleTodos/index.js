import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    taskInput: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  saveTodo = (id, updatedTitle) => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(todo => {
      if (todo.id === id) {
        return {...todo, title: updatedTitle}
      }
      return todo
    })

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onAddTask = () => {
    const {taskInput, todosList} = this.state
    let newTaskCount = 1
    const match = taskInput.match(/(\d+)$/)
    if (match) {
      newTaskCount = parseInt(match[0], 10)
    }

    const newTasks = Array.from({length: newTaskCount}, (_, index) => ({
      id: todosList.length + index + 1,
      title: taskInput.replace(/\d+$/, '').trim(),
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTasks],
      taskInput: '',
    }))
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  render() {
    const {todosList, taskInput} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="text"
            value={taskInput}
            onChange={this.onChangeTaskInput}
            className="input"
          />
          <button type="button" onClick={this.onAddTask} className="button">
            Add
          </button>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
