import React from 'react';
import styled from 'styled-components';

const Input = ({ type, placeholder, register, errorMessage }) => {
    return (
        <div>
            <StyledInput type={type} placeholder={placeholder} {...register} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};

export default Input;

const StyledInput = styled.input`
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