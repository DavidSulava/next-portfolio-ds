"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const publicPath = process.env.publicPath;
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Vue LPMotor CMS",
    desc: "Create a website with a quiz or an online store with a shopping cart and delivery options.",
    img: "/worck_examples/lp_motor.png",
    link: "https://lpmotor.ru/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Phone Customization",
    desc: "Design your perfect phone case with our intuitive editor. Express yourself with custom artwork, photos, or choose from our curated collection of designs.",
    img: "/worck_examples/phone_customisation_studio.png",
    link: "https://davidsulava.github.io/phone-customisation-studio/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React 18 Shadow generator",
    desc: "Box Shadow Generator for React with Tailwind CSS.",
    img: "/worck_examples/shadow_generator.png",
    link: "https://davidsulava.github.io/shadow-css/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-7xl text-center">
          <div>My worck examples</div>
          <span className="italic text-3xl">
            Scroll Down ⬇️
          </span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex rounded">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-40 md:w-96 md:h-64 lg:w-[700px] lg:h-[380px] xl:w-[650px] xl:h-[300px]">
                    <Image className="rounded" src={publicPath + item.img} alt="project image" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex" target='_blank'>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold rounded">Go to site</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-7xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='https://t.me/DavidSulava'
            target="_blank"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
