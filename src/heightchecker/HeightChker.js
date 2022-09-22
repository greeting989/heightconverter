import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Box from "./Box";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

function HeightChker() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [result, setResult] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let feet1 = parseInt(feet);
    let inches1 = parseInt(inches);
    const formValid = +feet1 >= 0 && +inches1 >= 0;
    if (!formValid) {
      return;
    }
    setResult((+feet1 + +inches1 / 12) * 12 * 2.54);
    setFeet("");
    setInches("");
  };
  const handleReset = (e) => {
    setFeet("");
    setInches("");
    setResult(0);
  };
  return (
    <div className="heightDiv">
      <h1 className="title">Height Converter</h1>
      <FormControl className="feet">
        <InputLabel>Feet</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
        />
      </FormControl>
      <br />
      <FormControl className="inches">
        <InputLabel>Inches</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
        />
      </FormControl>
      <br />
      <br />
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Convert to cm
      </Button>
      <Button variant="contained" color="error" onClick={handleReset}>
        Reset
      </Button>
      <Card variant="outlined" className="result">
        {result}
      </Card>
    </div>
  );
}

export default HeightChker;
