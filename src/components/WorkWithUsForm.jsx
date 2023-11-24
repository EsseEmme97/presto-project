import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { createPortal } from "react-dom";
import WorkWithUsModal from "./WorkWithUsModal";

export default function WorkWithUsForm() {
  const [nameIsValid, setNameIsValid] = useState(null);
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [descriptionIsValid, setDescriptionIsValid] = useState(null);
  const [showModal,setShowModal]=useState(false)

  const formIsValid=nameIsValid&&emailIsValid&&descriptionIsValid;

  function handleNameBlur(event) {
    const value = event.target.value.trim();
    setNameIsValid(value !== '' ? true : false);
  }

  function handleEmailBlur(event) {
    const value = event.target.value.trim();
    setEmailIsValid(value !== '' ? true : false);
  }

  function handleDescriptionBlur(event) {
    const value = event.target.value.trim();
    setDescriptionIsValid(value !== '' ? true : false);
  }

  function handleSubmit(event){
    event.preventDefault();
    setShowModal(true);
  }

  return (
    <>
     <WorkWithUsModal show={showModal} onHide={()=>setShowModal(false)}/>
      <h3 className="text-center">Lavora con noi</h3>
      <p className="text-muted text-center">
        Invia la tua candidatura per fare parte del team di Presto
      </p>
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            onBlur={handleNameBlur}
            type="text"
            placeholder="Inserisci il tuo nome"
            name="name"
            className="p-3"
            isInvalid={nameIsValid === false}
          />
          <Form.Control.Feedback type="invalid">Inserisci un nome valido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Label>Indirizzo mail</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Inserisci il tuo indirizzo mail"
            name="email"
            className="p-3"
            isInvalid={emailIsValid===false}
          />
          <Form.Control.Feedback type="invalid">Inserisci un indirizzo mail valido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Control
            as="textarea"
            placeholder="Inserisci una tua breve presentazione"
            style={{ height: '150px' }}
            onBlur={handleDescriptionBlur}
            isInvalid={descriptionIsValid === false}
          />
          <Form.Control.Feedback type="invalid">Inserisci una breve presentazione valida</Form.Control.Feedback>
        </Form.Group>
        <div className="text-center mt-5">
          <Button variant="success" className="text-uppercase primary-bg w-75" disabled={!formIsValid} onClick={handleSubmit}>
            Invia la candidatura
          </Button>
        </div>
      </Form>
    </>
  );
}
