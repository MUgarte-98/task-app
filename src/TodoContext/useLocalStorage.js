import React from "react";

function useLocalStorage(itemName, initialValue) {

    var [loading, setLoading] = React.useState(true);
    var [error, setError] = React.useState(false);
    var [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                var localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    });
    var saveItem = (newTodos) => {
        try {
            var stringifiedItem = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newTodos);

        } catch (error) {
            setError(error);
        }

    };

    return {
        item, saveItem, loading, error
    };
}

export { useLocalStorage };