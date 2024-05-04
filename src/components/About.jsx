import React from "react";
import { FaSchool } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { MdSchool } from "react-icons/md";

const About = () => {
	const data = [
		{
			id: 1,
      logo : <FaSchool size={25}/>,
			institution: "Sri Sri Academy",
			date: "2010-2021",
			grade: "ICSE (X) - 97.6%",
			course:
				"Science with Physics, Chemistry, Maths, Biology and Computer Science",
		},
		{
			id: 2,
      logo: <RiSchoolFill size={25} />,
			institution: "Sri Sri Academy",
			date: "2021-2023",
			grade: "ISC (XII) - 94.25%",
			course:
				"Science with Physics, Chemistry, Maths and Computer Applications",
		},
		{
			id: 3,
      logo: <MdSchool size={25}/>,
			institution: "R.V. College of Engineering",
			date: "2023-2027(expected)",
			grade: "CGPA - 9.6(upto first semester)",
			course: "Bachelors of Engineering in Information Science",
		},
	];

	return (
		<div
			name="about"
			className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-ful h-full">
				<div className="pb-2">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-10">
					I am Samkit Samsukha, a passionate <span className="text-blue-300 font-semibold">Full Stack Web Developer</span>. I am
					currently stationed at Bengaluru and looking for web development
					projects and activities. I have been working on the <span className="text-blue-300 font-semibold">MERN stack</span> and am
					flexible enough to try out the other dev tools in order to develop
					skills.
				</p>
				<br />
				<div className="mb-4">
					<p className="text-2xl font-bold inline border-b-2 border-gray-500">
						Education Details
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-8 items-center w-auto">
					{data.map((data) => (
						<div key={data.id} className="school bg-gradient-to-br from-gray-700 to-gray-700 via-gray-800 p-2 h-full w-full md:w-1/3 rounded-lg">
              <div className="flex justify-center items-center mb-1">{data.logo}</div>
							<h1 className="text-xl text-blue-200 mb-1 font-semibold text-center ">
							{data.institution}
							</h1>
							<p className="text-gray-300 ">{data.date}</p>
							<p className="font-bold">{data.grade}</p>
							<p className="mt-1">{data.course}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
