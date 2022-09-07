const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerbox">
        <div className="bold">
          수위키,
          <br />
          강의평가의 모든 것
          <div className="light">강의평가의 모든 것 수위키</div>
        </div>
        <img
          src="/assets/img/illust_banner.svg"
          width={375}
          height={375}
          alt="banner"
          className="bannerImg"
        />
      </div>
      <style jsx>{`
        .banner {
          display: flex;
          justify-content: center;
          z-index: 1;
          background-color: #eee;
          border-top: 1.5px solid rgb(224, 224, 224);
          width: 100%;
        }
        .bannerbox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40vh;
          width: 60%;
        }
        .bold {
          font-size: 1.2rem;
          font-family: "Pretendard-SemiBold";
        }
        .light {
          font-family: "Pretendard-Light";
          font-size: 1rem;
          padding-top: 3px;
        }
        .bannerImg {
          vertical-align: bottom;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Banner;
