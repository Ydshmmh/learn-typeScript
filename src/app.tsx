import * as React from 'react';
import * as ReactDOM from "react-dom";
import Routes from './routes';
import 'antd/dist/antd.less';
import './app.less';

class App extends React.Component {
    public render() {
        return (
            <div>
                <Routes></Routes>
                123
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));