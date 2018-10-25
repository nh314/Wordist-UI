import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css";

import { CreateWordListForm } from "./component/WordList";

const rootElement = document.getElementById("root");
ReactDOM.render(<CreateWordListForm />, rootElement);
