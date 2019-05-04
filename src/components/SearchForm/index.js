import React from "react";

function SearchForm(props) {
  return (
<div 
style={{
    border: "1px, black, solid"
}}>
<h4>Book Search</h4>
<hr/>
<form id="searchForm">
<label for="searchInput">Book</label>
<input id="searchInput" 
style={{
    width: "90%"
 }} placeholder="Harry Potter" onChange={props.handleOnChange}/>
<button type="submit" onClick={props.handleFormSubmit}>Search</button>
</form>
</div>

  );
}

export default SearchForm;