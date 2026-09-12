
import React, { useState } from 'react';
import type { ITechnology } from '../Types/TechnologyType';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';


interface TechnologyCardProps {
  technology: ITechnology;
  selectedTechnology: ITechnology[];
  setSelectedTechnology: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnology,
  setSelectedTechnology,
}: TechnologyCardProps) => {
	const [Btn,setBtn]=useState(false)
	const handleBtn=()=>{
setBtn(true)
toast.success(`${technology.name} is Added to Stack Successfully`)

setSelectedTechnology([...selectedTechnology,technology])
	}

	return (
		<div className="card w-96 bg-base-100 border border-gray-300 p-4 rounded-2xl  ">
  <div className="card-body space-y-4  ">

    <div className="flex justify-between">

      <img  className="w-10 h-10 object-contain" src={technology.icon} alt="" />
      <span className="text-xl bg-gray-100 text-blue-600 px-3 py-2 rounded-3xl ">{technology.badge}</span>
    </div>
    <h1 className='font-bold text-xl'>{technology.name}</h1>
	<p className='text-gray-600'>{technology.description}</p>
	< h1 className='border border-gray-100'></h1>
	<div className='flex justify-between'>
		<h1 className='bg-gray-200 px-3 rounded-3xl text-gray-600'>{technology.category}</h1>
		<h1 className='text-gray-600'>{technology.difficulty}</h1>
		<span className='flex items-center justify-center gap-2'><span className='text-yellow-500'><FaStar /></span>
{technology.rating}</span>
	</div>
    <div className="mt-6">

      <button onClick={()=>{handleBtn()}} disabled={Btn} className="btn btn-primary w-full bg-black text-white py-3 rounded-2xl disabled:bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]
disabled:cursor-not-allowed">{

`${Btn?"Added to Stack Successfully":"Add to Stack"}`





		}</button>
    </div>
  </div>
</div>
	);
};

export default TechnologyCard;