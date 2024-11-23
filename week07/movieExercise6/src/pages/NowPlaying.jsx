import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card/Card";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";

import { UseGetInfiniteMovies } from "../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";

const NowPlaying = () => {
  const {
    data: movies,
    isFetching,
    isPending,
    hasNextPage,
    fetchNextPage,
    isError,
  } = UseGetInfiniteMovies("now_playing");

  // useInView 훅을 통해 스크롤 위치를 감지
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // 사용자가 ref가 연결된 요소를 볼 때 fetchNextPage 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

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

export default NowPlaying;

const CardLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  justify-content: center;
`;
