import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import nodejs from "../assets/nodejs.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import typescript from "../assets/typescript.png";
import next from "../assets/nextjs.png";
import nextjsdm from "../assets/nextjsdm.png";
import express from "../assets/express.png";
import expressdm from "../assets/expressdm.png";
import githublm from "../assets/githublm.png";
import mongodb from "../assets/mongodb.png";
import { motion } from "framer-motion";

const Skills = (props) => {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: `shadow-orange-500 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: `shadow-blue-500 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 3,
			src: javascript,
			title: "JavaScript",
			style: `shadow-yellow-500 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 4,
			src: reactImage,
			title: "React",
			style: `shadow-blue-600 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 5,
			src: nodejs,
			title: "Node JS",
			style: `shadow-green-600 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 6,
			src: tailwind,
			title: "Tailwind CSS",
			style: `shadow-sky-500 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 7,
			src: bootstrap,
			title: "Bootstrap",
			style: `shadow-indigo-600 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 8,
			src: cpp,
			title: "C++",
			style: `shadow-blue-500 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 9,
			src: java,
			title: "Java",
			style: `shadow-blue-900 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 10,
			src: c,
			title: "C",
			style: `shadow-indigo-900 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 11,
			src: props.mode === "dark" ? github : githublm,
			title: "GitHub",
			style:
				props.mode === "dark"
					? "shadow-gray-700 bg-black"
					: "bg-white shadow-gray-800",
		},
		{
			id: 12,
			src: git,
			title: "Git",
			style: `shadow-orange-800 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 13,
			src: typescript,
			title: "TypeScript",
			style: `shadow-blue-700 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 14,
			src: props.mode === "dark" ? nextjsdm : next,
			title: "Next Js",
			style: `shadow-gray-400 ${
				props.mode === "dark" ? "bg-black" : "bg-white"
			}`,
		},
		{
			id: 15,
			src: props.mode === "dark" ? expressdm : express,
			title: "Express Js",
			style:
				props.mode === "dark"
					? "shadow-gray-700 bg-black"
					: "shadow-black bg-white",
		},
		{
			id: 16,
			src: mongodb,
			title: "MongoDB",
			style:
				props.mode === "dark"
					? "shadow-green-500 bg-black"
					: "shadow-green-500 bg-white",
		},
	];

	return (
		<div
			name="skills"
			className={`bg-gradient-to-b ${
				props.mode === "dark"
					? " from-black to-gray-800 md:from-gray-800 md:to-black text-white"
					: " from-white to-gray-300 md:from-gray-300 md:to-white text-gray-900"
			} w-full h-screen`}
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
				<motion.div
					whileInView={{ x: 0, opacity: 1 }}
					initial={{ x: -100, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p
						className={`text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r bg-clip-text tracking-tight text-transparent ${
							props.mode === "dark"
								? "from-blue-300 to-pink-300 via-purple-300"
								: "from-blue-600 to-pink-600 via-purple-600"
						}`}
					>
						Skills
					</p>
					<p className="text-xl py-6">
						These are the technologies I've worked on
					</p>
				</motion.div>
				<div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<motion.div
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: 100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							key={id}
							className={`shadow-md hover:scale-105 duration-500 flex py-2 rounded-full ${style}`}
						>
							<motion.img
								whileInView={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0, opacity: 0 }}
								transition={{ duration: 1 }}
								src={src}
								alt=""
								className="w-12 sm:w-20 mx-auto"
							/>
							{/* <p className="mt-4">{title}</p> */}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
