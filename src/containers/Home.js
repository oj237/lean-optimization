import React from 'react'
import NavbarHeader from './Navbar'

export default function Home() {
    return(
        <div className="Home">
            <NavbarHeader />
            <div className="homer">
                <h1>Dashboard Page</h1>
                <p>This is for the dashboard</p>
            </div>
        </div>
    )
}