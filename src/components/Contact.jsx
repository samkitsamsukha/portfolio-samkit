import React from "react";

export default function Contact() {
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

	return (
		<div
			name="contact"
			className="bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
						Contact
					</p>
					<p className="text-xl py-6">
						Submit the form below to get in touch with me.
					</p>
				</div>

        <div className='flex justify-center items-center'>
        <form onSubmit={onSubmit} className='flex flex-col w-full md:w-1/2'>
					<input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none' required />
					<input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 text-white rounded-md focus:outline-none' required />
					<textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required></textarea>

					<button type="submit" className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-auto flex items-center rounded-md hover:scale-105 duration-300 mt-4'>Let's talk</button>
				</form>
				
        </div>
				<span className="text-center mt-4 p-2 text-green-300 font-bold">{result}</span>
			</div>
		</div>
	);
}
