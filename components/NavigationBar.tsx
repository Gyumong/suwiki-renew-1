import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <nav className="container">
        <Link href="/">
          <img src="/assets/img/LOGO.png" />
        </Link>
        <ul>
          <Link href="/login">
            <button>공지사항</button>
          </Link>

          <Link href="/login">
            <button>로그인</button>
          </Link>

          <Link href="/login">
            <button className="signup">회원가입</button>
          </Link>
        </ul>
      </nav>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 60%;
        }
        .container img {
          width: 110px;
        }
        .container ul {
          display: flex;
        }
        button {
          border: none;
          background: none;
          padding: 20px;
          cursor: pointer;
          font-size: 16px;
        }
        .signup {
          color: #346cfd;
        }
        a,
        a:visited {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
