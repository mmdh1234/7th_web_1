// custom-button.jsx
import styled from "styled-components";

const CustomButton = () => {
    return (
        <>
        
            <FirstStyledSweetPotato color = {'purple'}>
            고구마
            </FirstStyledSweetPotato>
            {/* 색상을 주지 않으면 오류가 나기 때문에 밑에 background-color에서
            예외처리 || purple을 해준다 */}
            <FirstStyledSweetPotato>
                    고구마
            </FirstStyledSweetPotato>
        </>
    );
};

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
    background-color: ${props => props.color  || 'purple'};
    border: none;
    border-radius : 10px;
    padding: 20px;
    cursor: pointer;
    color: white;
    
`
const StyledHoverButton = styled.button`
	&:hover {
		// 밑줄을 부여한다.
		text-decoration: underline;
	}
`