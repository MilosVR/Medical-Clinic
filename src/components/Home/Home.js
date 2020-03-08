import React, { Fragment } from "react";
import HomeMainSlider from "./Slider/HomeMainSlider";
import MedicalInfo from "../Medical_info/MedicalInfo";
import MedicalServices from "../Medical_services/MedicalServices";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import MedicalStuff from "../MedicalStuff/MedicalStuff";
import TablePrice from "../TablePrice/TablePrice";
import ClientSay from "../ClientSay/ClientSay";
import WorkNumbers from "../WorkNumbers/WorkNumbers";
import News from "../News/News";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Home = props => {
  return (
    <div className="home">
      <HomeMainSlider />
      <div className="home_inner">
        <MedicalInfo />
        <MedicalServices />
        <WhyChooseUs />
        <MedicalStuff />
        <WorkNumbers />
        <TablePrice />
        <ClientSay />
        <News />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
