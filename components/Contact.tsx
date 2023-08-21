"use client";
import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Links from "./Links";
import Link from "next/link";
const Contact = () => {
  const handleSubmit = async (e: any) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby4fy1BIQ54MO1d8UQD_EtTE3z2BSaeeemqqJ7lOHh1E23phy8LkfD4OMtxmUVN2e6_zQ/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        console.log("Success!", response);
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };
  return (
    <div className="mx-10 ">
      <p className="hidden md:block text-[44px] font-bold text-center ">
        Now it’s your turn to do the{" "}
        <span className="text-[#313bac]">Talking.</span>
      </p>
      <br className="hidden md:block" />
      <div className="flex flex-col md:flex-row items-center justify-around md:w-full gap-16 md:gap-0">
        <div className=" flex flex-col justify-center md:justify-start gap-6 md:gap-10 items-center w-full ">
          <p className=" text-4xl font-semibold border-b-4 border-[#313bac] px-2 pb-2">
            Contact Me
          </p>

          <div className=" space-y-2">
            <div className="flex items-center space-x-5 justify-start">
              <PhoneIcon className="  h-7 w-7 text-green-600" />
              <p className="font-medium text-lg">+91 9896434478</p>
            </div>

            <div className="flex items-center space-x-5 justify-start">
              <EnvelopeIcon className=" h-7 w-7 text-blue-500" />
              <p className="font-medium text-lg">Jatinjamdagni13@gmail.com</p>
            </div>
          </div>
          <Links />
        </div>
        <div className=" w-full space-y-4 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full md:w-fit"
          >
            <input
              type="text"
              name="Name"
              placeholder="Name"
              required
              className="contactfield"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="contactfield"
            />
            <input
              type="tel"
              name="Contact"
              placeholder="Contact No."
              required
              className="contactfield"
              minLength={10}
              maxLength={10}
            />
            <textarea
              name="Message"
              placeholder="Message"
              rows={3}
              className="contactfield"
            />
            <button
              type="submit"
              className="w-full md:w-full py-2 px-auto rounded-md bg-blue-700 text-white text-[20px] active:bg-blue-500 outline outline-offest-2 active:outline-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
