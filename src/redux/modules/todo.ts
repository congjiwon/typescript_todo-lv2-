import uuid from "react-uuid";
const SET_TODO = "SET_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

export interface Action {
  type: "SET_TODO" | "DELETE_TODO" | "CHANGE_TODO";
  payload: TodoInfo | string;
}

export const setTodo = (payload: TodoInfo) => {
  return {
    type: SET_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload: TodoInfo["id"]) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const changeTodo = (payload: TodoInfo["id"]) => {
  return {
    type: CHANGE_TODO,
    payload: payload,
  };
};

export interface InitialInfo {
  todos: TodoInfo[];
}

export interface TodoInfo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const initialState: TodoInfo[] = [
  {
    id: uuid(),
    title: "1",
    contents: "11",
    isDone: false,
  },

  {
    id: uuid(),
    title: "2",
    contents: "22",
    isDone: true,
  },
];

const todos = (state = initialState, action: Action): TodoInfo[] => {
  switch (action.type) {
    case SET_TODO: {
      if (typeof action.payload === "string") return state;
      return [...state, action.payload];
    }

    case DELETE_TODO: {
      const newTodo = state.filter((filteredItem) => {
        return filteredItem.id !== action.payload;
      });
      return newTodo;
    }

    case CHANGE_TODO: {
      const newTodo = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return newTodo;
    }

    default:
      return state;
  }
};

export default todos;
