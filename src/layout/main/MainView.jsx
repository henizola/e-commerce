import React from "react";
import './MainView.css';
import Navbar from '../../components/templates/navbar/Navbar';
import Footer from '../../components/templates/footer/Footer';

const MainView = (props) => {
  const { children } = props;

  return (
    <main>
      <Navbar />
      <div className="main_body">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainView;
