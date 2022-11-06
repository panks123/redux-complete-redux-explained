import React from 'react'
import { useSelector } from 'react-redux'
// 'react-redux' - React-Redux lets us use all the operations from Redux in the React application


const Navbar = () => {
    // useSelector is used to access the redux store's state. This hook takes a selector function as an argument that returns the part of the state that we want. 
    // The selector is called with the store state.
    const amount = useSelector(state => state.amount)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    <button type="button" disabled={true} className="btn btn-primary" >Your balance: { amount }</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
