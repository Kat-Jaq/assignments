import React from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Link to="/login"> Log In </Link>
            </div>
        )
    }
}