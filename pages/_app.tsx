import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
