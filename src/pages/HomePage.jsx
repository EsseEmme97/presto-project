import Business from "../components/Business";
import Categories from "../components/Categories";
import WorkWithUs from "../components/WorkWithUs";
import Ads from "../components/Ads";

function HomePage(){
	return <>
		<Business/>
		<Categories/>
		<WorkWithUs/>
		<Ads></Ads>
	</>
}

async function HomePageLoader() {
	const request = await fetch("src/mockoup/annunci.json");
	const data = await request.json();
	return data;
  }
  

export {HomePageLoader};

export default HomePage;