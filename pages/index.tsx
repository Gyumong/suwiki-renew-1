import { useState } from "react";
import type { GetServerSideProps } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";
import LectureContainer from "../components/main/LectureContainer";
import { getMainLectureList, Lecture } from "../api/lecture";
import { CustomButton } from "../components/button";
import { useRouter } from "next/router";
interface MainProps {
  lectureData: Lecture;
}

const Home = ({ lectureData }: MainProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="container">
      <Banner />
      <div className="content">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <LectureContainer lectureData={lectureData} />
        <CustomButton
          onClick={() => {
            window.sessionStorage.setItem("searchValue", "");
            router.push({
              pathname: "/search",
              query: {
                searchValue: "",
              },
            });
          }}
        >
          {"더 보러 가기 →"}
        </CustomButton>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const lectureData = await getMainLectureList();
  return {
    props: {
      lectureData,
    },
  };
};
