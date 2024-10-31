import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #555;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #777;
    }
`;

const LoginPage = () => {
    

    return (
        <h1>로그인 페이지</h1>
    );
};

export default LoginPage;
