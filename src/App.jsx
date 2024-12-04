import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import SearchResults from './Components/SearchResults/SearchResults'


const App = () => {

  const [sidebar, setSidebar] = useState (true);
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  return (
    <div>
        {/*<Navbar setSidebar={setSidebar}/>*/ }
         {/*<Navbar setSearchResults={setSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSidebar={() => {}} // Assuming setSidebar is passed here
       />
        <SearchResults searchResults={searchResults} />*/ }
        <Routes>
           <Route path='/' element={<Home sidebar = {sidebar}/>} />
            <Route path='/video/:categoryId/:videoId' element= {<Video/>}/>
            <Route path= "/search-results"  element={<SearchResults searchResults={searchResults} />} />
        </Routes>
    </div>
  )
}

export default App

