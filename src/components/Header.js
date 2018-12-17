import React from 'react';
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';


const Header = ({startLogout})=> (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
        <Link to="/dashboard" className="header__title" >
            <h1>Expensify</h1>
        </Link>
        
        
        {/*<NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink> | */}
        {/*<NavLink to="/edit" activeClassName="is-active"> Edit Expense</NavLink> | */}
        {/*<NavLink to="/help" activeClassName="is-active"> Help</NavLink> */}
        <button onClick={startLogout} className="button button--link">Logout</button>
        </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch)=> ({
    startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
