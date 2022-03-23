import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/List";
import "./RezultatCautare.css";

function RezultatCautare() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    setTimeout(() => { var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)},3000)
   
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Cauta abreviere cu delay 3 secunde (case insensitive)"
        />
      </div>
 <List input={inputText} />
    </div>
  );
}

export default RezultatCautare;