import React, { use, useState } from 'react';



import type { ITechnology } from '../Types/TechnologyType';
import { FcRating } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import TechnologyCard from './TechnologyCard';
interface TechnologyProps{
	technologyPromise:Promise<ITechnology[]>
}
const Technologies = ({technologyPromise}:TechnologyProps) => {
const [selectedTechnoloy , setSelectedTechnology]=useState([])
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
							return(<TechnologyCard selectedTechnology={selectedTechnoloy} setSelectedTechnology={setSelectedTechnology}key={technology.id} technology={technology}></TechnologyCard>
							)
						})
					}
				</div>
				<div className='p-10  shadow-sm h-80 rounded-2xl space-y-3'>
					<h2 className='font-bold text-2xl'>Your Stack</h2>
					<p className='text-gray-400'>No Technologies Select yet.</p>
					{
						selectedTechnoloy.map((selectTechnology)=>{
							return(
								<div className='flex gap-3'>
									<div className='w-8 h-8'>
										<img src={selectTechnology.icon} alt="" />
									</div>
									<h1>{selectTechnology.name}</h1>
								</div>
							)
						})
					}
					<p className='text-gray-400 p-6 rounded-2xl border border-dashed border-gray-200 mt-30'>Your Stack is Empty</p>
				</div>
			</div>
		</div>
	);
};

export default Technologies;