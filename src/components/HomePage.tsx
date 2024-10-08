import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import newImage from "../../public/images/IMG_9764 2.jpg";
import { LuSun } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import typeorm from "../../public/images/orm.png";
import graphql from "../../public/images/graphql.png";
import react from "../../public/images/react.png";
import github from "../../public/images/github.png";
import figma from "../../public/images/figma.png";
import docu from "../../public/images/docu.png";
import ts from "../../public/images/ts.png";
import node from "../../public/images/nodejs.jpeg";
import js from "../../public/images/js.png";
import antd from "../../public/images/antd.png";
import tail from "../../public/images/tail.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";
import { RiMenuFold4Fill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import photo from "../../public/images/IMG_1117 2.jpg";
import { FcAbout } from "react-icons/fc";
import { FaFilePdf } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import { Divider } from "antd";
import tdclogo from "../../public/images/the_developer_company_logo.jpg";
import centralAcademy from "../../public/images/central_academy.png";
import mmps from "../../public/images/mmps.png";
import techno from "../../public/images/techno.jpg";
import {
  Box,
  Menu,
  MenuItem,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tooltip,
} from "@mui/material";

const HomePage = () => {
  const educationData = [
    {
      level: "GRADUATION",
      image: techno,
      name: "Techno India NJR Institute of Technology, Udaipur",
      year: "2020-2024 (Computer Science)",
      board: "RTU",
      grade: "Aggregate - 9.39 SGPA",
    },
    {
      level: "SENIOR SECONDARY EDUCATION",
      image: mmps,
      name: "Maharana Mewar Public School, Udaipur",
      year: "2019-2020 (PCM)",
      board: "CBSE",
      grade: "Grade - 90.2%",
    },
    {
      level: "SECONDARY EDUCATION",
      image: centralAcademy,
      name: "Central Academy Sr. Sec. School, Udaipur",
      year: "2017-2018",
      board: "CBSE",
      grade: "Grade - 83.4%",
    },
  ];

  const contactUsData = [
    {
      link: "https://www.instagram.com/himanshu.hada17/?next=%2F",
      icon: (
        <FaInstagram className="text-md sm:text-2xl transition-all duration-300 hover:scale-110 cursor-pointer" />
      ),
      // size: 30,
    },
    {
      link: "https://www.linkedin.com/feed/",
      icon: (
        <FaLinkedinIn className="text-md sm:text-2xl transition-all duration-300 hover:scale-110 cursor-pointer" />
      ),
      // size: 30,
    },
    {
      link: "mailto:himanshuhada17@gmail.com",
      icon: (
        <SiGmail className="text-md sm:text-2xl transition-all duration-300 hover:scale-110 cursor-pointer" />
      ),
      // size: 30,
    },
    {
      link: "https://github.com/himanshuhada17",
      icon: (
        <FaGithub className="text-md sm:text-2xl transition-all duration-300 hover:scale-110 cursor-pointer" />
      ),
      // size: 30,
    },
    {
      link: "tel:9587555773",
      icon: (
        <FaPhone className="text-md sm:text-2xl transition-all duration-300 hover:scale-110 cursor-pointer" />
      ),
      // size: 30,
    },
  ];

  const projData = [
    {
      topic: "Hostel Management System",
      description:
        "Developed a comprehensive hostel management system admin panel to efficiently manage various domains within a hostel environment",
      styleDarkTheme: "from-blue-700/80 via-blue-300/80 to-slate-500/80",
      styleLightTheme: "from-blue-600/50 via-purple-500/50 to-slate-500/50",
    },
    {
      topic: "MotorMania a Figma Design",
      description:
        " Motor Mania(UI/UX Design) - Platform for automobile industry to purchase/book a service, rate and review for the newly launched vehicles.",
      styleDarkTheme: "from-green-600/80 via-teal-600-500/80 to-slate-500/80",
      styleLightTheme: "from-green-600/50 via-teal-600-500/50 to-slate-500/50",
    },
    {
      topic: "Database Design for Travel Management",
      description:
        "Designed a comprehensive database for a travel management system, analyzing various entities and establishing  relationships between them to ensure efficient data management.",
      styleDarkTheme: "from-red-600/80 via-purple-500/80 to-slate-500/80",
      styleLightTheme: "from-red-600/50 via-purple-500/50 to-slate-500/50",
    },
    {
      topic: "Database Design for Travel Management",
      description:
        "Designed a comprehensive database for a travel management system, analyzing various entities and establishing relationships between them to ensure efficient data management.",
      styleDarkTheme: "from-blue-600/80 via-yellow-500/80 to-slate-500/80",
      styleLightTheme: "from-blue-600/50 via-yellow-500/50 to-slate-500/50",
    },
  ];
  const frontEnd = [
    {
      image: react,
      skill: "React",
    },
    {
      image: react,
      skill: "React Native",
    },
  ];
  const backEnd = [
    {
      image: node,
      skill: "Node.Js",
    },
  ];
  const UI = [
    {
      image: tail,
      skill: "Tailwind CSS",
    },
    {
      image: antd,
      skill: "Ant Design",
    },
    {
      image: figma,
      skill: "Figma",
    },
  ];
  const languages = [
    {
      image: ts,
      skill: "Typescript",
    },
    {
      image: js,
      skill: "Javascript",
    },
  ];

  const other = [
    {
      image: graphql,
      skill: "Garphql",
    },
    {
      image: typeorm,
      skill: "Typeorm",
    },
    {
      image: docu,
      skill: "Docusaurus",
    },
    {
      image: github,
      skill: "Github",
    },
  ];
  const expRef = useRef(null);
  const aboutRef = useRef(null);
  const projRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const [toggleTheme, setToggleTheme] = useState(false);
  // const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = () => {
    setToggleTheme((prev) => !prev);
  };

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const actions = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/himanshu.hada17/?next=%2F",
    },
    {
      icon: <FaLinkedinIn />,
      name: "Linkedin",
      link: "https://www.linkedin.com/feed/",
    },
    {
      icon: <SiGmail />,
      name: "Mail",
      link: "mailto:himanshuhada17@gmail.com",
    },
    {
      icon: <FaGithub />,
      name: "Github",
      link: "https://github.com/himanshuhada17",
    },
    { icon: <FaPhone />, name: "Phone", link: "tel:9587555773" },
  ];

  const handleNavigation = (link: string) => {
    window.open(link);
  };

  return (
    <>
      {/* navbar */}
      <div
        className={`w-full flex items-center justify-between z-[9999]  ${
          toggleTheme ? "bg-black/40 black-theme" : "bg-white/40"
        }  backdrop-blur-md  px-4 h-20 shadow-md fixed top-0`}
      >
        <span className="text-xl font-thin flex items-center">
          <div className="flex items-center space-x-4">
            <RiMenuFold4Fill
              onClick={handleClick}
              size={28}
              className={` sm:hidden rounded-md border-[1px] transition-all duration-300 p-1 ${
                toggleTheme
                  ? "border-gray-600 hover:bg-purple-500/35"
                  : "hover:bg-purple-500/25"
              }`}
            />
            <Menu
              className="z-[9999999]"
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: toggleTheme ? "#333" : "#fff", // Menu background color
                  color: toggleTheme ? "#fff" : "#000", // Menu text color
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleScroll(aboutRef);
                  handleClose();
                }}
                className="font-thin"
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleScroll(expRef);
                  handleClose();
                }}
                className="font-thin"
              >
                Experience
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleScroll(skillRef);
                  handleClose();
                }}
                className="font-thin"
              >
                Skills
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleScroll(projRef);
                  handleClose();
                }}
                className="font-thin"
              >
                Projects
              </MenuItem>
              <MenuItem
                className="font-thin"
                onClick={() => {
                  handleScroll(eduRef);
                  handleClose();
                }}
              >
                Education
              </MenuItem>
            </Menu>
            <span className="font-normal">Himanshu Hada</span>{" "}
          </div>
          <span className="sm:block hidden"> - Frontend Developer</span>
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
        <div className="flex w-[19vw] sm:w-[7vw] items-center justify-evenly h-fit">
          {/* <Link href="https://www.instagram.com/">
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
          </Link> */}
          {/* <CiFacebook size={30} /> */}
          {/* <FaPhoneAlt size={22} /> */}
          {/* <Link href="mailto:himanshuhada17@gmail.com">
            <SiGmail
              // size={22}
              className="text-red-500 text-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link> */}
          {/* <Tooltip title="Change Theme" className="z-"> */}
          <button
            className={`border-[1px] ${
              toggleTheme ? "border-gray-600" : ""
            } p-2 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all duration-300`}
            onClick={handleToggle}
          >
            {toggleTheme ? <FiMoon /> : <LuSun />}
          </button>
          {/* </Tooltip> */}
          <Box sx={{ height: 37, transform: "translateZ(0px)", flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              // sx={{ position: "absolute", bottom: 92, right: 0 }}
              icon={<SpeedDialIcon />}
              direction="down"
              sx={{
                "& .MuiFab-primary": {
                  width: 36, // Adjust the width of the SpeedDial
                  height: 36, // Adjust the height of the SpeedDial
                  // backgroundColor: "#6b5ede", // Adjust the background color of the actions
                  backgroundColor: "#6b5ede", // Adjust the background color of the actions
                  "&:hover": {
                    backgroundColor: "#6b5ede", // Change this to the color you want on hover
                  },
                  "&:active": {
                    backgroundColor: "#6b5ede", // Change this to the color you want on active
                  },
                  "&:focus": {
                    backgroundColor: "#6b5ede", // Ensure the color stays the same when focused
                  },
                },
              }}
              className="relative right-0 sm:right-0"
            >
              {actions.map((action) => (
                // <Link href={action.link}>
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => {
                    handleNavigation(action.link);
                  }}
                />
                // </Link>
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
      {/* content */}
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
                <span className="text-[30px] w-[39%] font-bold">
                  A little bit about me
                </span>
              </div>
              <span className="text-5xl font-bold sm:block hidden">
                A little bit about me
              </span>
              <p className="leading-relaxed">
                As a Frontend Developer for MedicalEshop, I developed and
                maintained the ecommerce site's frontend using{" "}
                <span className="font-bold text-purple-500">Tailwind CSS</span>{" "}
                for responsive and modern UI components,{" "}
                <span className="font-bold text-purple-500">TypeScript</span>{" "}
                for type-safe coding, and{" "}
                <span className="font-bold text-purple-500">React.js</span> for
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
          <div className="fade-in-right">
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
          </div>
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
                className="rounded-lg object-contain"
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
            {/* FrontEnd */}
            <div>
              <div className="text-xl font-light flex items-center">
                Front-End
                <IoIosArrowForward className="text-sm ml-2" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-x-6 gap-x-3">
                {frontEnd?.map((i) => (
                  <div>
                    <Image
                      src={i?.image}
                      height={42}
                      width={42}
                      alt=""
                      className=" rounded-full relative top-5 right-1 sm:right-4   border-[1px]"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className={` sm:p-3 p-2 rounded-2xl border-[1px] ${
                        toggleTheme ? "border-gray-600" : ""
                      }  text-center font-normal text-lg`}
                    >
                      {i?.skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* backend */}
            <div>
              <div className="text-xl font-light flex items-center">
                Back-End
                <IoIosArrowForward className="text-sm ml-2" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-x-6 gap-x-3">
                {backEnd?.map((i) => (
                  <div>
                    <Image
                      src={i?.image}
                      height={42}
                      width={42}
                      alt=""
                      className=" rounded-full relative top-5 right-1 sm:right-4   border-[1px]"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className={` sm:p-3 p-2 rounded-2xl border-[1px] ${
                        toggleTheme ? "border-gray-600" : ""
                      }  text-center font-normal text-lg`}
                    >
                      {" "}
                      {i?.skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* UI */}
            <div>
              <div className="text-xl font-light flex items-center">
                UI
                <IoIosArrowForward className="text-sm ml-2" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-x-6 gap-x-3">
                {UI?.map((i) => (
                  <div>
                    <Image
                      src={i?.image}
                      height={42}
                      width={42}
                      alt=""
                      className=" rounded-full relative top-5 right-1 sm:right-4   border-[1px]"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className={` sm:p-3 p-2 rounded-2xl border-[1px] ${
                        toggleTheme ? "border-gray-600" : ""
                      }  text-center font-normal text-lg`}
                    >
                      {" "}
                      {i?.skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* languages */}
            <div>
              <div className="text-xl font-light flex items-center">
                Languages
                <IoIosArrowForward className="text-sm ml-2" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-x-6 gap-x-3">
                {languages?.map((i) => (
                  <div>
                    <Image
                      src={i?.image}
                      height={42}
                      width={42}
                      alt=""
                      className=" rounded-full relative top-5 right-1 sm:right-4   border-[1px]"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className={` sm:p-3 p-2 rounded-2xl border-[1px] ${
                        toggleTheme ? "border-gray-600" : ""
                      }  text-center font-normal text-lg`}
                    >
                      {" "}
                      {i?.skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* other */}
            <div>
              <div className="text-xl font-light flex items-center">
                Other
                <IoIosArrowForward className="text-sm ml-2" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-x-6 gap-x-3">
                {other?.map((i) => (
                  <div>
                    <Image
                      src={i?.image}
                      height={42}
                      width={42}
                      alt=""
                      className=" rounded-full relative top-5 right-1 sm:right-4  border-[1px]"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className={` sm:p-3 p-2 rounded-2xl border-[1px] ${
                        toggleTheme ? "border-gray-600" : ""
                      }  text-center font-normal text-lg`}
                    >
                      {" "}
                      {i?.skill}
                    </div>
                  </div>
                ))}
              </div>
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
            <div className="sm:grid grid-cols-2 gap-3  hidden">
              {projData.map((i) => (
                <div className="flex justify-center">
                  <div
                    className={`h-[30vh] bg-gradient-to-tl ${
                      toggleTheme ? i.styleDarkTheme : i?.styleLightTheme
                    }  p-4 space-y-3 rounded-lg w-fit`}
                  >
                    <p className="text-start">{i?.topic}</p>
                    <p className="text-start text-xs">{i?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Carousel className="sm:hidden">
              {projData.map((i) => (
                <div className="flex justify-center">
                  <div
                    className={`h-[30vh] bg-gradient-to-tl ${
                      toggleTheme ? i.styleDarkTheme : i?.styleLightTheme
                    }  p-4 space-y-3 rounded-lg w-[99%]`}
                  >
                    <p className="text-start">{i?.topic}</p>
                    <p className="text-start text-xs">{i?.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
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
            {educationData?.map((i) => (
              <div className="space-y-8">
                <div
                  className={`text-xl font-light border-l-8  ${
                    !toggleTheme
                      ? "bg-gradient-to-r from-gray-100 to-white border-gray-200"
                      : " border-gray-800"
                  }  pl-3 w-fit`}
                >
                  {i?.level}
                </div>
                <div className="w-full flex gap-4">
                  <Image
                    src={i?.image}
                    alt=""
                    height={75}
                    width={75}
                    className="rounded-lg h-fit"
                  />
                  <div className="">
                    <div className="font-semibold">{i?.name}</div>
                    <div className="font-light">{i?.year}</div>
                    <div className="font-light">{i?.board}</div>

                    <div className=" font-medium">{i?.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div
        className={`w-full  ${
          toggleTheme ? "bg-slate-900 text-white" : "bg-gray-100"
        } space-y-4 sm:space-y-5 p-4 sm:p-7`}
      >
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-7  justify-center">
            {contactUsData?.map((i) => (
              <Link
                href={i?.link}
                className={`border-[1px] ${
                  toggleTheme ? "border-gray-700" : ""
                } rounded-2xl p-3`}
              >
                {/* <FaInstagram
                  // size={30}
                  className="text-amber-800 text-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
                /> */}
                {i?.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <div
            className={` ${
              toggleTheme ? "bg-gray-800" : "bg-gray-200"
            } h-[1px] w-[70vw]`}
          ></div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <div className="text-sm font-thin">
            Designed By 👾 Himanshu @ All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
