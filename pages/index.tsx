import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="bold">
          수위키,
          <br />
          강의평가의 모든 것
          <div className="light">강의평가의 모든 것 수위키</div>
        </div>
        <img
          src="/assets/img/illust_banner.svg"
          width={450}
          height={450}
          alt="banner"
          className="bannerImg"
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          width: 100%;
          background-color: #eee;
        }
        .banner {
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

export default Home;
