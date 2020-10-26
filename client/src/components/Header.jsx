import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    const { currentUser, handleLogout } = props

    return(
        <div>
            <h1>Game Page</h1>
            {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/games'>Games</Link>
        </>
      }
        </div>
    )
}