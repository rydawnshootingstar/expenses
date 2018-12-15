import React from 'react';
import googleProvider from '../firebase/firebase';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin})=> (
    <div>
        <h3>Welcome</h3>
        
        <button onClick={startLogin}>Login With Google</button>
</div>
);

const mapDispatchToProps = (dispatch)=> ({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);