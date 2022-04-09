import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {

    var [newTodoValue, setNewTodoValue] = React.useState('');

    var { addTodo, setOpenModal } = React.useContext(TodoContext)

    var onChange = (event) => {//TODO
        setNewTodoValue(event.target.value);
    };

    var onCancel = () => {
        setOpenModal(false);
    };

    var onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea placeholder="Cortar la cebolla" value={newTodoValue} onChange={onChange}></textarea>
            <div>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };