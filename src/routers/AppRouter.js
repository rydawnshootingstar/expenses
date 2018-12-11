import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import ErrPage from '../components/ErrPage';
import Header from '../components/Header';



const AppRouter = () => (
    //browserrouter requires 1 child to be rendered
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                {/*this is how you comment in react jsx! switches go down and serve up the first match. if nothing matches, ErrPage does*/}
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={ErrPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;