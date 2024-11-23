import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    padding: 0.6rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
    font-size: 1rem;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 5, 88);
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.75rem;
    margin: -0.8rem 0 0.8rem;
    text-align: left; 
    width: 105%; 
`;

const SubmitButton = styled.button`
    padding: 0.8rem;
    background-color: ${props => (props.disabled ? '#ddd' : '#ff0558')};
    color: ${props => (props.disabled ? '#000' : '#fff')};;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    width: 100%;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => (props.disabled ? '#ddd' : '#e0044e')};
    }
`;
const LoginPage = () => {
    const schema = yup.object().shape({
        email: yup.string()
        .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요')
        .required('이메일을 반드시 입력해주세요!'),
        password: yup
            .string()
            .min(8, '비밀번호는 8~16자 사이로 입력해주세요!')
            .max(16, '비밀번호는 8~16자 사이로 입력해주세요!')
            .required('비밀번호는 8~16자 사이로 입력해주세요!'),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange" // 입력이 변경될 때마다 유효성 검사
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>로그인</Title>
            <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <SubmitButton type="submit" disabled={!isValid}>로그인</SubmitButton>
        </Form>
    );
};

export default LoginPage;
