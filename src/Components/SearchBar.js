import React,{useState} from 'react';

const SearchBar = ({handleSearchSubmit}) => {
    const [searchTerm,setSearchTerm] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        handleSearchSubmit(searchTerm);
    }
    return(
        <form className="search-form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="ui fluid icon input">
                <input type="text" 
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)} 
                    placeholder="Search Images" />
            </div>
        </form>
    )
}

export default SearchBar;