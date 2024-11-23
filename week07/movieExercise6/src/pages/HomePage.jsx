import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import { useState, useEffect } from "react";

import Pagination from "./Pagination.jsx";
import { useGetMovies } from "../hooks/queries/useGetMovies.jsx";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const totalPage = 100; // 100으로 제한
  const location = useLocation();

  const { data: movies, isError } = useQuery({
    queryKey: ["movies", "now_playing", page],
    queryFn: () => useGetMovies({ category: "now_playing", pageParam: page }),
  });

  useEffect(() => {
    if (location.state !== null && location.state.page)
      setPage(location.state.page);
  }, []);

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러!</h1>
      </div>
    );
  }

  return (
    <>
      <CardLists>
        {movies?.results.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              id={movie.id}
              coverImg={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
            />
          </Link>
        ))}
      </CardLists>

      <Pagination setPage={setPage} current={page} total={totalPage} />
    </>
  );
};

const CardLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  justify-content: center;
`;

export default HomePage;
