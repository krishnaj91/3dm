import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ openModal, bodyComponent, handleClose, title }) => {
  return (
    <div>
      <Modal
        show={openModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <div>
          <Modal.Body style={{ overflow: "auto" }}>{bodyComponent}</Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

CustomModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  bodyComponent: PropTypes.element,
};

export default CustomModal;
