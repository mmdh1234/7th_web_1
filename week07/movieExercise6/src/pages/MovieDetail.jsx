import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import styled from 'styled-components';

const MovieDetail = () => {
    const { movieId } = useParams();

    //영화 기본정보
    const { data: movie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-kr`);

    //출연진 정보 요청
    const { data: credits } = useCustomFetch(`/movie/${movieId}/credits`);

    if (isLoading) return <h1>로딩 중...</h1>;
    if (isError) return <h1>에러가 발생했습니다.</h1>;

    return (
        <Container>
            <HeaderSection>
                <Poster src={`https://image.tmdb.org/t/p/original${movie?.data?.backdrop_path}`} alt={movie?.data?.title} />
                <MovieInfo>
                    <Title>{movie?.data?.title}</Title>
                    <SubInfo>
                        <span>평균 {movie?.data?.vote_average}</span> • <span>{movie?.data?.release_date.slice(0, 4)}</span> • <span>{movie?.data?.runtime}분</span>
                    </SubInfo>
                    <Tagline>{movie?.data?.tagline}</Tagline>
                    <Overview>{movie?.data?.overview}</Overview>
                </MovieInfo>
            </HeaderSection>

            <CastSection>
                <CastTitle>감독/출연</CastTitle>
                <CastList>
                    {credits?.data?.cast?.map((cast) => (
                        <CastItem key={cast.id}>
                            {cast.profile_path ? (
                                <CastImage src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt={cast.name} />
                            ) : (
                                <Placeholder />
                            )}
                            <CastName>{cast.name}</CastName>
                            <CastCharacter>{cast.character}</CastCharacter>
                        </CastItem>
                    ))}
                </CastList>
            </CastSection>
        </Container>
    );
};

export default MovieDetail;

// Styled Components
const Container = styled.div`
    color: white;
    background-color: #1a1a1a;
`;

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #111;
`;

const Poster = styled.img`
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-right: 20px;
`;

const MovieInfo = styled.div`
    max-width: 600px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 0;
`;

const SubInfo = styled.div`
    font-size: 1rem;
    color: #aaa;
    margin-top: 10px;
`;

const Tagline = styled.h3`
    font-style: italic;
    color: #ddd;
    margin-top: 10px;
`;

const Overview = styled.p`
    font-size: 1rem;
    margin-top: 10px;
    line-height: 1.5;
`;

const CastSection = styled.div`
    padding: 20px;
    background-color: #222;
`;

const CastTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

const CastItem = styled.div`
    text-align: center;
    width: 100px;
`;

const CastImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 5px;
    background-color: black; /* 기본 배경 */
`;

const Placeholder = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: white;
    margin-bottom: 5px;
`;

const CastName = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
`;

const CastCharacter = styled.div`
    font-size: 0.8rem;
    color: #aaa;
`;

