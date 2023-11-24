import { useRouteLoaderData, useParams } from "react-router-dom";
import Slider from "../components/Slider";

export default function AnnouncementPage() {
  const data = useRouteLoaderData("main");
  const { id } = useParams();
  const announcement = data.filter((el) => el.id == id)[0];

  const typeText= announcement.type == "sell" ? "vendo" : "cerco";
 const typeStyle= announcement.type=="sell" ? "bg-danger" : "primary-bg"

  console.log(announcement);
  return (
    <section className="container">
      <div className="row mt-5">
        <Slider />
        <div className="col-md-6">
          <span className="badge bg-secondary heebo fs-6 p-2">{announcement.category}</span>
		  <span className={`badge p-2 ${typeStyle} heebo fs-6 p-2 ms-2`}>{typeText}</span>
          <h2 className="mt-3 fw-bold fs-1">{announcement.name}</h2>
          <p className="text-muted">Lorem ipsum sic tantum non ore</p>
		  <p className="fw-bold fs-4 ">{`${announcement.price} €`}</p>
          
		<button className="btn btn-success d-block mt-5 primary-bg">Contatta il venditore</button>
        </div>
      </div>
    </section>
  );
}
