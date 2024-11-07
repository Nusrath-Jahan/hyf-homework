"use client";

import { createContext, useReducer, useContext } from "react";

// 1. Create the context
const TodoContext = createContext();

// 2. Define action types
const ADD_TODO = "add_todo";
const REMOVE_TODO = "remove_todo";
const TOGGLE_TODO = "toggle_todo";

// 3. Define the reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      throw new Error("Unknown action: " + action.type);
  }
};

// 4. Create a provider component
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// 5. Custom hook for consuming the TodoContext
export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

// 6. Action creators
export const addTodo = (text) => ({ type: ADD_TODO, text });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });
