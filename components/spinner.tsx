const Spinner = () => {
  return (
    <div className="container">
      <div className="loader">
        <style jsx>{`
          .container {
            position: absoulte;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #346cfd;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Spinner;
