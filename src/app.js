import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter, {history} from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

var appRoot = document.getElementById('words');

//provider passes our store to our jsx
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, appRoot);
        hasRendered = true;
    }
};

//render this until our assets are all fetched from DB
ReactDOM.render(<LoadingPage />, appRoot);


//runs when user's authentication state changes
firebase.auth().onAuthStateChanged((user)=> {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=> {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        //redirect user to login page if they ever log out
        history.push('/');
    }
});

