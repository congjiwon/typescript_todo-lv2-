import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, changeTodo, TodoInfo } from "../redux/modules/todo";
import { styled } from "styled-components";

interface Props {
  todo: TodoInfo;
}

function Todo(props: Props) {
  const dispatch = useDispatch();
  const { todo } = props;
  const navigate = useNavigate();

  return (
    <TodoItem key={todo.id}>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{todo.title}</p>
      <p>{todo.contents}</p>
      <Btn
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        삭제
      </Btn>
      <Btn
        style={{
          position: "absolute",
          left: "60px",
          bottom: "20px",
        }}
        onClick={() => {
          dispatch(changeTodo(todo.id));
        }}
      >
        {todo.isDone ? "취소" : "완료"}
      </Btn>
      <DetailBtn
        onClick={() => {
          navigate(`/detail/${todo.id}`);
        }}
      >
        상세보기
      </DetailBtn>
    </TodoItem>
  );
}

export default Todo;

const TodoItem = styled.div`
  border: 1px solid rgba(160, 187, 148, 0.919);
  border-radius: 10px;
  width: 200px;
  height: 200px;
  padding: 10px;
  position: relative;
`;

const Btn = styled.button`
  background-color: rgb(236, 236, 203);
  width: 40px;
  height: 30px;
  border: none;
  margin-left: 10px;
  position: absolute;
  bottom: 20px;
`;

const DetailBtn = styled.button`
  background-color: rgb(236, 236, 203);
  width: 70px;
  height: 30px;
  border: none;
  margin-left: 10px;
  position: absolute;
  bottom: 20px;
  left: 110px;
`;
