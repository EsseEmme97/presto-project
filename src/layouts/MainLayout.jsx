import MainNavbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


function MainLayout(){
	return (<>
		<MainNavbar/>
		<Outlet/>
		<Footer/>
	</>)
}

export default MainLayout;