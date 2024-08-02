import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import photo from "../../public/images/IMG_1117 2.jpg";
import { FaFilePdf } from "react-icons/fa6";


const HomePage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-white px-4 h-20 shadow-md fixed top-0">
        <span className="text-xl font-thin">
          <span className="font-normal">Himanshu Hada</span> - Frontend
          Developer
        </span>
        <div className="flex items-center justify-between w-96 text-xl font-light">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Projects</span>
          <span className="hover:underline cursor-pointer">Skills</span>
        </div>
        <div className="flex w-[13vw] items-center justify-evenly h-fit">
          <Link href="https://www.instagram.com/">
            <FaInstagram
              size={30}
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <FaLinkedinIn
              size={30}
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          {/* <CiFacebook size={30} /> */}
          {/* <FaPhoneAlt size={22} /> */}
          <Link href="mailto:himanshuhada17@gmail.com">
            <SiGmail
              size={22}
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="mt-20 h-screen w-full flex justify-center">
        <div className="w-[60vw] space-y-12">
          <div className="w-full flex justify-between mt-7">
            <div className="w-[55%] space-y-5 fade-in-top">
              <span className="text-5xl font-bold">A little bit about me</span>
              <p className="leading-relaxed">
                As a Frontend Developer for MedicalEshop, I developed and
                maintained the ecommerce site's frontend using{" "}
                <span className="font-bold text-purple-900">Tailwind CSS</span>{" "}
                for responsive and modern UI components,{" "}
                <span className="font-bold text-purple-900">TypeScript</span>{" "}
                for type-safe coding, and{" "}
                <span className="font-bold text-purple-900">React.js</span> for
                dynamic and interactive features. My work included collaborating
                with the backend team to integrate APIs, ensuring seamless
                functionality, and enhancing the overall user experience.
              </p>
              <p className="leading-relaxed">
                At TDC, I worked on the ERP software, focusing on the support
                ticket and CRM module to manage leads, prospects, and customers.
                I was responsible for developing and maintaining the frontend
                using modern web technologies, ensuring a seamless user
                experience.
              </p>
            </div>
            <div className="w-[45%] flex justify-end h-full">
              <Image
                src={photo}
                alt={""}
                height={300}
                width={300}
                className="object-contain rounded-3xl fade-in-right"
              />
            </div>
          </div>
          {/* <div className="bg-gradient-to-t from-purple-100 to-gray-50 rounded-lg w-[30%] p-4 flex flex-col items-center justify-center">
            <span className="text-sm font-light">Download My Resume!</span>
            <button className="text-white bg-black rounded-2xl p-2">Download</button>
          </div> */}
          <div className="">
            <button
              className="text-white text-lg bg-black rounded-2xl p-3 px-3 flex items-center gap-2"
              onClick={() => {
                const link = document.createElement("a");
                link.target = "_blank";

                link.href =
                  "https://drive.google.com/file/d/1MuKWCorMh0xoBUfNbiiDKxRNCmfEVTnx/view?usp=drive_link"; // Path to the resume file in the public directory
                link.download = "resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
              <FaFilePdf/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
