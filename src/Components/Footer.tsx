
import LogoImg from "../assets/logo-text.png"

const Footer = () => {
	return (
		<div className='container mx-auto mt-50'>
		<div className='md:flex justify-between sm:grid grid-cols-2 '>
			<div  className='space-y-3'>
				<div>
<img src={LogoImg} alt="" />
</div>
<p className='text-gray-600'>Curated tools, technologies, and resources for developers building <br></br>
modern software.</p>
<div className='flex gap-4 text-[#475569] font-semibold'>
	<h4>Github</h4>
	<h4>Twitter</h4>
	<h4>LinkedIn</h4>
</div>
			</div>
			<div>
				<h2 className='font-bold '>PRODUCT</h2>
				<div className='text-gray-600 space-y-2 mt-3'>
				<p>Home</p>
				<p>Technologies</p>
				<p>Projects</p>
				</div>
			</div>
			<div>
				<h2 className='font-bold'>COMPANY</h2>
				<div className='text-gray-600 space-y-2 mt-3'>
				 <p>About</p>
				<p>Contact</p>
				<p>Carrers</p>
				</div>
			</div>
			<div>
				<h2 className='font-bold'>LEGAL</h2>
				<div className='text-gray-600 space-y-2 mt-3'>
				<p>Privacy Policy</p>
				<p>Terms Of Service</p>
				</div>

			</div>

		</div>
		<h1 className='border border-gray-200 mt-14'></h1>
<p className='text-gray-500 mt-8'>© 2026 Dev Stack. All rights reserved.</p>
		</div>
	);
};

export default Footer;