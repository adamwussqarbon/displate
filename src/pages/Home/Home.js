import { useEffect, useState } from "react";

import { Button } from '../../components/Button/Button';
import { CustomModal } from '../../components/Modal/CustomModal'
import { ErrorAlert } from "../../components/ErrorAlert/ErrorAlert";

export function Home() {
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null)
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
      try {
        setError(null)
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const { message } = await response.json();
        setMessage(Object.keys(message));
      }
      catch (e) {
        setError(e)
      }
    })();
  }, []);

  return (
    <>
      <div className="container px-3 py-3 justify-content-center">
        {
          error ?
            <ErrorAlert error="We cant load breeds" />
            :
            message.map((breed) => (
              <Button
                key={breed}
                content={breed}
                handleClick={chooseBreed}
                children={breed}
              />
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
