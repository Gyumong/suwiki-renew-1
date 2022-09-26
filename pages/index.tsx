import { useState } from "react";
import type { GetServerSideProps } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";
import LectureContainer from "../components/main/LectureContainer";
import { getMainLectureList, Lecture } from "../api/lecture";
import { CustomButton } from "../components/button";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
interface MainProps {
  lectureData: Lecture;
}

const Home = ({ lectureData }: MainProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const query = useQuery("lecture", getMainLectureList, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="container">
      <Banner />
      <div className="content">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <LectureContainer lectureData={query.data?.data} />
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const lectureData = await getMainLectureList();
//   return {
//     props: {
//       lectureData,
//     },
//   };
// };
