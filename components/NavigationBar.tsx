import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <nav className="container">
        <Link href="/">
          <a>
            <img src="/assets/img/LOGO.png" />
          </a>
        </Link>
        <ul>
          <li className="notice">공지사항</li>
          <Link href="/login">
            <a>
              <li className="login">로그인</li>
            </a>
          </Link>
          <li className="signup">회원가입</li>
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
        li {
          list-style: none;
          padding: 20px;
          cursor: pointer;
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
