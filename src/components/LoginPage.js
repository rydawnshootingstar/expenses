import React from 'react';
import googleProvider from '../firebase/firebase';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin})=> (
    <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Hey Big Spender</h1>
        <p>Track your expenses </p>
        
        <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
</div>
);

const mapDispatchToProps = (dispatch)=> ({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);