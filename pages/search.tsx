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
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["search", router.query.searchValue],
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
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );
  // 다음페이지 로드
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  if (status === "loading") return <Spinner />;
  if (status === "error") return <div>에러</div>;
  return (
    <div className="container">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="option">총 {data?.pages[0].data.count}건</div>
      {data?.pages[0].data.count !== 0 ? (
        <>
          {data?.pages.map((page, index) => (
            <LectureContainer lectureData={page.data} key={index} />
          ))}
          <div ref={ref} style={{ marginBottom: "10px" }}>
            {isFetchingNextPage ? <Spinner /> : null}
          </div>
        </>
      ) : (
        <div>{router.query.searchValue}에 대한 검색결과가 없습니다.</div>
      )}
      <style jsx>{`
        .container {
          width: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .option {
          width: 100%;
          text-align: right;
          margin: 10px 0px;
        }
      `}</style>
    </div>
  );
};
export default Search;
