// https://leetcard.jacoblin.cool/samkitsamsukha?theme=dark&font=Belleza&ext=heatmap
import React from "react";
import { motion } from "framer-motion";

const CodingProfile = (props) => {
	return (
		<div
			className={`bg-gradient-to-b ${
				props.mode === "dark"
					? "from-gray-800 to-black text-white"
					: "from-gray-300 to-white text-gray-900"
			} w-full h-screen p-4 md:hidden`}
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
				<motion.div
					className="pb-8"
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
						Coding Profiles
					</p>
					<p className="text-xl py-6">
						Have a look at my coding profiles on various online websites like
						LeetCode, Codeforces and so on.
					</p>
				</motion.div>
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:space-x-4 space-y-4 justify-center"
                >
                    <img src={`https://leetcard.jacoblin.cool/samkitsamsukha?theme=${props.mode==='dark'?'dark':'light'}&font=Belleza&ext=contest`} width='400px' className="h-fit" alt="" />
                    <img src={`https://github-readme-stats.vercel.app/api?username=samkitsamsukha&show_icons=true&hide_border=true&theme=${props.mode==="dark"?'dark':'light'}`} width='400px' alt="" />
                </motion.div>
			</div>
		</div>
	);
};

export default CodingProfile;
