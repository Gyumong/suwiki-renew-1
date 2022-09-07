const LectureBox = (props: any) => {
  return (
    <div className="box">
      <div className="header">
        <span className="title">{props.lectureData.lectureName}</span>
        <div className="type">{props.lectureData.lectureType}</div>
      </div>
      <div className="major">
        {props.lectureData.majorType} | {props.lectureData.professor}
      </div>
      <div className="footer">
        <div className="starpoint">
          {props.lectureData.lectureTotalAvg.toFixed(1)}
        </div>
        <div className="detail">자세히</div>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 14px 24px;
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

export default LectureBox;
