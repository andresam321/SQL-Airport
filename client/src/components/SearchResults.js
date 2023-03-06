import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { slug } = useParams();
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(`API_URL/search?q=${query}`); setSearchResults(data.products);
        } catch (error) {
         setError(error.response?.data?.message);
         }
        };
         searchProduct();
       }, []);

 return (
    <div>
      {searchResults.map((searchResult, index) => (
        <><div key={searchResult.id} /><p>{searchResult.name}</p></>
        
      ))}
    </div>
  )
}
