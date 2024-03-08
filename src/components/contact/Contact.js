import React, { useRef, useState } from "react";
import ContactLeft from "./ContactLeft";
import { Title } from "../ui/Title/Title";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Prepare the email data
      const emailData = {
        from_name: username,
        phone: phoneNumber,
        subject: subject,
        message: message,
        reply_to: email,
      };
      console.log(emailData);

      // Use the emailjs.sendForm method to send the email
      emailjs
        .sendForm(
          "service_a83mwk4",
          "template_crw6xto",
          form.current,
          "wTuP0_-qh1sVDIcjH"
        )
        .then(
          (result) => {
            console.log(result.text);
            setErrMsg(""); // Clear any previous error message
            setSuccessMsg(
              `Thank you, ${username}! Your message has been sent successfully.`
            );
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            setErrMsg("Something went wrong. Please try again.");
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-5 pt-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title1={"Contact me"} title2={"Contact me"} />
      </div>
      <div
        className="w-full overflow-x-hidden"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="w-full h-auto flex flex-col lgl:flex-row gap-7 justify-between">
          <ContactLeft />
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0b0a0a] to-[#080b0d] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
          >
            <form
              ref={form}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    name="from_name"
                    className={`${
                      errMsg === "Username is required!" && "outline-[#262525]"
                    } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    name="phone"
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-[#262525]"
                    } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="reply_to"
                  className={`${
                    errMsg === "Please give your Email!" && "outline-[#262525]"
                  } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  className={`${
                    errMsg === "Plese give your Subject!" && "outline-[#262525]"
                  } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className={`${
                    errMsg === "Message is required!" && "outline-[#262525]"
                  } bg-[#262525] p-3 rounded focus:outline-none focus:border-b-4 focus:border-gray-700`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
