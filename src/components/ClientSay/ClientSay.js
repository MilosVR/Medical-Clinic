import React from "react";
import "./ClientSay.scss";
import TestimonialCard from "./TestimonialCard";

const ClientSay = props => {
  return (
    <div className="client_say">
      <div className="container">
        <div className="client_say_headline">
          <h1>
            What are Clients <span>Say</span>
          </h1>
        </div>
        <div className="client_say_slider_wraper">
          <TestimonialCard
            testimonialImage={1}
            testimonialName={"Lara Chang"}
            testimonialText={
              "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
            }
          />
          <TestimonialCard
            testimonialText={
              "Thanks to the best pediatricians in your center. Every time I address and receive a high level professionalism! I will recommend you to all my friends and acquaintances. The services themselves were rendered qualitatively."
            }
            testimonialImage={2}
            testimonialName={"John Doe"}
          />
          <TestimonialCard
            testimonialImage={3}
            testimonialName={"Lara Chang"}
            testimonialText={
              "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
