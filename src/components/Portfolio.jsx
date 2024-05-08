import React from "react";
import codehelp from "../assets/portfolio/codehelp.png";
import textutils from "../assets/portfolio/textutils.png";
import dailydispatch from "../assets/portfolio/dailydispatch.png";

const Portfolio = ({mode}) => {
	const portfolios = [
		{
			id: 1,
			src: codehelp,
			title: "</> Codehelp",
			desc: "A website offering various coding tutorials in the form of documentation along with features like to-do list, note taking and pomodoro timer.",
			code: "https://github.com/samkitsamsukha/CodeHelp",
			demo: "",
			tech: ['HTML', 'CSS', 'JavaScript', 'PrismJS'],
		},
		{
			id: 2,
			src: textutils,
			title: "Text Utils",
			desc: "Text utility application to perform operations like to-upper/lower, copy, speak, remove space, count word, reading time and preview input text.",
			code : "https://github.com/samkitsamsukha/text-utils",
			demo: ""
		},
		{
			id: 3,
			src: dailydispatch,
			title: "Daily Dispatch",
			desc: "A news website which renders latest news from an api and displays it category wise in card format using the concept of react component reusability.",
			code: "https://github.com/samkitsamsukha/daily-dispatch",
			demo: ""
		},
	];

	return (
		<div
			name="portfolio"
			className={`pt-[70px] ${mode==='dark'?'bg-gradient-to-b from-black to-gray-800 text-white':'bg-gradient-to-b from-white to-gray-400 text-gray-900'} w-full md:h-screen `}
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="text-xl py-6">Check out some of my work over here!</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, desc, title, code, demo, tech }) => (
						<div key={id} className={`shadow-md rounded-lg shadow-gray-600 ${mode==='dark'?'bg-gradient-to-t from-gray-950 to-gray-800 via-gray-900':'bg-gradient-to-t from-gray-400 to-gray-200 via-gray-300'}`}>
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105 w-auto h-auto"
							/>
							<div className="flex flex-col items-center">
								<p className={`text-xl ${mode==='dark'?'text-blue-300':'text-blue-900'} pt-2 font-semibold hover:scale-105 duration-300`}>{title}</p>
								<p className="p-2 pb-0 text-[14px] text-center text-ellipsis">{desc}</p>
								<div className="flex flex-row justify-center items-center">
									<a href={demo} className={`w-1/2 p-x-2 m-2 duration-200 hover:scale-105 ${mode==='dark'?'hover:text-blue-300':'hover:text-blue-800'}`}>
										Demo
									</a>
									<a href={code} target="__blank" link="noreferrer" className={`w-1/2 p-x-2 m-2 duration-200 hover:scale-105 ${mode==='dark'?'hover:text-blue-300':'hover:text-blue-800'}`}>
										Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
