import type { NextPage } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";

const LectureBox = () => {
  return (
    <div className="box">
      <div className="header">
        <span className="title">도전과창조-기업가정신</span>
        <div className="type">중핵</div>
      </div>
      <div className="major">교양 | 김창회</div>
      <div className="footer">
        <div className="starpoint">4.3</div>
        <div className="detail">자세히</div>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 14px 24px;
          width: 49%;
        }
        .header {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .footer {
          display: flex;
          align-items: center;
          margin-top: 14px;
        }
        .title {
          font-size: 1.1rem;
        }
        .major {
          font-size: 14px;
          font-family: "Pretendard-Regular";
          color: rgb(81, 81, 81);
        }
        .type {
          border-radius: 10px;
          background-color: rgb(239, 239, 239);
          font-size: 12px;
          padding: 5px 10px;
        }
        .starpoint {
          color: #346cfd;
          font-size: 18px;
        }
        .detail {
          color: rgb(81, 81, 81);
          font-size: 12px;
          text-decoration: underline;
          padding-left: 6px;
        }
      `}</style>
    </div>
  );
};

const Home: NextPage = () => {
  const [db, setData] = useState([]);
  useEffect(() => {
    axios.get("lecture/all").then((res) => {
      setData(res.data);
    });
  });
  return (
    <div className="container">
      <Banner />
      <SearchBar />
      <div className="lecture_container">
        {db.map((v, i) => {
          return <LectureBox />;
        })}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .lecture_container {
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default Home;
