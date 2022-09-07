import type { NextPage } from "next";
import Banner from "../components/banner";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Banner />
      <SearchBar />
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
