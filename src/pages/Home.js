import React, { useEffect, Fragment, useState} from "react";

import Tutor from '../components/widgets/Tutor';
import Company from '../components/widgets/Company';
import Header from '../components/widgets/Header';
import Body from '../components/widgets/Body';

import './pages.css';

const Home = () => {

  const [portant, setPortant] = useState(false);

  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setPortant(true);
    }

    window.addEventListener(
      "orientationchange",
      function() {
        switch (window.orientation) {
          case 0:
            setPortant(true);
            break;
          case 90:
            setPortant(false);
            break;
          default:
            return portant;
        }
      },
      false
    );

    return () => {};
  }, []);

  return (
    <div className="root">
      { !portant ? (
        <Fragment>
          <nav className="header">
            <Header />
          </nav>
          <main className="main">
            <div className="sidebar">
              <Company />
              <Tutor />
            </div>
            <div className="body">
              <Body />
            </div>
          </main>
        </Fragment>
      ) : (
        <h4 className="text-center">Please use Landscape!</h4>
      )}
    </div>
  );
}
export default Home;