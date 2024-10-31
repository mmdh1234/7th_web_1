import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import styled from 'styled-components';
import useCustomFetch from "../hooks/useCustomFetch";
import { Link } from "react-router-dom";


const Upcoming = () => {
    const{ data:movies, isLoading, isError } = useCustomFetch(`/movie/upcoming?language=ko-kr&page=1`)

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

export default Upcoming;

const CardLists = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
`;
