import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			text: "Linked In",
			disp: <FaLinkedin size={30}/>,
			href: "https://www.linkedin.com/in/samkit-samsukha",
			style: "rounded-tr-2xl",
			stylemob: "rounded-tl-2xl",
		},
		{
			id: 2,
			text: "GitHub",
			disp: <FaGithub size={30} />,
			href: "https://github.com/samkitsamsukha",
		},
		{
			id: 3,
			text: "Mail",
			disp: <HiOutlineMail size={30} />,
			href: "mailto:samkitsamsukha@gmail.com",
		},
		{
			id: 4,
			text: "Resume",
			disp: <BsFillPersonLinesFill size={30} />,
			href: "/resume.pdf",
			download: "true",
		},
		{
			id: 5,
			text: "Leetcode",
			disp: <SiLeetcode size={30} />,
			href: "https://leetcode.com/u/samkitsamsukha/",
		},
		{
			id: 6,
			text: "Codeforces",
			disp: <SiCodeforces size={30} />,
			href: "https://leetcode.com/u/samkitsamsukha/",
			style: "rounded-br-2xl",
			stylemob: "rounded-tr-2xl",
		},
	];

	return (
		<>
			<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
				<ul>
					{links.map(({ id, text, disp, href, style, download }) => (
						<li
							key={id}
							className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-105px] hover:rounded-2xl duration-300 hover:ml-[-10px] ${style}`}
						>
							<a
								href={href}
								className="flex justify-between items-center w-full text-white"
								target="_blank"
								download={download}
								rel="noreferrer"
							>
								{text} {disp}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="flex justify-center items-center">
			<div className="lg:hidden flex flex-row bottom-0 fixed">
					{links.map(({ id, disp, href, stylemob, download }) => (
						<li
							key={id}
							className={`flex justify-between items-center p-2 bg-gray-700 hover:scale-125 duration-300 ${stylemob}`}
						>
							<a
								href={href}
								className="flex justify-between items-center w-full text-white"
								target="_blank"
								download={download}
								rel="noreferrer"
							>
								{disp}
							</a>
						</li>
					))}
			</div>
			</div>
			
		</>
	);
};

export default SocialLinks;
