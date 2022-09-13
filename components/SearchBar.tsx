import Router from "next/router";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const SearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<any>(router.query.searchValue);
  const [option, setOption] = useState<string>("modifiedDate");
  const [page, setPage] = useState<number>(1);
  const [majorType, setMajorType] = useState<string>("");
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchValue === router.query.searchValue) {
        location.reload();
      } else {
        Router.push(
          {
            pathname: "lecture/search",
            query: { searchValue, option, page, majorType },
          },
          `/lecture/search/?searchValue=${searchValue}&option=${option}&page=${page}&majorType=${majorType}`
        );
      }
    }
  };
  return (
    <div className="search">
      <span className="search_text">강의평가 검색</span>
      <input
        className="search_bar"
        placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
        defaultValue={searchValue}
        onInput={(e) => setSearchValue(e.currentTarget.value)}
        onKeyPress={onKeyPress}
      />
      <style jsx>{`
        .search {
          display: flex;
          flex-direction: column;
          width: 60%;
        }
        .search_text {
          font-size: 1.5rem;
          font-family: "Pretendard-SemiBold";
          padding: 4rem 0 1.5rem 0;
        }
        .search_bar {
          border: none;
          outline: none;
          padding: 20px 0px;
          border-bottom: 1px solid black;
        }
        input::placeholder {
          font-family: "Pretendard-Regular";
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
