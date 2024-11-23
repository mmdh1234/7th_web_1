import { axiosInstance } from "../../apis/axios-isntance";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko-kr&page=${pageParam}`
  );

  return data;
};

export { useGetMovies };
