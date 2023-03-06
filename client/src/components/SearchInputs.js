import React, { useState} from "react";
import { useHistory } from "react-router-dom";

export const SearchInput = () =>
{
  const [search, setSearch] = useState("");
  const history = useHistory();
  return (
    <div>
      <InputGroup>
       <Input
        onChange={(e) => {
        setSearch(e.target.value)
        }}
        type="search"
        placeholder="Search product"
       />
       <InputRightElement>
        <div>
          <button onClick={() => history.push(`/search?query=${search}`)} >Search</button>
        </div>
       </InputRightElement>
      </InputGroup>
    </div>
  )
}
