import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
		<div className={`flex justify-between items-center w-full h-20 fixed ${props.mode==='dark'?'text-white bg-black':'text-black bg-white'} px-4`}>
			
            <div>
				<h1 className="text-5xl font-signature ml-2">Samkit Samsukha</h1>
			</div>
			
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-300 duration-200"
                    >
                        <Link to={link} smooth duration={800}>{link}</Link>
                    </li>
					
                ))}
			</ul>
			<div className="hidden md:flex flex-row">
				<input className="w-4 mx-2 hover:cursor-pointer" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode} />
            	<label className="hover:cursor-pointer" htmlFor="toggleMode">{props.mode==='light'?'Dark':'Light'} Mode</label>
			</div>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${props.mod==='dark'? 'bg-gradient-to-b from-black to-gray-800 text-gray-500':'bg-gradient-to-b from-white to-gray-400 text-gray-900'}`}>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>{link}</Link>
                    </li>
                ))}
				<div className="md:hidden flex flex-row my-4">
				<input className="w-4 mx-2 hover:cursor-pointer" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode} />
            	<label className="text-4xl hover:cursor-pointer" htmlFor="toggleMode">{props.mode==='light'?'Dark':'Light'} Mode</label>
			</div>
            </ul>
            )}
			

            

		</div>
	);
};

export default Navbar;
