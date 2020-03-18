import React from 'react';
import {Route, Switch} from 'react-router'
import {ConnectedRouter as Router} from "connected-react-router"
import {history} from "./redux/store";
import PageContainer from "./components/layout/page-container";
import Dashboard from "./components/pages/Dashboard";




const App = () =>
    <Router history={history}>
        <Switch>
            <PageContainer>
                <Route exact path={'/'} render={() => <Dashboard/>}/>
            </PageContainer>
        </Switch>
    </Router>

export default App;
