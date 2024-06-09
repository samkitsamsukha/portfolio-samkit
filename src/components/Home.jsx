import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = (props) => {
	return (
		<div
			name="home"
			className={`h-screen w-full ${
				props.mode === "dark"
					? "bg-gradient-to-b from-black via-black to-gray-800"
					: "bg-gradient-to-b from-white to-gray-300"
			}`}
		>
			<div className="w-[80vw] mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<motion.div 
					initial={{x: -100, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.5, delay: 0}}
					className="flex flex-col justify-center"
				>
					<h2
						className={`text-4xl sm:text-7xl font-bold ${
							props.mode === "dark" ? "text-white" : "text-gray-900"
						}`}
					>
						I'm a{" "}
						<span
							className={`bg-gradient-to-r bg-clip-text tracking-tight text-transparent ${props.mode === "dark" ?  "from-blue-300 to-purple-400 via-pink-300" : "from-blue-600 to-purple-600 via-pink-600"
							}`}
						>
							Full Stack
						</span>{" "}
						Developer
					</h2>
					<p
						className={`${
							props.mode === "dark" ? "text-gray-500" : "text-gray-800"
						} py-4 max-w-md`}
					>
						I have freshly started building and designing websites. Currently, I
						am using the React framework along with Tailwind CSS and I plan to
						further dive deep into Express and MongoDB to have a strong grip on
						my backend skills.
					</p>

					<div>
						<Link
							to="portfolio"
							smooth
							duration={800}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div 
					className="mt-14 md: p-0"
					initial={{x: 100, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.5, delay: 0}}
				>
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-full mx-auto w-3/4 md:w-5/6 shadow-purple-500 shadow-md"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
