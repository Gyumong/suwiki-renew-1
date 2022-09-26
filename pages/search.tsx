import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import LectureContainer from "../components/main/LectureContainer";
import { getSearchLectureList } from "../api/lecture";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import Spinner from "../components/spinner";
const Search = () => {
  const router: NextRouter = useRouter();
  const { ref, inView } = useInView();
  const [searchValue, setSearchValue] = useState<string>();
  const { data, status, fetchNextPage, isFetchingNextPage, refetch, remove } =
    useInfiniteQuery(
      "search",
      ({ pageParam = 1 }) =>
        getSearchLectureList(
          window.sessionStorage.getItem("searchValue") as string,
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
  // 다음페이지 로드
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  // 검색어 변경시
  useEffect(() => {
    // 검색어 변경시 페이지 초기화
    if (data) {
      remove();
      refetch();
    }
  }, [router.query.searchValue]);
  if (status === "loading") return <Spinner />;
  if (status === "error") return <div>에러</div>;
  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {data?.pages.map((page, index) => (
        <LectureContainer lectureData={page.data} key={index} />
      ))}
      <div ref={ref} style={{ marginBottom: "10px" }}>
        {isFetchingNextPage ? <Spinner /> : null}
      </div>
    </>
  );
};
export default Search;
