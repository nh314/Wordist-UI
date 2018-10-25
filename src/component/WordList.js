import React, { Component } from "react";
import CountrySelector from "./CountrySelector";
import "./WordList.css";

export class CreateWordListForm extends Component {
  render() {
    const selectorStyles = {
      flexGrow: 1
    };
    return (
      <div className="SelectorGrid">
        <div className="item">
          <CountrySelector style={selectorStyles} />
        </div>
      </div>
    );
  }
}
