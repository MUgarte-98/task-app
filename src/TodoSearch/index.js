import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    var onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder='Search'
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch };