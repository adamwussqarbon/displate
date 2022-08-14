import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

import { Spinner } from '../Spinner/Spinner';
import './CustomModal.style.css'

export function CustomModal({ showModal, closeModal, breed }) {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false)

  const fetchImg = async () => {
    setLoading(true);
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const { message } = await response.json();
    setImg(message);
    setLoading(false);
  }

  useEffect( () => {
    fetchImg();
  }, []);

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {breed}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <div className="img-container d-flex justify-content-center align-items-center">
          {
            loading ?
              <Spinner />
              :
              <img src={img} alt="dog" className="w-100 h-100" />
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={fetchImg}>
          Next photo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
