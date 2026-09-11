import React from 'react';


import BannerImg from "../assets/banner-stack.png"
const Banner = () => {
	return (
		<div className='container mx-auto mt-12 flex justify-between items-center  '>
			<div className='space-y-8'>
<h1 className='font-extrabold text-6xl'>Build Your Ideal <br></br><span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7D] to-[#7C3AED] bg-clip-text text-transparent">
Development Stack</span></h1>
<p className='text-gray-600'>Explore frontend, backend, database, and tooling options,<br></br>
compare them side by side, and put together the stack that fits your<br></br>
next project.</p>
<div className='flex gap-4'>
	<button className='bg-gradient-to-r from-[#F97316] to-[#EC4899] p-3 rounded-xl text-white'>Explore Technologies</button>

	<button className='py-3 px-10 rounded-xl text-gray-600 border border-gray-400'>Learn More</button>
</div>

			</div>
			<div>
				<img src={BannerImg} alt="" />
			</div>
		</div>
	);
};

export default Banner;