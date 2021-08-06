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
      <h1>contador: {count}</h1>
      {props.count2}
      <Button variant="primary" text="sumar" cuandohagoClick={() => setCount(count + 1)} />
      <Button text="restar" cuandohagoClick={() => setCount(count - 1)} />
    </React.Fragment>
  );
}