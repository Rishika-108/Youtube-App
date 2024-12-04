import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import SearchResults from '../../Components/SearchResults/SearchResults'
import Navbar from '../../Components/Navbar/Navbar';

const Home = ({sidebar}) => {
  const [category, setCategory] = useState (0);
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
 
  return (
    <>
      <Navbar setSearchResults={setSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSidebar={() => {}} // Assuming setSidebar is passed here
       />
       <SearchResults searchResults={searchResults} />
      <Sidebar sidebar={sidebar} category =  {category} setCategory =  {setCategory} />

      {searchResults.length > 0 ? (
        <SearchResults searchResults={searchResults} />
      ) : (
      <div className= {`container${sidebar ? "" : 'large-container'}`}>
           <Feed category = {category}/>
      </div>
       )}
      
    </>

  )
}

export default Home
