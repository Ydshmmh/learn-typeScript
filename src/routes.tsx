
import {Route, BrowserRouter} from 'react-router-dom';
import * as React from 'react';
import Demo from './components/demo/inedx';

const Routes = () => (
    <div>
        <BrowserRouter>
            <Route key="/page/demo" path="/page/demo" component={Demo} />
        </BrowserRouter>
    </div>
)

export default Routes;