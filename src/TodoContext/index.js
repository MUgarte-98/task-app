import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {

    var [openModal, setOpenModal] = React.useState(false);
    var { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V2', []);

    var [searchValue, setSearchValue] = React.useState('');

    var completedTodos = todos.filter(todo => !!todo.completed).length;
    var totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            var todoText = todo.text.toLowerCase();
            var searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })

    }

    var completeTodo = (text) => {
        var todoIndex = todos.findIndex(todo => todo.text === text);
        var newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    var deleteTodo = (text) => {
        var todoIndex = todos.findIndex(todo => todo.text === text);
        var newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    var addTodo = (text) => {
        var newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };