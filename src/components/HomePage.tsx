import React, { useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import photo from "../../public/images/IMG_1117 2.jpg";
import { FaFilePdf } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import { Divider } from "antd";
import tdclogo from "../../public/images/the_developer_company_logo.jpg";
import centralAcademy from "../../public/images/central_academy.png";
import mmps from "../../public/images/mmps.png";
import techno from "../../public/images/techno.jpg";

const HomePage = () => {
  const expRef = useRef(null);
  const aboutRef = useRef(null);
  const projRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = () => {
    setToggleTheme((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-full flex items-center justify-between  ${
          toggleTheme ? "bg-black/40 black-theme" : "bg-white/40"
        }  backdrop-blur-md  px-4 h-20 shadow-md fixed top-0`}
      >
        <span className="text-xl font-thin flex items-center">
          <span className="font-normal">Himanshu Hada</span> <span className="sm:block hidden"> - Frontend
          Developer</span>
        </span>
        <div className="sm:flex  hidden items-center justify-between w-[40vw] text-xl font-light">
          <span
            className="hover:border-b-2 cursor-pointer hover:pb-1 transition-all duration-300"
            onClick={() => {
              scrollToTop();
            }}
          >
            About
          </span>
          {/* <span
            className="hover:underline cursor-pointer"
            onClick={() => {
              handleScroll(aboutRef);
            }}
          >
            About
          </span> */}
          <span
            className="hover:border-b-2 cursor-pointer hover:pb-1 transition-all duration-300"
            onClick={() => {
              handleScroll(expRef);
            }}
          >
            Experience
          </span>

          <span
            className="hover:border-b-2 cursor-pointer hover:pb-1 transition-all duration-300"
            onClick={() => {
              handleScroll(skillRef);
            }}
          >
            Skills
          </span>
          <span
            className="hover:border-b-2 cursor-pointer hover:pb-1 transition-all duration-300"
            onClick={() => {
              handleScroll(projRef);
            }}
          >
            Projects
          </span>
          <span
            className="hover:border-b-2 cursor-pointer hover:pb-1 transition-all duration-300"
            onClick={() => {
              handleScroll(eduRef);
            }}
          >
            Education
          </span>
        </div>
        <div className="flex w-[46vw] sm:w-[13vw] items-center justify-evenly h-fit">
          <Link href="https://www.instagram.com/">
            <FaInstagram
              // size={30}
              className="text-amber-800 text-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <FaLinkedinIn
              // size={30}
              className="text-blue-500 text-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          {/* <CiFacebook size={30} /> */}
          {/* <FaPhoneAlt size={22} /> */}
          <Link href="mailto:himanshuhada17@gmail.com">
            <SiGmail
              // size={22}
              className="text-red-500 text-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          <button
            className="border-[1px] p-2 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
            onClick={handleToggle}
          >
            {toggleTheme ? <FiMoon /> : <LuSun />}
          </button>
        </div>
      </div>
      <div
        className={`pt-20 pb-28  w-full flex justify-center ${
          toggleTheme ? "black-background" : null
        }  transition-all duration-300`}
      >
        <div className="w-[90vw] sm:w-[60vw] space-y-12 ">
          {/* //First Section */}
          <div
            className="w-full sm:flex  sm:justify-between mt-7 fade-in-right"
            ref={aboutRef}
          >
            <div className="sm:w-[55%] space-y-5 ">
              <div className="w-full gap-5 flex sm:hidden">
                <Image
                  src={photo}
                  alt={""}
                  height={130}
                  width={130}
                  className="object-contain rounded-3xl h-fit"
                />
                <span className="text-5xl font-bold">
                  A little bit about me
                </span>
              </div>
              <span className="text-5xl font-bold sm:block hidden">
                A little bit about me
              </span>
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
            <div className="w-[45%]  hidden sm:flex justify-end h-full">
              <Image
                src={photo}
                alt={""}
                height={300}
                width={300}
                className="object-contain rounded-3xl h-fit"
              />
            </div>
          </div>
          {/* <div className="bg-gradient-to-t from-purple-100 to-gray-50 rounded-lg w-[30%] p-4 flex flex-col items-center justify-center">
            <span className="text-sm font-light">Download My Resume!</span>
            <button className="text-white bg-black rounded-2xl p-2">Download</button>
          </div> */}
          {/* //Second Section */}
          {/* <div className="fade-in-right">
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
              <FaFilePdf />
            </button>
          </div> */}
          {/* //Third Section */}
          <div className="w-full space-y-11 fade-in-right1" ref={expRef}>
            <div className="flex items-center w-full overflow-hidden">
              <div className="text-3xl sm:text-5xl font-bold">Experience</div>
              {/* <Divider className="ml-4 w-fit" /> */}
              <div
                className={`ml-4 w-fit h-[1px] mt-2 ${
                  toggleTheme ? "bg-gray-700" : "bg-gray-200"
                }  flex-grow`}
              ></div>
            </div>
            <div className="w-full flex gap-4">
              <Image
                src={tdclogo}
                alt=""
                height={75}
                width={75}
                className="rounded-lg"
              />
              <div className="">
                <div className="font-semibold">TDC Consultancy Pvt. Ltd.</div>
                <div className="font-light">1 yr</div>
                <div className="text-gray-500 font-normal">
                  Udaipur, Rajasthan, India • On-Site
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full items-center">
                <div className="flex flex-col items-center ml-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-[1px] h-20 bg-gray-300 my-3"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="ml-8 space-y-8">
                  <div>
                    <div className="font-semibold">
                      Software Developer Engineer
                    </div>
                    <div className="font-light">Full-time</div>
                    <div className="text-gray-500  font-light">
                      March 2024 - July 2024 • 5 mos
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Software Developer Intern
                    </div>
                    <div className="font-light">Internship</div>
                    <div className="text-gray-500 font-light">
                      Sep 2023 - Feb 2024 • 6 mos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth section */}
          <div className="w-full space-y-11 fade-in-right2" ref={skillRef}>
            <div className="flex items-center w-full overflow-hidden">
              <div className="text-3xl sm:text-5xl font-bold">Skills</div>
              {/* <Divider className="ml-4 w-fit" /> */}
              <div
                className={`ml-4 w-fit h-[1px] mt-2 ${
                  toggleTheme ? "bg-gray-700" : "bg-gray-200"
                }  flex-grow`}
              ></div>
            </div>
          </div>
          {/* Fifth Section */}
          <div className="w-full space-y-11 fade-in-right3" ref={projRef}>
            <div className="flex items-center w-full overflow-hidden">
              <div className="text-3xl sm:text-5xl font-bold">Projects</div>
              {/* <Divider className="ml-4 w-fit" /> */}
              {/* <div className="ml-4 w-fit h-[1px] mt-2 bg-gray-200 flex-grow"></div> */}
              <div
                className={`ml-4 w-fit h-[1px] mt-2 ${
                  toggleTheme ? "bg-gray-700" : "bg-gray-200"
                }  flex-grow`}
              ></div>
            </div>
          </div>
          {/* Sixth Section */}
          <div className="w-full space-y-11 fade-in-right3" ref={eduRef}>
            <div className="flex items-center w-full overflow-hidden">
              <div className="text-3xl sm:text-5xl font-bold">Education</div>
              {/* <Divider className="ml-4 w-fit" /> */}
              {/* <div className="ml-4 w-fit h-[1px] mt-2 bg-gray-200 flex-grow"></div> */}
              <div
                className={`ml-4 w-fit h-[1px] mt-2 ${
                  toggleTheme ? "bg-gray-700" : "bg-gray-200"
                }  flex-grow`}
              ></div>
            </div>
            <div className="space-y-8">
              <div
                className={`text-xl font-light border-l-8  ${
                  !toggleTheme
                    ? "bg-gradient-to-r from-gray-100 to-white border-gray-200"
                    : " border-gray-800"
                }  pl-3 w-fit`}
              >
                GRADUATION
              </div>
              <div className="w-full flex gap-4">
                <Image
                  src={techno}
                  alt=""
                  height={75}
                  width={75}
                  className="rounded-lg h-fit"
                />
                <div className="">
                  <div className="font-semibold">
                    Techno India NJR Institute of Technology, Udaipur
                  </div>
                  <div className="font-light">2020-2024 (Computer Science)</div>
                  <div className=" font-normal">
                    Aggregate - <span className=" font-medium">9.39 SGPA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div
                className={`text-xl font-light border-l-8  ${
                  !toggleTheme
                    ? "bg-gradient-to-r from-gray-100 to-white border-gray-200"
                    : " border-gray-800"
                }  pl-3 w-fit`}
              >
                SENIOR SECONDARY EDUCATION
              </div>
              <div className="w-full flex gap-4">
                <Image
                  src={mmps}
                  alt=""
                  height={75}
                  width={75}
                  className="rounded-lg h-fit"
                />
                <div className="">
                  <div className="font-semibold">
                    Maharana Mewar Public School, Udaipur
                  </div>
                  <div className="font-light">2019-2020 (PCM)</div>
                  <div className="font-light">CBSE</div>

                  <div className=" font-normal">
                    Grade - <span className="font-medium">90.2%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div
                className={`text-xl font-light border-l-8  ${
                  !toggleTheme
                    ? "bg-gradient-to-r from-gray-100 to-white border-gray-200"
                    : " border-gray-800"
                }  pl-3 w-fit`}
              >
                SECONDARY EDUCATION
              </div>
              <div className="w-full flex gap-4">
                <Image
                  src={centralAcademy}
                  alt=""
                  height={75}
                  width={75}
                  className="rounded-lg h-fit"
                />
                <div className="">
                  <div className="font-semibold">
                    Central Academy Sr. Sec. School, Udaipur
                  </div>
                  <div className="font-light">2017-2018</div>
                  <div className="font-light">CBSE</div>
                  <div className=" font-normal">
                    Grade - <span className="font-medium"> 83.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
