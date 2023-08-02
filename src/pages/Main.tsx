import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { InitialInfo, TodoInfo, setTodo } from "../redux/modules/todo";
import Todo from "../components/Todo";
import { styled } from "styled-components";

function Main() {
  let todos = useSelector<InitialInfo, TodoInfo[]>((state) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

  //TODO추가
  const addTodoHandler = () => {
    setTitle("");
    setContents("");
    dispatch(
      setTodo({
        id: uuid(),
        title: title,
        contents: contents,
        isDone: false,
      })
    );
  };
  console.log(todos);
  return (
    <ContainerBox>
      <header>
        <p>My Todo List</p>
      </header>

      <FormBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        제목
        <InputBox
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></InputBox>
        내용
        <InputBox
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        ></InputBox>
        <InputBtn onClick={addTodoHandler}>등록</InputBtn>
      </FormBox>
      <main>
        <h1> 📝 In progress</h1>
        <TodoListBox>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((item) => {
              return <Todo todo={item} key={item.id} />;
            })}
        </TodoListBox>

        <h1> 💯 Done</h1>
        <TodoListBox>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((item) => {
              return <Todo todo={item} key={item.id} />;
            })}
        </TodoListBox>
      </main>
    </ContainerBox>
  );
}

export default Main;

const ContainerBox = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  border: 3px solid rgba(160, 187, 148, 0.919);
  padding: 30px;
`;

const FormBox = styled.form`
  background-color: rgba(160, 187, 148, 0.919);
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  margin-right: 20px;
`;

const InputBtn = styled.button`
  width: 60px;
  height: 40px;
  background-color: rgb(235, 224, 203);
  border-radius: 10px;
  border: none;
  font-size: 17px;
`;

const TodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;
