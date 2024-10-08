import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Navbar = (props) => {
	const [nav, setNav] = useState();

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "skills",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<div
			className={`flex justify-between items-center w-screen z-10 h-20 fixed ${
				props.mode === "dark" ? "text-white bg-black" : "text-black bg-white"
			} px-4`}
		>
			<div>
				<h1
					className={`font-signature ml-2 text-3xl sm:text-5xl  ${
						props.mode === "dark" ? "text-gray-300" : "text-gray-600"
					}`}
				>
					samkit samsukha
				</h1>
			</div>

			<ul className="hidden md:flex md:justify-center md:items-center">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className={`px-4 cursor-pointer capitalize font-medium ${
							props.mode === "dark" ? "text-gray-300" : "text-gray-600"
						} hover:scale-105 hover:text-blue-300 duration-200`}
					>
						<Link to={link} smooth duration={800}>
							{link}
						</Link>
					</li>
				))}
				<li className="mx-2">
					<label
						className="hover:cursor-pointer"
						onClick={props.toggleMode}
						htmlFor="toggleMode"
					>
						{props.mode === "light" ? (
							<FaMoon color="#36454F" />
						) : (
							<IoSunny size={20} color="#FFE134" />
						)}
					</label>
				</li>
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul
					className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  ${
						props.mode === "dark"
							? " from-black to-gray-800 md:from-gray-800 md:to-black text-white"
							: " from-white to-gray-300 md:from-gray-300 md:to-white text-gray-900"
					}`}
				>
					<li className="mx-2 my-8">
						<label
							className="hover:cursor-pointer"
							onClick={props.toggleMode}
							htmlFor="toggleMode"
						>
							{props.mode === "light" ? (
								<FaMoon size={30} color="#36454F" />
							) : (
								<IoSunny size={30} color="#FFE134" />
							)}
						</label>
					</li>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-2 text-3xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={800}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
