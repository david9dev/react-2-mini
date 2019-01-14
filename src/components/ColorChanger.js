import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" 
     onChange={(event) => props.method(event.target.value)}
     disabled={props.edit === "false"}
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}
//onChange={(event) => this.props.method(event.target.value)}