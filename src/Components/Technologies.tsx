import React, { use } from 'react';



import type { ITechnology } from '../Types/TechnologyType';
import { FcRating } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import TechnologyCard from './TechnologyCard';
interface TechnologyProps{
	technologyPromise:Promise<ITechnology[]>
}
const Technologies = ({technologyPromise}:TechnologyProps) => {

	const technologies=use(technologyPromise);
	console.log(technologies)
	return (
		<div className='container mx-auto'>
			<h1 className='font-extrabold text-4xl'>Explore the <span className='bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
			<p className='text-gray-500 mt-4'>Pick one technology per category to build your ideal stack.</p>
			<div className='flex justify-between mt-16'>

				<div className='grid grid-cols-3 gap-8 '>
					{
						technologies.map((technology:ITechnology)=>{
							return(<TechnologyCard key={technology.id} technology={technology}></TechnologyCard>
							)
						})
					}
				</div>
				<div>
					Name:Arefin
				</div>
			</div>
		</div>
	);
};

export default Technologies;