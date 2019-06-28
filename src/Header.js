import React from "react"
import "./App.css"

function Header() {
    return (<div className="Header">
        <img width="60px;" src="https://hn.algolia.com/assets/logo-hn-search.png" />
        <p className="HeaderName">Search Hacker News</p>
        <input className="SearchBox" type="text" placeholder="Search stories by title, url or author"/>
    </div>)
}

export default Header