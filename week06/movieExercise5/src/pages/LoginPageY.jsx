import styled from "styled-components";
import { validateLogin } from "../utils/validate.js";
import  useForm  from "../hooks/use-form.js"

const LoginPageY = () => {
    const login = useForm({
    initialValue: {
        email: '',
        password: '',
    },
    validate: validateLogin
    });

    console.log(login.touched);

    const handlePressLogin = () =>{
        console.log(login.values.email, login.values.password)
    }
    return (
    <Container>
        <Input 
            error = {login.touched.email && login.errors.email}
            type={"email"} 
            placeholder={"이메일을 입력해주세요"} 
            {...login.getTextInputProps('email')} 
        />
        {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
        <Input
            error = {login.touched.password && login.errors.password}
            type={"password"} 
            placeholder={"비밀번호를 입력해주세요"} 
            {...login.getTextInputProps('password')} 
        />
        {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}
    
        <button onClick = {handlePressLogin}>로그인</button>
    </Container>
    );
};


export default LoginPageY;

// Container 스타일 컴포넌트
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    margin: 1opx 0;
    padding: 8px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    
    border: ${props => props.error ? '4px solid red' : '1px solid #ccc'};

    &:focus {
        
        border-color: #007bff;
        
    }
`;

const ErrorText = styled.h1`
    color: red;
    font-size: 12px;
`