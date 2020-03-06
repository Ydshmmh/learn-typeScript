import React from "react";
import ReactDOM from "react-dom";
import {Button} from "antd";
// import 'antd/dist/antd.less';

// import './app.less';
class App extends React.Component {
    public render() {
        return (
            <div className="red">
                hello react
                <Button>卢浩然牛逼</Button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));