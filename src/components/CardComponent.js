import React, { useState, useEffect} from "react";
import Button from "./Button";

export default function CardComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
      return () => {
     
    };
  }, []);

  return (
    <React.Fragment>
      <p>Agregar: {count}</p>
      {props.count2}
      <Button variant="primary" text="+" cuandohagoClick={() => setCount(count + 1)} />
      <Button text="-" cuandohagoClick={() => setCount(count - 1)} />
    </React.Fragment>
  );
}