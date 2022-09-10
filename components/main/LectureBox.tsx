import { useState } from "react";
import MainListModal from "./MainListModal";
import StarRatings from "react-star-ratings";

const LectureBox = (props: any) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="box">
      <div className="content">
        <div className="header">
          <span className="title">{props.lectureData.lectureName}</span>
          <div className="type">{props.lectureData.lectureType}</div>
        </div>
        <div className="major">
          {props.lectureData.majorType} | {props.lectureData.professor}
        </div>
        <div className="footer">
          <StarRatings
            rating={props.lectureData.lectureTotalAvg}
            starRatedColor="#346cfd"
            starDimension="20px"
            starSpacing="0px"
            numberOfStars={5}
            name="rating"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <div className="starpoint">
            {props.lectureData.lectureTotalAvg.toFixed(1)}
          </div>
          <div className="detail" onClick={() => setModal(!modal)}>
            {modal ? "간략히" : "자세히"}
          </div>
        </div>
      </div>
      {modal ? <MainListModal lectureData={props.lectureData} /> : null}
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          margin-bottom: 10px;
          cursor: pointer;
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
          font-size: 18px;
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
          margin-left: 5px;
        }
        .detail {
          color: rgb(81, 81, 81);
          font-size: 12px;
          text-decoration: underline;
          padding-left: 6px;
        }
        .content {
          padding: 14px 24px;
        }
      `}</style>
    </div>
  );
};

export default LectureBox;
