
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Technologies from './Components/Technologies';
import type { ITechnology } from './Types/TechnologyType';
import { Suspense } from 'react';

const technologyFetch=async():Promise <ITechnology[]>=>{
const res=await fetch('/data.json');
const data=await res.json()
return data;
}

const App = () => {
	const technologyPromise=technologyFetch()
	return (
		<div>
			<Navbar></Navbar>
			<Banner></Banner>
			<Suspense fallback={<h2>loading....</h2>}>
<Technologies technologyPromise={technologyPromise}></Technologies>
			</Suspense>

			<Footer></Footer>

		</div>
	);
};

export default App;