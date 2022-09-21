import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import LectureContainer from "../components/main/LectureContainer";
import { getSearchLectureList } from "../api/lecture";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import Spinner from "../components/spinner";
const Search = () => {
  const router = useRouter();
  const { ref, inView } = useInView();
  const [searchValue, setSearchValue] = useState<string>();
  const { data, status, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery(
      "search",
      ({ pageParam = 1 }) =>
        getSearchLectureList(
          window.localStorage.getItem("searchValue") as string,
          pageParam
        ),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.isLast) return lastPage.nextPage;
          return undefined;
        },
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        keepPreviousData: true,
      }
    );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  useEffect(() => {
    refetch();
  }, [router.query.searchValue]);
  if (status === "loading") return <Spinner />;
  if (status === "error") return <div>에러</div>;
  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <LectureContainer lectureData={lectureData} /> */}
      {data?.pages.map((page, index) => (
        <LectureContainer lectureData={page.data} key={index} />
      ))}
      <div ref={ref}>{isFetchingNextPage ? <Spinner /> : null}</div>
    </>
  );
};
export default Search;
