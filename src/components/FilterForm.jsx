import { Container, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function FilterForm(props) {
  const { setData, defaultData } = props;
  const text = useRef();
  const category = useRef();
  const min = useRef();
  const max = useRef();
  const [showBtn, setShowBtn] = useState(false);

  function renderCategories() {
    const categories = defaultData.map((el) => el.category);
    return [...new Set(categories)].map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
  }

  function handleRemoveFilters(e) {
    e.preventDefault();
    setData(defaultData);
    setShowBtn(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowBtn(true);
    setData((prev) => {
      return prev.filter((el) => {
        const textMatch = el.name
          .toLowerCase()
          .includes(text.current.value.toLowerCase());
        const categoryMatch =
          category.current.value === "all" ||
          el.category === category.current.value;
        const minMatch =
          Number(min.current.value) === 0 ||
          el.price >= Number(min.current.value);
        const maxMatch =
          Number(max.current.value) === 0 ||
          el.price <= Number(max.current.value);

        return textMatch && categoryMatch && minMatch && maxMatch;
      });
    });
  }

  return (
    <Container>
      <Form className="p-3 primary-bg rounded row" onSubmit={handleSubmit}>
        <Form.Group className="col-md-3">
          <Form.Label className="text-white">Cerca per testo</Form.Label>
          <Form.Control
            type="text"
            placeholder="inserisci il testo"
            ref={text}
          />
        </Form.Group>
        <Form.Group className="col-md-3">
          <Form.Label className="text-white">Cerca per categoria</Form.Label>
          <Form.Select ref={category}>
            <option value="all">Tutte le categorie</option>
            {renderCategories()}
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-md-3 row">
          <Form.Group className="col">
            <Form.Label className="text-white">Min</Form.Label>
            <Form.Control type="number" placeholder="€" ref={min} />
          </Form.Group>
          <Form.Group className="col">
            <Form.Label className="text-white">Max</Form.Label>
            <Form.Control type="number" placeholder="€" ref={max} />
          </Form.Group>
        </Form.Group>
        <div className="col-md-3 d-flex align-items-end">
          <Button variant="primary" className="w-100" type="submit">
            Cerca
          </Button>
          {showBtn && (
            <Button
              className="ms-2"
              variant="secondary"
              onClick={handleRemoveFilters}
            >
              <FontAwesomeIcon icon={faFilterCircleXmark} />
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}
