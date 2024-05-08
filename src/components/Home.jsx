import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center">
					<h2 className="text-4xl sm:text-7xl font-bold text-white shadow">
						I'm a <span className="text-blue-200">Full Stack</span> Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I have freshly started building and designing websites. Currently, I
						am using the React framework along with Tailwind CSS and I plan
						to further dive deep into Express and MongoDB to have a strong grip on my backend skills.
					</p>

					<div>
						<Link to="portfolio" smooth duration={800} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
				<div className="mt-14 md: p-0">
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-full mx-auto w-3/4 md:w-5/6 shadow-purple-500 shadow-md"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;