import React, { useState, useRef } from "react";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import audio from "../../assets/utils/type-writing-6834.mp3";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
// import { supabase } from "../../supabaseClient";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [payLoad, setPayLoad] = useState({
    name: "",
  });
  const [contactName, setCN] = useState(null);
  const updateState = (key, value) => {
    setPayLoad({ ...payLoad, [key]: value });
  };
  const form = useRef();

  // const handleContact = (e) => {
  //   e.preventDefault();
  //   console.log("submitted form");
  //   console.log(payLoad);
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8ba9tj",
        "template_sk639eb",
        form.current,
        "9EcIpSFbadre2h0PL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setCN(payLoad.name);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // console.log(supabase);
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <Slide right>
            <p>
              Si vous cherchez un partenaire pour la mise en production de votre
              projet informatique, je suis là pour vous aider. En tant que
              développeur web fullstack, je peux vous accompagner à chaque étape
              du processus, de l'analyse initiale à la maintenance continue. Que
              vous ayez besoin de créer des maquettes visuelles, de coder et de
              scripter votre site web, ou de déployer votre projet, je suis là
              pour vous aider. N'hésitez pas à me contacter pour discuter de vos
              besoins et de la façon dont je peux vous aider à les réaliser.
            </p>
          </Slide>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i>
                  <GoLocation />
                </i>
                <h4>Location:</h4>
                <p>LOT AL FAJR GH10B IMM 79 DAR BOUAZZA 20220 Appt. 16</p>
              </div>

              <div className="email">
                <i>
                  <BsFillEnvelopeFill />
                </i>
                <h4>Email:</h4>
                <p>meh.laraibi@gmail.com</p>
              </div>

              <div className="phone">
                <i>
                  <BsFillTelephoneFill />
                </i>
                <h4>Call:</h4>
                <p>+212 6 49 81 41 09</p>
              </div>
              {/* <Gmap /> */}
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            {contactName ? (
              <div className="sent-message">
                Your message has been sent. Thank you {contactName}!
              </div>
            ) : (
              <form
                // action="backend/index.php"
                // method="post"
                className="php-email-form"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      id="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => updateState("name", e.target.value)}
                      value={payLoad.name}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="from_email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => updateState("email", e.target.value)}
                      // value={payLoad.email}
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    // onChange={(e) => updateState("subject", e.target.value)}
                    // value={payLoad.subject}
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                    // onChange={(e) => updateState("message", e.target.value)}
                    // value={payLoad.message}
                  ></textarea>
                  <div className="validate"></div>
                </div>

                <div className="text-center">
                  <button
                    id="btnSendContact"
                    type="submit"
                    // onClick={handleContact}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
