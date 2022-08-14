import { useEffect, useState } from "react";

import { Button } from '../../components/Button/Button';
import { CustomModal } from '../../components/Modal/CustomModal'

export function Home() {
  const [message, setMessage] = useState([]);
  const [breed, setBreed] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  const chooseBreed = (breed) => {
    setBreed(breed);
    openModal();
  }

  useEffect( () => {
    (async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const { message } = await response.json();
      setMessage(Object.keys(message));
    })();
  }, []);

  return (
    <>
      <div className="container px-3 py-3 justify-content-center">
        {
          message.map((breed) => (
            <Button
              key={breed}
              content={breed}
              handleClick={chooseBreed}
            >
              {breed}
            </Button>
          ))
        }
      </div>
      {
        showModal &&
        <CustomModal
          closeModal={closeModal}
          showModal={showModal}
          breed={breed}
        />
      }
    </>
  );
}
