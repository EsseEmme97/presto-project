import { Container, Row } from "react-bootstrap";
import { useRouteLoaderData } from "react-router-dom";
import SingleAd from "./SingleAd";
import { Link } from "react-router-dom";

export default function Ads() {
  const myAds = useRouteLoaderData("main");
  return (
    <Container className="mt-5">
      <h2 className="text-center">
        I nostri <span className="primary-color">Annunci</span>
      </h2>
      <p className="text-muted text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare
        justo et elementum imperdiet. Quisque vel velit nisi. Morbi fermentum
        sapien dui,
      </p>
      <Row className="mt-5 gap-3 justify-content-center">
        {myAds.slice(0, 6).map((ad) => (
          <SingleAd
            key={ad.id}
            id={ad.id}
            name={ad.name}
            price={ad.price}
            category={ad.category}
            type={ad.type}
          />
        ))}
      </Row>
      <h3 className="mt-5 text-center">
        <Link to="/ads">
          Visualizza altri <span className="primary-color">Annunci</span>
        </Link>
      </h3>
    </Container>
  );
}
