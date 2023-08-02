import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { InitialInfo, TodoInfo } from "../redux/modules/todo";
function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  let todos = useSelector<InitialInfo, TodoInfo[]>((state) => state.todos);
  const foundTodo = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <DetailTodoData>
      <p style={{ fontSize: "10px" }}>id : {foundTodo?.id}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{foundTodo?.title}</p>
      <p>{foundTodo?.contents}</p>
      <Btn
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </Btn>
    </DetailTodoData>
  );
}

export default Detail;
const DetailTodoData = styled.div`
  margin: 100px auto;
  width: 900px;
  border: 3px solid rgba(160, 187, 148, 0.919);
  padding: 30px;
  position: relative;
`;

const Btn = styled.button`
  background-color: rgb(236, 236, 203);
  width: 60px;
  height: 30px;
  border: none;
  margin-left: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
