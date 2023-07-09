import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ColorRing } from "react-loader-spinner";

const ContactForm = () => {
  const form = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.message
    ) {
      setErrMsg("Please fill all fields!");
    } else {
      try {
        await emailjs.sendForm(
          "service_dusfn7m",
          "template_l0rigkp",
          form.current,
          "P52HfsYa2qxaxU2qg"
        );
        setErrMsg("Your message has been sent successfully.");
        setTimeout(() => {
          setErrMsg("");
        }, 5000);
        setForm({
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setErrMsg("Something went wrong! Please tr again.");
      }
    }
    setTimeout(() => {
      setErrMsg("");
    }, 10000);
    setLoading(false);
  };
  return (
    <div className=" w-full lg:w-[60%] p-4 sm:p-12 dark:shadow-shadowOne shadow-shadowTwo  rounded-xl">
      <form
        ref={form}
        className=" flex flex-col gap-8 text-gray-400"
        onSubmit={handleSubmit}
      >
        {errMsg && (
          <p
            className={` ${
              errMsg === "Your message has been sent successfully."
                ? "text-green-500"
                : "text-orange-600"
            } text-center p-4 dark:shadow-shadowOne shadow-shadowTwo text-xl tracking-wide animate-bounce `}
          >
            {errMsg}
          </p>
        )}
        <div className=" flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 w-full sm:w-[50%]">
            <label className=" contactLabel" htmlFor="name">
              Your Name
            </label>
            <input
              name="name"
              className="contactInput"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full sm:w-[50%]">
            <label className=" contactLabel" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              className=" contactInput"
              id="phoneNumber"
              type="number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label className="contactLabel" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            className=" contactInput"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label className=" contactLabel" htmlFor="message">
            Message
          </label>
          <textarea
            className=" bg-gray-300 shadow-shadowTwo dark:shadow-none dark:bg-[#191b1e] resize-none border-gray-700 dark:border-b-[1px] rounded-lg outline-none focus-visible:outline-designColor focus-visible:border-b-transparent p-4 text-gray-500 dark:text-lightText outline-offset-2"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {!loading ? (
          <button className="text-gray-500 hover:scale-95 duration-200 dark:text-gray-200 font-medium bg-gray-300 shadow-shadowTwo dark:shadow-none dark:bg-[#191b1e] p-4 text-center rounded-lg text-lg uppercase">
            send
          </button>
        ) : (
          <button
            disabled
            className=" flex justify-center text-gray-500 hover:scale-95 duration-200 dark:text-gray-200 font-medium bg-gray-300 shadow-shadowTwo dark:shadow-none dark:bg-[#191b1e] p-4 text-center rounded-lg text-lg uppercase disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ColorRing height={40} />
          </button>
        )}

        {errMsg && (
          <p
            className={` ${
              errMsg === "Your message has been sent successfully."
                ? "text-green-500"
                : "text-orange-600"
            } text-center p-4 dark:shadow-shadowOne shadow-shadowTwo text-xl tracking-wide animate-bounce `}
          >
            {errMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
