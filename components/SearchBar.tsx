const SearchBar = () => {
  return (
    <div className="search">
      <span className="search_text">강의평가 검색</span>
      <input
        className="search_bar"
        placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
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
          padding: 20px 0px;
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
