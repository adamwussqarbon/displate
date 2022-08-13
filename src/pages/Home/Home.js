import { useEffect, useState } from "react";

import './Home.style.css'
import { Button } from '../../components/Button/Button';

export function Home() {
  const [message, setMessage] = useState([]);

  useEffect( () => {
    (async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const { message } = await response.json();
      setMessage(Object.keys(message));
    })();
  }, []);

  return (
    <div className="home">
      { message.map((dog) => (
        <Button
          key={dog}
          content={dog}
        />
      )) }
    </div>
  );
}
