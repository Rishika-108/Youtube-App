import React from 'react'
import './SearchResults.css'
import { Link } from 'react-router-dom';


const SearchResults = ({ searchResults, handleVideoClick }) => {
    if (!Array.isArray(searchResults) || searchResults.length === 0) {
        return <div> </div>; // You can customize this message
      }
  
  return (

      //Display search results 

      <div className="search-results">
        
        {searchResults.map((item, i) => (
            <div className="results" key={i}>
               <Link to={`/video/${item.snippet.categoryId || '10'}/${item.id.videoId}`}>
               <h3>{item.snippet.title}</h3>
               <p>{item.snippet.description}</p>
               <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
             {/*{item.snippet?.thumbnails?.default?.url && (
                            <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                        )}*/ }
                </Link>
          </div>
          
        ))}
      </div>

)
}
export default SearchResults
