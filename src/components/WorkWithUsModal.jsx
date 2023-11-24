import { Modal,Button } from "react-bootstrap"

export default function WorkWithUsModal(props){
	return <Modal
	{...props}
	size="lg"
	aria-labelledby="contained-modal-title-vcenter"
	centered
  >
	<Modal.Header closeButton>
	  <Modal.Title id="contained-modal-title-vcenter">
		Congratulazioni !!
	  </Modal.Title>
	</Modal.Header>
	<Modal.Body>
	  <p>
		Ti ringraziamo per aver inviato la tua candidatura, a breve riceverai una mail di conferma ricezione
	  </p>
	</Modal.Body>
	<Modal.Footer>
	  <Button variant="success" onClick={props.onHide}>Close</Button>
	</Modal.Footer>
  </Modal>
}