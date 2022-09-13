import { useEffect, useState } from "react";
import { getSearchLectureList, Lecture } from "../../api/lecture";
import { Router, useRouter } from "next/router";
import SearchBar from "../../components/SearchBar";
import LectureContainer from "../../components/main/LectureContainer";
import dynamic from "next/dynamic";

interface searchProps {
  lectureData: Lecture;
}

const Search = () => {
  const router = useRouter();
  const [lectureData, setLectureData] = useState<any>();
  const LectureContainer = dynamic(
    () => import("../../components/main/LectureContainer"),
    {
      ssr: false,
    }
  );
  useEffect(() => {
    getSearchLectureList(router.query.searchValue).then((r) => {
      setLectureData(r.data);
    });
  }, []);
  return (
    <>
      <SearchBar />
      <LectureContainer lectureData={lectureData} />
    </>
  );
};
export default Search;
