/**
 * The above code is a React component that renders a footer section with links and an Adobe logo.
 * @returns The Footer component is being returned.
 */
import React from "react";
import { adobeLogo } from "../Data";
const Footer = () => {
  return (
    /* The code provided is a React component called "Footer". It renders a footer section with
    links and an Adobe logo. */
    <section className="px-4 py-3 fixed w-full bottom-0 bg-white">
      <div className="container-fluid ">
        <div className="grid lg:grid-cols-2 gap-3 items-center ">
          <div className="left-foot">
            <ul className="flex items-center">
              <li className="mx-3 font-medium text-sm">
                <a href="https://github.com/avinash5455" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </li>
              <li className="mx-3 font-medium text-sm">
                <a href="https://www.linkedin.com/in/avinash-singh-37107a278/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="mx-3 font-medium text-sm">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Avinash
                </a>
              </li>
              <li className="mx-3 font-medium text-sm">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Kumar
                </a>
              </li>
              <li className="mx-3 font-medium text-sm">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Singh
                </a>
              </li>
            </ul>
          </div>

          <div className="adobe-right flex lg:justify-end">
            <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
              <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
              <a href="" className="pl-1 font-bold text-black text-sm">
                {" "}
                Adobe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
