import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'

export default function MainRouter(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login initialMessage="Log in"></Login>
                    </Route>
                    <Route path="/">
                        <Welcome initialMessage="Welcome"></Welcome>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}