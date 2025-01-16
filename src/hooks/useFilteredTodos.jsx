import { useEffect, useState } from "react"

const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = todos.filter(todo => 
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTodos(filtered);
        }else {
            setFilteredTodos(todos);
        }
    }, [todos, searchTerm]);
    return filteredTodos;
};

export default useFilteredTodos