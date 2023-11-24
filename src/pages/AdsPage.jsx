import { Container, Row } from "react-bootstrap";
import { useRouteLoaderData } from "react-router-dom";
import SingleAd from "../components/SingleAd";
import FilterForm from "../components/FilterForm";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AdsPage() {
  const defaultData = useRouteLoaderData("main");
  const [data, setData] = useState(defaultData);

  return (
      <Container>
        <h2 className="text-center mt-5">
          Tutte le nostre <span className="primary-color">Categorie</span>
        </h2>
        <FilterForm setData={setData} defaultData={defaultData} />
        <Row className="mt-5 gap-5 justify-content-center">
          {data.map((ad) => (
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
        <Outlet/>
      </Container>
  );
}
