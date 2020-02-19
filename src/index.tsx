import * as React from "react";
import * as ReactDOM from "react-dom";

import Routes from "./routes";


const App = () => (
    <div>
        <Routes />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById("example")
);