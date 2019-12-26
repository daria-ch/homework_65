import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";
import Pages from "./containers/Pages";
import AdminPage from "./containers/AdminPage";


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path='/' exact render={() => <h1 style={{textAlign: 'center'}}>Hello!</h1>}/>
                <Route path='/pages/admin' exact component={AdminPage}/>
                <Route path='/pages/:name' component={Pages}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
