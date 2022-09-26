import LectureBox from "./LectureBox";
import { Lecture } from "../../api/lecture";

interface LectureContainerProps {
  lectureData: Lecture;
}

const LectureContainer = ({ lectureData }: LectureContainerProps) => {
  return (
    <div className="lecture_container">
      <div className="half">
        {lectureData?.data
          .filter((v, i) => {
            if (!(i % 2)) return true;
          })
          .map((v, i) => {
            return <LectureBox key={i} lectureData={v} />;
          })}
      </div>
      <div className="half">
        {lectureData?.data
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
          margin-bottom: 10px;
          width: 100%;
        }
        .half {
          width: 49%;
        }
      `}</style>
    </div>
  );
};

export default LectureContainer;
