import { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchMovieList from '../components/Movie/search-movie-list';



const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const onChangeSearchValue = () =>{
        setSearchValue(event.target.value)
    };

    const[searchParams,setSearchParams] = useSearchParams({
        mq: ''
    });
    const mq = searchParams.get('mq');


    const hadleSearchMovie = () => {
        // 똑같은 검색값은 한번만 검색되게 하는 로직
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`)
    };

    // 엔터를 치면 검색될 수 있도록 하는 로직
    const handleSearchMovieWithKeyboard = (e) => {
        if(e.key === 'Enter'){
            hadleSearchMovie();
        }
    }

    return (
    <>
        
        <SearchContainer>
            <input placeholder = '영화 제목을 입력해주세요...' value={searchValue} onChange={onChangeSearchValue} onKeyDown={handleSearchMovieWithKeyboard}/>
            <button onClick={hadleSearchMovie}>검색</button>
        
            
        </SearchContainer>
        <SearchMovieList/>
        
    </> 
    );
};

export default SearchPage;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;

    input{
        flex: 1;
        padding: 15px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        border: 1px solid rgb(220,220,220);
    }

    button{
        width: 80px;
        background-color: #ff0558;
        color: white;
        cursor: pointer;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;


    }
`
