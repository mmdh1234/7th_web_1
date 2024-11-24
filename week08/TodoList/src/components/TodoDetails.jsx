import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById } from "../api";
import styled from "styled-components";
import Loading from "../components/Loading";
import Error from "../components/Error";

function TodoDetails() {
  const { id } = useParams(); // URL에서 아이템 ID 가져오기
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodoById(id);
        setTodo(data);
      } catch (err) {
        console.error("상세 데이터 가져오기 실패:", err);
        setError("할 일을 불러오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <DetailsContainer>
      <Title>{todo.title}</Title>
      <IdInfo>아이디: {todo.id}</IdInfo>
      <Content>{todo.content}</Content>
      <Status checked={todo.checked}>
        {todo.checked ? "완료된 할 일" : "미완료된 할 일"}
      </Status>
      <BackButton onClick={() => navigate("/")}>목록으로 돌아가기</BackButton>
    </DetailsContainer>
  );
}

export default TodoDetails;

const DetailsContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #212529;
  margin-bottom: 20px;
  text-align: center;
  word-break: break-word;
`;

const Content = styled.p`
  font-size: 16px;
  color: #495057;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  text-align: justify;
  word-break: break-word;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const IdInfo = styled.div`
  font-size: 14px;
  color: #868e96;
  margin-bottom: 10px;
`;

const Status = styled.div`
  font-size: 14px;
  color: ${(props) => (props.checked ? "#51cf66" : "#fa5252")};
  font-weight: bold;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: #51cf66;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #40c057;
  }
`;
