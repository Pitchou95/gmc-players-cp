import React, { useState } from "react";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import audio from "../../assets/utils/type-writing-6834.mp3";
import { useEffect } from "react";
import Slide from "react-reveal/Slide";
import { supabase } from "../../supabaseClient";

const Contact = () => {
  const [payLoad, setPayLoad] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactName, setCN] = useState(null);
  const updateState = (key, value) => {
    setPayLoad({ ...payLoad, [key]: value });
  };
  const insert = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .insert([payLoad])
      // .then(() =>);
    console.log(data);
    console.log(error);
    setCN(data[0].name)
  };

  const handleContact = (e) => {
    e.preventDefault();
    console.log("submitted form");
    console.log(payLoad);
    insert();
  };
  console.log(supabase);
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <Slide right>
            <TypeAnimation
              sequence={[
                `je vous accompagne dans tous les aspects nécessaires pour la mise en
              production de votre projet informatique englobant le volet
              d'analyse, la création des maquettes visules, le codage et scripting
              ainsi que le déploiment jusqu'à la maintennace, néhsitez à prendre
              contact avec moi afin que nous puissons discuté les details.`,
                200,
              ]}
              wrapper="p"
              speed={75}
            />
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
                action="backend/index.php"
                method="post"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => updateState("email", e.target.value)}
                      value={payLoad.email}
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
                    onChange={(e) => updateState("subject", e.target.value)}
                    value={payLoad.subject}
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
                    onChange={(e) => updateState("message", e.target.value)}
                    value={payLoad.message}
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button
                    id="btnSendContact"
                    type="submit"
                    onClick={handleContact}
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
