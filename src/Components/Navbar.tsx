import React from 'react';

import LogoImg from "../assets/logo-text.png"

const Navbar = () => {
	return (
		<div className='bg-white border z-50 border-gray-100 sticky top-0'>
			<div className='flex justify-between container mx-auto mt-6'>
<div>
	<img src={LogoImg} alt="" />
	</div>

<nav className='flex justify-center items-center gap-8 text-gray-600'>
	<a className='text-red-500'>Home</a>
	<a>Technologies</a>
	<a>Projects</a>
	<a>About</a>
	<a>Contact</a>
</nav>
<div className='flex gap-4'>
<button>Sign In</button>
<button className='bg-[#D91B7E] text-white p-2 px-4 rounded-full'>Sign Up</button>
</div>
</div>
		</div>
	);
};

export default Navbar;