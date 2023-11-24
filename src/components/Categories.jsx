import { Container,Row } from "react-bootstrap";
import { categories } from "../mockoup/categoriesMockup";
import SingleCategory from "./SingleCategory";
import { propTypes } from "react-bootstrap/esm/Image";

function Categories(){
	return <Container className="mt-5">
		<h3 className="text-center fs-1">Le nostre <span className="primary-color">Categorie</span></h3>
		<p className="text-center text-muted mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo et elementum imperdiet. Quisque vel velit nisi. Morbi fermentum sapien dui,</p>
		<Row className="justify-content-center gap-4 mt-5">
			{categories.map((category,index)=>{
				return <SingleCategory key={index} name={category.name} icon={category.icon} announcementsCount={category.announcementsCount}/>
			})}
		</Row>
	</Container>
}

export default Categories;