import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/user_profile.jpg'
import { Link, Navigate, useNavigation } from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults'
import { API_KEY } from '../../data'
import { useState,useNavigate } from 'react'

const Navbar = ({setSearchResults, searchTerm, setSearchTerm,setSidebar}) => {
 
const handleSearch = () => {
  if (!searchTerm) return;
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&regionCode=IN&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => setSearchResults(data.items || []))
    .catch(console.error);
};

const handleInputChange = (e) => {
  setSearchTerm(e.target.value);
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};

  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon'onClick={()=>setSidebar(prev=>prev===false?true:false)} src= {menu_icon} alt="" />
            <Link to='/'><img className='logo' src= {logo} alt=""/></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" placeholder='Search' value={searchTerm} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <img onClick= {handleSearch} src= {search_icon} alt="" />
            </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src= {upload_icon} alt="" />
            <img src= {more_icon} alt="" />
            <img src= {notification_icon} alt="" />
            <img src= {profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar
