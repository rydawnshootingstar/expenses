import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import ErrPage from '../components/ErrPage';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    //Router allows us to pass in our own history object instead of using Browser's
    <Router history={history}>
        <div>
            <Switch>
                {/*Anything sent to private path will be conditionally rendered based on the presence of an auth token*/}
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={ErrPage}/>
            </Switch>
        </div>

    </Router>
);

// const AppRouter = () => (
//     //browserrouter requires 1 child to be rendered. it uses the browser's built in history
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Switch>
//                 {/*this is how you comment in react jsx! switches go down and serve up the first match. if nothing matches, ErrPage does*/}
//                 <Route path="/" component={LoginPage} exact={true}/>
//                 <Route path="/dashboard" component={ExpenseDashboardPage} />
//                 <Route path="/create" component={AddExpensePage}/>
//                 <Route path="/edit/:id" component={EditExpensePage}/>
//                 <Route path="/help" component={HelpPage}/>
//                 <Route component={ErrPage}/>
//             </Switch>
//         </div>

//     </BrowserRouter>
// );

export default AppRouter;