import * as React from "react";
import * as ReactDOM from "react-dom";

import { Demo } from "./components/demo/inedx";

ReactDOM.render(
    <Demo
        compiler="TypeScript"
        framework="React"
    />,
    document.getElementById("example")
);