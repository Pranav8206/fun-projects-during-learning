import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo mess",
            completed: false 
        }
    ],
    addTodo: (todo)=> {},
    updatedTodo: (todo, id) => {},
    toggleTodo: (id)=> {},
    deleteTodo: (id)=> {}
})

export const useTodo =  () => {
      return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
