



import { use, useState } from 'react';
import type { ITechnology } from '../Types/TechnologyType';


import TechnologyCard from './TechnologyCard';

;
import { toast } from 'react-toastify';

interface TechnologyProps{
	technologyPromise:Promise<ITechnology[]>
}
const Technologies = ({technologyPromise}:TechnologyProps) => {

const handleRemoveAll=()=>{
	setSelectedTechnology([])
	toast("All Technologies are Removed From Stack")
}
	const handleRemoveTechnology = (selectTechnology: ITechnology) =>{
		console.log("tech",selectTechnology)

const restTechnology = selectedTechnoloy.filter(
  (seltTechnology: ITechnology) =>
    seltTechnology.name !== selectTechnology.name
);

setSelectedTechnology(restTechnology)
toast.error(`${selectTechnology.name} is removed Succesfully`)

	}

 const [selectedTechnoloy, setSelectedTechnology] =
    useState<ITechnology[]>([]);
	const technologies=use(technologyPromise);
	console.log(technologies)
	return (
		<div className='container mx-auto'>
			<h1 className='font-extrabold text-4xl'>Explore the <span className='bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
			<p className='text-gray-500 mt-4'>Pick one technology per category to build your ideal stack.</p>
			<div className='flex justify-between mt-16'>

				<div className=' grid  lg:grid-cols-3 gap-8 '>
					{
						technologies.map((technology:ITechnology)=>{
							return(<TechnologyCard selectedTechnology={selectedTechnoloy} setSelectedTechnology={setSelectedTechnology}key={technology.id} technology={technology}></TechnologyCard>
							)
						})
					}
				</div>
				<div className={`p-8 w-72 shadow-sm rounded-2xl space-y-3 ${selectedTechnoloy.length>0?"h-150":'h-80'} `}>
					<h2 className='font-bold text-2xl'>Your Stack</h2>

					<p className='text-gray-400'>{

selectedTechnoloy.length>0?`${selectedTechnoloy.length} ${
        selectedTechnoloy.length === 1 ? "Technology" : "Technologies"
      }`:"No Technologies Select yet."
						}</p>
					{
						selectedTechnoloy.map((selectTechnology)=>{
							return(
								<div key={selectTechnology.id} className='flex  items-center justify-between border border-gray-500 py-2 px-1 rounded-2xl'>
									<div className='w-8 h-8'>
										<img src={selectTechnology.icon} alt="" />
									</div>
									<div>
									<h1 className='font-bold'>{selectTechnology.name}</h1>
									<p className='text-gray-500'>{selectTechnology.category}</p>
									</div>
									<span onClick={()=>handleRemoveTechnology(selectTechnology)} className='fles justify-center items-center text-gray-600 font-bold text-2xl cursor-pointer'>✕ </span>
								</div>
							)
						})
					}
					{
selectedTechnoloy.length>0?(<button onClick={handleRemoveAll} className='btn w-full border border-red-500 text-red-500 rounded-2xl mt-5'>Remove All</button>):(<p className='text-gray-400 p-6 rounded-2xl border border-dashed border-gray-200 mt-30'>Your Stack is Empty</p>)


						}
				</div>
			</div>
		</div>
	);
};

export default Technologies;