import React, { useState } from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import SearchResults from '../../Components/SearchResults/SearchResults'

const Video = () => {
  const {videoId, categoryId} = useParams();
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  return (
   
    <div className="play-container">
      <Navbar setSearchResults={setSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSidebar={() => {}} // Assuming setSidebar is passed here
       />
       <SearchResults searchResults={searchResults} />
       <PlayVideo videoId={videoId}/>
       <Recommended categoryId= {categoryId}/>
    </div>
    
  )
}

export default Video
