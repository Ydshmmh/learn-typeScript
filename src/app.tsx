import * as React from 'react';
import * as ReactDOM from "react-dom";
import {Button} from 'antd';
import 'antd/dist/antd.less';
import './app.less';

class App extends React.Component {
    public render() {
        return (
            <div className="red">
                <Button
                    type="primary"
                >
                    hello react1
                </Button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));