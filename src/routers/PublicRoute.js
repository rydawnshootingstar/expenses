import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

//...rest contains everything that we didn't explicitly destructure
export const PublicRoute = ({isAuthenticated, component: Component, ...rest})=> (
    <Route {...rest} component={(props)=> (
        !isAuthenticated ? (<div><Component {...props}/></div>) : (<Redirect to="/dashboard" />)
        )}/>
);


const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid       //boolean true or false
})

export default connect(mapStateToProps)(PublicRoute);