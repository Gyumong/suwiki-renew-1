const MainListModal = (props: any) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="score_box">
          <span>만족도</span>
          <span id="value">
            {props.lectureData.lectureSatisfactionAvg.toFixed(1)}
          </span>
        </div>
        <div className="score_box">
          <span>꿀강지수</span>
          <span id="value">{props.lectureData.lectureHoneyAvg.toFixed(1)}</span>
        </div>
        <div className="score_box">
          <span>배움지수</span>
          <span id="value">
            {props.lectureData.lectureLearningAvg.toFixed(1)}
          </span>
        </div>
      </div>
      <style jsx>{`
        .modal {
          border-top: 1px solid #e0e0e0;
          padding: 6px 12px;
        }
        .modal_content {
          display: flex;
          font-size: 13px;
        }
        .score_box {
          display: flex;
          align-items: center;
          padding: 6px 12px;
        }
        #value {
          font-size: 16px;
          color: #346cfd;
          padding-left: 7px;
        }
      `}</style>
    </div>
  );
};

export default MainListModal;
