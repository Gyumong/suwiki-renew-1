import type { NextPage } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";
import LectureContainer from "../components/main/LectureContainer";
import { getMainLectureList, Lecture } from "../api/lecture";
import { GetStaticProps } from "next";

interface MainProps {
  lectureData: Lecture;
}

const Home = ({ lectureData }: MainProps) => {
  return (
    <div className="container">
      <Banner />
      <SearchBar />
      <LectureContainer lectureData={lectureData} />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const lectureData = await getMainLectureList();
  return {
    props: {
      lectureData,
    },
  };
};
