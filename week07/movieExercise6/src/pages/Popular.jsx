import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card/Card";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";

import { UseGetInfiniteMovies } from "../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";

const Popular = () => {
  const {
    data: movies,
    isFetching,
    isPending,
    hasNextPage,
    fetchNextPage,
    isError,
  } = UseGetInfiniteMovies("popular");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러!</h1>2
      </div>
    );
  }

  return (
    <>
      <CardLists>
        {movies?.pages.map((page) =>
          page.results.map((movie) => {
            // 마지막 아이템에 ref를 연결

            return (
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
            );
          })
        )}
        {isFetching && <CardListSkeleton number={20} />}
      </CardLists>
      <div
        ref={ref}
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {isFetching && <ClipLoader color="#ffffff" />}
      </div>
    </>
  );
};

export default Popular;

const CardLists = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;
