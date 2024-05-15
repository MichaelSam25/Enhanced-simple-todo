import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo} = props
  const {id, title} = todoDetails

  const [isEditOn, setIsEditOn] = useState(false) // State to track editing mode
  const [editedTitle, setEditedTitle] = useState(title) // State to store edited title

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = () => {
    setIsEditOn(true) // Enable editing mode
  }

  const onSaveClick = () => {
    saveTodo(id, editedTitle)
    setIsEditOn(false) // Disable editing mode after saving
  }

  return (
    <>
      <li className="todo-item">
        {isEditOn ? (
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
          />
        ) : (
          <p className="title">{title}</p>
        )}
        <div>
          <button type="button" className="delete-btn" onClick={onDeleteTodo}>
            Delete
          </button>
          {isEditOn ? (
            <>
              <button
                type="button"
                className="delete-btn"
                onClick={onSaveClick}
              >
                Save
              </button>
            </>
          ) : (
            <button type="button" className="delete-btn" onClick={onEditTodo}>
              Edit
            </button>
          )}
        </div>
      </li>
    </>
  )
}

export default TodoItem
