
import React from 'react';
import LogoImg from "../assets/logo-text.png";

const Navbar = () => {
	return (
		<div className="bg-white border border-gray-100 sticky top-0 z-50">
			<div className="container mx-auto">


				<div className="flex md:hidden items-center justify-between py-4 px-4">


					<button className="text-2xl">
						☰
					</button>


					<img src={LogoImg} alt="Logo" className="w-32" />


					<div className="flex gap-2">
						<button className="text-sm">Sign In</button>

						<button className="bg-[#D91B7E] text-white text-sm px-3 py-2 rounded-full">
							Sign Up
						</button>
					</div>

				</div>


				<div className="hidden md:flex justify-between items-center py-6">


					<div>
						<img src={LogoImg} alt="Logo" />
					</div>


					<nav className="flex justify-center items-center gap-8 text-gray-600">
						<a className="text-red-500">Home</a>
						<a>Technologies</a>
						<a>Projects</a>
						<a>About</a>
						<a>Contact</a>
					</nav>

					
					<div className="flex gap-4">
						<button>Sign In</button>

						<button className="bg-[#D91B7E] text-white p-2 px-4 rounded-full">
							Sign Up
						</button>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Navbar;
