import type { NextPage } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import LectureBox from "../components/LectureBox";

const Home: NextPage = () => {
  const [db, setData] = useState({
    data: [],
    count: 0,
  });
  useEffect(() => {
    axios.get("/lecture/all").then((r) => {
      setData(r.data);
    });
  }, []);
  return (
    <div className="container">
      <Banner />
      <SearchBar />
      <div className="lecture_container">
        <div className="half">
          {db.data
            .filter((v, i) => {
              if (!(i % 2)) return true;
            })
            .map((v, i) => {
              return <LectureBox key={i} lectureData={v} />;
            })}
        </div>
        <div className="half">
          {db.data
            .filter((v, i) => {
              if (i % 2) return true;
            })
            .map((v, i) => {
              return <LectureBox key={i} lectureData={v} />;
            })}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .lecture_container {
          display: flex;
          justify-content: space-between;
          width: 60%;
          margin-top: 30px;
        }
        .half {
          width: 49%;
        }
      `}</style>
    </div>
  );
};

export default Home;
