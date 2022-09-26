import { useRouter } from "next/router";
import { useEffect } from "react";
const SearchBar = ({ searchValue, setSearchValue }: any) => {
  const router = useRouter();
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchValue || searchValue.length < 2)
        return alert("검색어는 두 글자 이상 입력해주세요.");
      else {
        window.sessionStorage.setItem("searchValue", searchValue);
        router.push({
          pathname: "/search",
          query: {
            searchValue: searchValue,
          },
        });
      }
    }
  };
  console.log(searchValue);
  return (
    <div className="search">
      <span className="search_text">강의평가 검색</span>
      <input
        className="search_bar"
        placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
        defaultValue={router.query.searchValue}
        onInput={(e) => setSearchValue(e.currentTarget.value)}
        onKeyPress={onKeyPress}
      />
      <style jsx>{`
        .search {
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
          width: 100%;
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
