import React from 'react'
import ListComponents from '../components/ListComponents'
import {Link} from '@reach/router'
const Main = () => {
    return (
        <div>
            <h1>Faviourte Author</h1>
            <Link to ="/new">add an author</Link>
            <ListComponents />
        </div>
    )
}

export default Main
