import React from "react";
import { motion } from "framer-motion";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(props) {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "8b570b09-3b28-4ef0-b14d-6d65c4df4b95");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
		
	};

	const notify = ()  => {
		toast.success('Submitted Successfully!', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Slide,
			});
	}

	return (
		<div
			name="contact"
			className={`bg-gradient-to-b ${
				props.mode === "dark"
					? "from-gray-800 to-black text-white"
					: "from-gray-300 to-white text-gray-900"
			} w-full h-screen p-4`}
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
				<motion.div
					className="pb-8"
					whileInView={{ x: 0, opacity: 1 }}
					initial={{ x: -100, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className={`text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r bg-clip-text tracking-tight text-transparent ${props.mode === "dark" ?  "from-blue-300 to-pink-300 via-purple-300" : "from-blue-600 to-pink-600 via-purple-600"}`}>
						Contact
					</p>
					<p className="text-xl py-6">
						Submit the form below to get in touch with me.
					</p>
				</motion.div>

				<div className="flex justify-center items-center">
					<form onSubmit={onSubmit} className="flex flex-col w-full md:w-1/2">
						<motion.input
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent bg-white border border-gray-400 rounded-md focus:outline-none"
							required
						/>
						<motion.input
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							type="email"
							name="email"
							placeholder="Enter your email"
							className="my-4 p-2 bg-transparent border bg-white border-gray-400 rounded-md focus:outline-none"
							required
						/>
						<motion.textarea
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							name="message"
							rows="10"
							placeholder="Enter your message"
							className="p-2 bg-transparent border bg-white border-gray-400 rounded-md  focus:outline-none"
							required
						></motion.textarea>

						<motion.button
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							type="submit"
							onClick={notify}
							className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-auto flex items-center rounded-md hover:scale-105 duration-300 mt-4`}
						>
							Let's talk
						</motion.button>
					</form>
				</div>
				<span className="text-center mt-4 p-2 text-green-300 font-bold">
					{result}
				</span>
			</div>
			<ToastContainer/>
		</div>
	);
}
