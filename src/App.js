import React, { useState } from "react";
import "./App.css";
import Select from "react-select";
import option from "./Options";

export default function App() {
 
  const [selectedOptions, setSelectedOptions] = useState();

  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <h2>Select box</h2>
      <div className="dropdown-box">
        <Select
          options={option}
          placeholder="Choose options"
          value={selectedOptions}
          onChange={handleSelect}
          isMulti
          isSearchable={true}
          
        />
      </div>
    </div>
  );
}
