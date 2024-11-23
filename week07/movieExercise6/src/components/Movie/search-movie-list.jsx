import Card from "../Card/Card";
import styled from 'styled-components';
import useCustomFetch from "../../hooks/useCustomFetch";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import CardSkeleton from "../Card/Skeleton/card-skeleton";
import CardListSkeleton from "../Card/Skeleton/card-list-skeleton";



const SearchMovieList = () => {

    const[searchParams,setSearchParams] = useSearchParams({mq: ''});
    const mq = searchParams.get('mq');
    const url = `https://api.themoviedb.org/3/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;

    const{data:movies, isLoading, isError} = useCustomFetch(url);
    
    if(mq && isLoading){
        return (
        <CardLists>
            <CardListSkeleton number = {20}/>
        </CardLists>
        )
    }

    if(isError){
        return <h1>에러 발생</h1>
    }

    if(mq && movies.data?.results.length === 0){
        return(
            <No>
                <h1>검색어 '{mq}'에 해당하는 데이터가 없습니다.</h1>
            </No>
        )
    }

    return(
    <div>
        <CardLists>
                { movies.data?.results.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card id={movie.id} coverImg={movie.poster_path} title={movie.title} date={movie.release_date} />
                </Link>
                    ))}
        </CardLists>
        
    </div>
    );
};

export default SearchMovieList;

const CardLists = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;

`
const No = styled.div`
    text-align: 'center';
    margin-top: 30px;
`