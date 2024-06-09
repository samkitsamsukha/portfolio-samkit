import React from "react";
import codehelp from "../assets/portfolio/codehelp.png";
import textutils from "../assets/portfolio/textutils.png";
import dailydispatch from "../assets/portfolio/dailydispatch.png";
import expense from "../assets/portfolio/expense.png";
import rfiddirect from "../assets/portfolio/rfiddirect.png";
import { motion } from "framer-motion";

const Portfolio = ({ mode }) => {
	const portfolios = [
		{
			id: 1,
			src: rfiddirect,
			title: "RFID-Direct (E-Commerce)",
			desc: "Full stack e commerce website selling various smart appliances which have been built using RFID technology to foster security and make the system robust.",
			code: "https://github.com/samkitsamsukha/rfid-direct-ecom",
			demo: "",
			tech: ["NextJS", "Tailwind", "JavaScript", "MongoDB"],
		},
		{
			id: 2,
			src: codehelp,
			title: "</> Codehelp",
			desc: "A website offering various coding tutorials in the form of documentation along with features like to-do list, note taking and pomodoro timer.",
			code: "https://github.com/samkitsamsukha/CodeHelp",
			demo: "",
			tech: ["HTML", "CSS", "JavaScript", "PrismJS"],
		},
		{
			id: 3,
			src: textutils,
			title: "Text Utils",
			desc: "Text utility application to perform operations like to-upper/lower, copy, speak, remove space, count word, reading time and preview input text.",
			code: "https://github.com/samkitsamsukha/text-utils",
			demo: "",
			tech: ["ReactJS", "JavaScript", "TailwindCSS"],
		},
		{
			id: 4,
			src: dailydispatch,
			title: "Daily Dispatch",
			desc: "A news website which renders latest news from an api and displays it category wise in card format using the concept of react component reusability.",
			code: "https://github.com/samkitsamsukha/daily-dispatch",
			demo: "",
			tech: ["ReactJS", "TailwindCSS", "NewsApi"],
		},
		{
			id: 5,
			src: expense,
			title: "Expense Tracker",
			desc: "A simple website which displays expense and income details in a crude manner. Basic use of buttons and append functions with local storage enabled.",
			code: "https://github.com/samkitsamsukha/expense-tracker",
			demo: "",
			tech: ["NextJS", "TailwindCSS", "ReactJS"],
		},
	];

	return (
		<div
			name="portfolio"
			className={`pt-[70px] ${
				mode === "dark"
					? "bg-gradient-to-b from-black to-gray-800 text-white"
					: "bg-gradient-to-b from-white to-gray-300 text-gray-900"
			} w-full md:h-screen `}
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<motion.div
					className="pb-8"
					whileInView={{ x: 0, opacity: 1 }}
					initial={{ x: -100, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className={`text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r bg-clip-text tracking-tight text-transparent ${mode === "dark" ?  "from-blue-300 to-pink-300 via-purple-300" : "from-blue-600 to-pink-600 via-purple-600"}`}>
						Portfolio
					</p>
					<p className="text-xl py-6">Check out some of my work over here!</p>
				</motion.div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, desc, title, code, demo, tech = [] }) => (
						<motion.div
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: 100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							key={id}
							className={`shadow-md rounded-lg shadow-gray-600 ${
								mode === "dark"
									? "bg-gradient-to-t from-gray-950 to-gray-800 via-gray-900"
									: "bg-gradient-to-t from-gray-400 to-gray-200 via-gray-300"
							}`}
						>
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105 w-auto h-auto"
							/>
							<div className="flex flex-col items-center">
								<p
									className={`text-xl ${
										mode === "dark" ? "text-blue-300" : "text-blue-900"
									} pt-2 font-semibold hover:scale-105 duration-300`}
								>
									{title}
								</p>
								<div className="flex flex-wrap justify-center space-x-2 my-2">
									{tech.map((item, index) => (
										<span
											key={index}
											className={`px-2 py-1 ${
												mode === "dark" ? "bg-gray-700" : "bg-gray-100"
											} rounded-xl text-[12px]`}
										>
											{item}
										</span>
									))}
								</div>
								<p className="p-2 pb-0 text-[14px] text-center text-ellipsis">
									{desc}
								</p>
								<div className=" mt-2 flex flex-row justify-center items-center w-full border-t-[0.5px]">
									<a
										href={demo}
										className={`w-1/2 px-2 border-r-[0.5px] m-2 text-center duration-200 hover:scale-105 ${
											mode === "dark"
												? "hover:text-blue-300"
												: "hover:text-blue-800"
										}`}
									>
										Demo
									</a>

									<a
										href={code}
										target="__blank"
										rel="noreferrer"
										className={`w-1/2 px-2  m-2 text-center duration-200 hover:scale-105 ${
											mode === "dark"
												? "hover:text-blue-300"
												: "hover:text-blue-800"
										}`}
									>
										Code
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
