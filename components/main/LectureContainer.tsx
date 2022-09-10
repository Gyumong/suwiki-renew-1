import { useState, useEffect } from "react";
import axios from "axios";
import LectureBox from "./LectureBox";
const LectureContainer = () => {
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
      <style jsx>{`
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

export default LectureContainer;
