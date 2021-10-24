import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menubartemplate from "./template/Menubartemplate.js";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";

function App() {
  const [data, setData] = useState(null);
  const [fibonacci, setFibonacci] = useState([]);
  const [number, setNumber] = useState();

  React.useEffect(() => {}, []);

  const onNumberChange = (e) => {
    setNumber(e.value);
  };

  const handleSubmit = () => {
    console.log("Is inside" + number);

    fetch("/fibonacci/" + number)
      .then((res) => res.json())
      .then((data) => {
        setFibonacci(data);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <Menubartemplate />

      <div className="p-grid p-align-center">
        <div className="p-col">
          <Card
            title="How to Use"
            style={{ marginBottom: "2em", marginTop: "2em" }}
          >
            <div className="p-field">
              <div className="p-text-normal">
                Input your desired number to generate its fibonacci sequence on
                the "Generate Fibonacci Form" and hit the "Submit" button. Your
                fibonacci sequence is generated along with its sorted form
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-grid p-align-center">
        <div className="p-col ">
          <Card title="Generate Fibonacci" style={{ marginBottom: "2em" }}>
            <div className="p-field">
              <label htmlFor="number" className="p-sr-only">
                Number
              </label>
              <InputNumber
                inputId="integeronly"
                value={number}
                onValueChange={(e) => setNumber(e.value)}
              />
            </div>
            <Button type="button" label="Submit" onClick={handleSubmit} />
          </Card>
        </div>
      </div>

      <div className="p-grid p-align-center">
        <div className="p-col">
          <Card title="Result" style={{ marginBottom: "2em" }}>
            <div className="p-field">
              <div>
                <h4>
                  Fibonacci Sequence: {JSON.stringify(fibonacci.fibonacci)}
                </h4>
                <h4>Sorted Sequence: {JSON.stringify(fibonacci.sorted)}</h4>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
