import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { axiosInstance } from "../apis/axios-isntance";
import useCustomFetch from "../hooks/useCustomFetch";

const NowPlaying = () => {
    
    const{ data:movies, isLoading, isError } = useCustomFetch(`/movie/now_playing?language=ko-kr&page=1`)

    if (isLoading){
        return<div>
            <h1 style={{color: 'white'}}>로딩중입니다...</h1>
            </div>
    }

    if (isError){
        return<div>
            <h1 style={{color: 'white'}}>에러!</h1>
            </div>

    }
    return (
        <CardLists>
            { movies.data?.results.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: "none", color: "inherit" }}>
                <Card id={movie.id} coverImg={movie.poster_path} title={movie.title} date={movie.release_date} />
            </Link>
                ))}
        </CardLists>
    )
};

export default NowPlaying;

const CardLists = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
`;

